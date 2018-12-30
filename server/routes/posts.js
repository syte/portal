const express = require("express");
const Models = require("../models");
const { Validator } = require("../utils/validator");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const router = express.Router();
const check_auth = require("../middleware/check-auth");

router.use(check_auth);

router.put("/", async (req, res, next) => {
  const validator = new Validator();
  validator
    .field("title")
    .isRequired()
    .len(255);
  validator.field("content").isRequired();

  const result = await validator.validate(req.body);

  if (!result.isValid) {
    return res.status(400).send(result);
  }

  console.log(req.body.userId, req.user.id);
  if (req.body.userId != req.user.data.id) {
    return res.sendStatus(403);
  }

  // Prevent overposting
  const { createdAt, updatedAt, ...body } = req.body;

  try {
    const post = await Models.Post.create(body);
    res.json(post);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Model.Post.findOne({ where: { id: req.param.id } });
    if (!post) {
      return res.sendStatus(200);
    } else if (post.userId != req.user.data.id) {
      return res.sendStatus(403);
    }
    await Models.Post.destroy({ where: { id: req.params.id } });
    // TODO: Ensure the user has permissions to delete.
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res) => {
  const validator = new Validator();
  validator
    .field("title")
    .isRequired()
    .len(255);
  validator.field("content").isRequired();

  const result = await validator.validate(req.body);

  if (!result.isValid) {
    return res.status(400).send(result);
  }

  if (req.body.userId != req.user.data.id) {
    return res.sendStatus(403);
  }

  const { createdAt, updatedAt, id, ...body } = req.body;
  // TODO: Ensure the user has permissions to delete.
  try {
    await Models.Post.update(body, { where: { id } });
    const post = await Models.Post.findOne({ where: { id } });
    res.json(post);
  } catch (e) {
    next(e);
  }
});

router.post("/paginate", async (req, res) => {
  const filterQuery = query => {
    let filter = {
      limit: 5,
      order: [["offset", "ASC"]],
      where: {}
    };

    const { offset, userId } = req.body;

    if (offset) {
      filter.where["offset"] = {
        [Op.gt]: offset
      };
    }

    if (userId) {
      filter.where["userId"] = userId;
    }

    return filter;
  };

  try {
    const posts = await Models.Post.findAll(filterQuery(req.query));
    const users =
      posts.length > 0
        ? await Models.User.findAll({
            where: {
              id: {
                [Op.in]: posts.map(p => p.userId)
              }
            }
          })
        : [];

    res.json({
      posts: posts.reduce((acc, p) => ({ ...acc, [p.id]: p }), {}),
      users: users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {}),
      offset: Math.max.apply(null, posts.map(x => x.offset))
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

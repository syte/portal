const express = require('express');
const bcrypt = require('bcrypt');
const Models = require("../models");
const {Validator, titleCase} = require('../utils/validator');
const hash_password = require('../utils/hash_password')
const router = express.Router();
const fs = require('fs');
const util = require('util');
const jwt = require('jsonwebtoken');

router.put('/register', async (req, res) => {
  const validator = new Validator();
  validator.field('firstName').isRequired().len(255);
  validator.field('lastName').isRequired().len(255);
  validator.field('password').isRequired().custom((value) =>
    value === req.body.confirmPassword,
    (field) => `${titleCase(field)} did not match its confirmation`);

  validator.field('email').isRequired().isEmail().len(255).custom(async (value) => {
    const user = await Models.User.findOne({ where: { email : value }});
    return !user;
  }, (field) => `${titleCase(field)} has already been taken`);
  
  const result = await validator.validate(req.body);

  if(!result.isValid) {
    return res.status(400).json(result);
  }

  // Prevent overposting
  const { password, createdAt, updatedAt, ...body } = req.body;
  const password_hash = await hash_password(password)
  const user = await Models.User.create({
    ...body,
    password_hash
  });

  res.json(user);
});

router.post('/login', async(req, res) => {
  const validator = new Validator();
  validator.field('email').isRequired();
  validator.field('password').isRequired();

  const result = await validator.validate(req.body);

  if(!result.isValid) {
    return res.status(400).json(result);
  }

  const user = await Models.User.findOne({ where: { email: req.body.email }});

  if(user) {
    try {
      const match = await bcrypt.compare(req.body.password, user.password_hash);
      if(!match) {
        res.sendStatus(401);
      }
      const readFile = util.promisify(fs.readFile);
      const secret = await readFile('private.key');

      const token = await jwt.sign({
        data: user
      }, secret , { expiresIn: 3600 });
      
      return res.json({ token, user });
    }
    catch(e) {
      res.sendStatus(401);
    }
  }
  else {
    res.sendStatus(401);
  }
});

module.exports = router;

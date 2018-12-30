const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const port = 3000;
const loginReducer = require("./routes/login");
const postsReducer = require("./routes/posts");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", loginReducer);
app.use("/posts", postsReducer);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;

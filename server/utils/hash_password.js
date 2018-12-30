const bcrypt = require("bcrypt");

const hash_password = async password => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

module.exports = hash_password;

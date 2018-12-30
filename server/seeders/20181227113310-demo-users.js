const hashPassword = require("../utils/hash_password");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "77dd3beb-aa0a-4370-9c0d-2bb1dac5b038",
          firstName: "Roshan",
          lastName: "Patel",
          email: "roshanpatel27@gmail.com",
          password_hash: await hashPassword("PatientCo"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          firstName: "Kevin",
          lastName: "Smith",
          email: "kevinsmith@gmail.com",
          password_hash: await hashPassword("portal"),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};

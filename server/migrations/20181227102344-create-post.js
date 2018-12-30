module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("CREATE SEQUENCE post_offset_seq;");
    return queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()")
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      offset: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.literal("nextval('post_offset_seq')")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Posts");
    return await queryInterface.sequelize.query(
      "DROP SEQUENCE post_offset_seq;"
    );
  }
};

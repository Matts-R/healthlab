const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "post_tag",
    {
      post_tag_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "post",
          key: "post_id",
        },
      },
      tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tag",
          key: "tag_id",
        },
      },
    },
    {
      sequelize,
      tableName: "post_tag",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "post_tag_id" }],
        },
        {
          name: "post_tag_FK_1",
          using: "BTREE",
          fields: [{ name: "post_id" }],
        },
        {
          name: "tag_FK",
          using: "BTREE",
          fields: [{ name: "tag_id" }],
        },
      ],
    }
  );
};

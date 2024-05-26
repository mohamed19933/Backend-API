const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: true, // Adjust as needed
      primaryKey: true // Assuming ID is a primary key
    },
    REASON: {
      type: DataTypes.STRING,
      allowNull: true
    }
  };

  const options = {
    freezeTableName: true,
    timestamps: false,
  };

  return sequelize.define("ReasonView", attributes, options);
}

const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true, // Assuming DELAY_CNT is a primary key
      field: 'DELAY_CNT' // Map 'id' attribute to 'DELAY_CNT' field in the database
    },
    STOP_STATUS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    START_DELAY: {
      type: DataTypes.DATE,
      allowNull: true
    },
    END_DELAY: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DURATION: {
      type: DataTypes.STRING, // Assuming DURATION is a string
      allowNull: true
    },
    CENTER_CODE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DEVICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    REASON: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SHIFT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CREW: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NOTE: {
      type: DataTypes.STRING,
      allowNull: true
    },
  };

  const options = {
    freezeTableName: true,
    timestamps: false,
  };

  return sequelize.define("DelayView", attributes, options);
}

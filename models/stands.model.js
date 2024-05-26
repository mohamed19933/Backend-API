const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) { 
  const attributes = {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    DAILY_CONS_01: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_CONS_03: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_CONS_05: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_CONS_07: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_CONS_09: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_CONS_11: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_CONS_13: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_CONS_14: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PGV1_M1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PGV1_M2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PGV2_M1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PGV2_M2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_RHF_1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DAILY_RHF_2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Q_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  };

  const options = {
    freezeTableName: true,
    timestamps: false,
  };
  
  return sequelize.define("HIS_SUEZ_RM3_MILL_DAILY_CONSUMPTION", attributes, options);
};

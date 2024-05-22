const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    JOB_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    JOB_CODE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    MILL_CATALOGE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FINISH_CATALOGE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    HEAT_CODE_CHARGING: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue("HEAT_CODE_CHARGING");
        return rawValue ? rawValue.split("**")[0] : null;
      },
    },
    ALLOCATED_SP_CHARGING: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    CHARGED_SP_CHARGING: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    HEAT_CODE_ROUGHING: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue("HEAT_CODE_ROUGHING");
        return rawValue ? rawValue.split("**")[0] : null;
      },
    },
    ALLOCATED_SP_ROUGHING: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    INROUGH_COUNT_ROUGHING: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    FACTORY_STOPPED: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  };

  const options = {
    freezeTableName: true,
    timestamps: false,
  };

  return sequelize.define("CatalogeView", attributes, options); // Replace "YourViewName" with the actual name of your view
}

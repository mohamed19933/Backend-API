const { DataTypes } = require("sequelize");

module.exports = dailyModal;

function dailyModal(sequelize) {
  const attributes = {
    Q_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ELECTRIC_CONSUMPTION: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    GAS_CONSUMPTION: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WATER_CONSUMPTION: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
  };
  
  const options = {
    freezeTableName: true,
    timestamps: false,
  };
  
  return sequelize.define("HIS_SUEZ_RM3_CONSUMPTION", attributes, options);
}

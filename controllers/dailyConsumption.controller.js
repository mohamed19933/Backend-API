const db = require("../config/db");
const { Sequelize } = require("sequelize");
const  dailyModal  = require("../models/dailyConsum.model");

const getAll = async (skip, limit, startDate, endDate) => {
  let whereCondition = {};

  // Check if start date is provided
  if (startDate) {
    whereCondition = {
      ...whereCondition,
      Q_DATE: {
        [Sequelize.Op.gte]: startDate, //gte : Greater than or equal to the start date
      },
    };
  }

  // Check if end date is provided
  if (endDate) {
    whereCondition = {
      ...whereCondition,
      Q_DATE: {
        ...whereCondition.Q_DATE,
        [Sequelize.Op.lte]: endDate, //lte : less than or equal to the end date
      },
    };
  }

  // Query total count with filtering
  const totalCount = await dailyModal.count({ where: whereCondition });

  // Query paginated data with filtering
  const dailyConsumption = await dailyModal.findAll({where: whereCondition}).skip(skip).limit(limit);

  return { totalCount, dailyConsumption };
};

module.exports = { getAll };

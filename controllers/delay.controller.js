const db = require("../config/db");
const { Sequelize } = require("sequelize");

const getAll = async (offset, limit) => {

  // Query total count with filtering
  const totalCount = await db.delaysData.count();

  // Query paginated data with filtering
  const delayData = await db.delaysData.findAll({
    offset,
    limit,
    order: [['id', 'DESC']] // Order by id in descending order
  });

  return { totalCount, delayData };
};

module.exports = { getAll };

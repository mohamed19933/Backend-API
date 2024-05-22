const db = require("../config/db");
const { Sequelize } = require("sequelize");

const getAll = async () => {
  // Query paginated data with filtering
  const reasonData = await db.reasonsData.findAll({});

  return { reasonData };
};

module.exports = { getAll };

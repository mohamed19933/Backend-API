const db = require("../config/db");

const getAll = async () => {
  // Query all data from the reasonsData view
  const summaryData= await db.summaryData.findAll({});

  return { summaryData };
};

module.exports = { getAll };

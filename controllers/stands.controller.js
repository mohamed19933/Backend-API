const db = require("../config/db");


const getAll = async (offset, limit) => {
  // Query total count without applying pagination
  const totalCount = await db.stands.count();

  // Query paginated data
  const data = await db.stands.findAll({
    offset,
    limit,
    order: [['Id', 'DESC']] // Order by id in descending order
  });

  return { totalCount, data };
};

module.exports = { getAll };

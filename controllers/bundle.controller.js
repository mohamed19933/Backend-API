const db = require("../config/db");

const getAll = async (offset, limit, shift, area, crew, start, stop) => {
  // Query total count without applying pagination
  const totalCount = await db.bundles.count();

  // Query paginated data
  const data = await db.bundles.findAll({
    offset,
    limit,
    shift,
    area,
    crew,
    start,
    stop,
    order: [["ID", "DESC"]], // Order by id in descending order
  });

  return { totalCount, data };
};

module.exports = { getAll };

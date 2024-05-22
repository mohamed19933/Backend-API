const { Sequelize } = require("sequelize");
const dailyConsumModel = require("../models/dailyConsum.model");
const delaysModel = require("../models/delays.model");
const reasonsModel = require("../models/reason.modal");
const standsModel = require("../models/stands.model");
const bundlesModel = require("../models/bundles.model");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.SQL_PORT,
    dialect: process.env.DIALECT,
    dialectOptions: {
      options: { encrypt: false },
    },
    // Disable logging or set to a custom function
    logging: false // Or logging: () => {}
  }
);


const db = {};
db.dailyCosumption = dailyConsumModel(sequelize);
db.delaysData = delaysModel(sequelize);
db.reasonsData = reasonsModel(sequelize);
db.bundles = bundlesModel(sequelize);
db.stands = standsModel(sequelize);

db.sequelize = sequelize;

// // sync all models with database
// sequelize.sync({ alter: true }); // synchronization here

module.exports = db;


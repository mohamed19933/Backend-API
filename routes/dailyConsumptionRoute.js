const express = require("express");
const router = express.Router();
const dailyConsService = require("../services/dailyConsum.service");
const dailyConsValidator = require("../utils/dailyConsumptionValidators");

/**
 * @swagger
 * tags:
 *   name: Daily Consumption API
 *   description: API to retrieve data from HIS_SUEZ_RM3_CONSUMPTION table (Gas -- Electric -- Water)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Daily Consumption:
 *       type: object
 *       properties:
 *         ID:
 *           type: integer
 *         Q_DATE:
 *           type: string
 *         ELECTRIC_CONSUMPTION:
 *           type: number
 *         GAS_CONSUMPTION:
 *           type: number
 *         WATER_CONSUMPTION:
 *           type: number
 */

/**
 * @swagger
 * /dailyCons:
 *   get:
 *     summary: Retrieve all daily consumption records
 *     tags: [Daily Consumption API]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: true
 *         description: Page number (default is 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: true
 *         description: Number of rows per page (default is 10)
 *       - in: query
 *         name: start
 *         schema:
 *           type: string
 *         description: |
 *           Start date (format: YYYY-MM-DD)
 *       - in: query
 *         name: stop
 *         schema:
 *           type: string
 *         description: |
 *           Stop date (format: YYYY-MM-DD)
 *     responses:
 *       '200':
 *         description: A list of daily consumptions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Daily Consumption'
 */

/**
 * @swagger
 * /dailyCons/export:
 *   get:
 *     summary: Export daily consumption to Excel
 *     description: |
 *       Export daily consumption data to an Excel file.
 *       Parameters:
 *         - `start`: Start date and time (format: YYYY-MM-DD)
 *         - `stop`: Stop date and time (format: YYYY-MM-DD)
 *     tags: [Daily Consumption API]
 *     parameters:
 *       - in: query
 *         name: start
 *         schema:
 *           type: string
 *         description: |
 *           Start date (format: YYYY-MM-DD)
 *       - in: query
 *         name: stop
 *         schema:
 *           type: string
 *         description: |
 *           Stop date (format: YYYY-MM-DD)
 *     responses:
 *       '200':
 *         description: Excel file containing daily consumption data
 *         content:
 *           application/vnd.openxmlformats-officedocument.spreadsheetml.sheet:
 *             schema:
 *               type: string
 *               format: binary
 *       '400':
 *         description: Bad request - Missing or invalid parameters
 *       '500':
 *         description: Internal server error
 */

router.get("/", dailyConsValidator, dailyConsService.getDailyConsumption);
router.get("/export", dailyConsService.exportDailyConsToExcel);

module.exports = router;

const express = require("express");
const router = express.Router();
const standsValidator = require("../utils/standsValidators");
const standsService = require("../services/stands.service");

/**
 * @swagger
 * tags:
 *   name: Stands and RHF API
 *   description: API to retrieve data from HIS_SUEZ_RM3_MILL_DAILY_CONSUMPTION table
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Stands and RHF Consumption:
 *       type: object
 *       properties:
 *         ID:
 *           type: integer
 *         DAILY_CONS_01:
 *           type: number
 *         DAILY_CONS_03:
 *           type: number
 *         DAILY_CONS_05:
 *           type: number
 *         DAILY_CONS_07:
 *           type: number
 *         DAILY_CONS_09:
 *           type: number
 *         DAILY_CONS_11:
 *           type: number
 *         DAILY_CONS_13:
 *           type: number
 *         DAILY_CONS_14:
 *           type: number
 *         PGV1_M1:
 *           type: number
 *         PGV1_M2:
 *           type: number
 *         PGV2_M1:
 *           type: number
 *         PGV2_M2:
 *           type: number
 *         DAILY_RHF_1:
 *           type: number
 *         DAILY_RHF_2:
 *           type: number
 *         Q_DATE:
 *           type: string
 */

/**
 * @swagger
 * /stands:
 *   get:
 *     summary: Retrieve all power consumption records for stands and RHF
 *     tags: [Stands and RHF API]
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
 *         description: A list of stands and RHF consumptions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Stands and RHF Consumption'
 */

/**
 * @swagger
 * /stands/export:
 *   get:
 *     summary: Export stands and RHF consumption to Excel
 *     description: |
 *       Export stands and RHF consumption data to an Excel file.
 *       Parameters:
 *         - `start`: Start date and time (format: YYYY-MM-DD)
 *         - `stop`: Stop date and time (format: YYYY-MM-DD)
 *     tags: [Stands and RHF API]
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
 *         description: Excel file containing power consumption data
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

router.get("/", standsValidator, standsService.getStands);
router.get("/export", standsService.exportStandsToExcel);

module.exports = router;

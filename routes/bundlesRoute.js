const express = require("express");
const router = express.Router();
const bundleService = require("../services/bundles.service");
const bundleValidators = require("../utils/bundleValidators");

/**
 * @swagger
 * tags:
 *   name: Bundle API
 *   description: API to retrieve data from PRD_BUNDLE_5 table 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Bundle:
 *       type: object
 *       properties:
 *         ID:
 *           type: integer
 *         BUNDLE_ID:
 *           type: integer
 *         HEAT_CODE:
 *           type: string
 *         TRK_ID:
 *           type: integer
 *         WEIGHT:
 *           type: number
 *         LENGTH:
 *           type: number
 *         BARS_NO:
 *           type: integer
 *         PROGRAM_ID:
 *           type: integer
 *         JOB_ID:
 *           type: integer
 *         WEIGHING_AREA:
 *           type: string
 *         NOTE:
 *           type: string
 *         SHIFT:
 *           type: integer
 *         CREW:
 *           type: integer
 *         BUNDLE_STANDARD:
 *           type: string
 *         SIZE:
 *           type: string
 *         COMPATIBLE_STEEL_GRADE:
 *           type: string
 *         CREATION_DATE:
 *           type: string
 *         IS_MIXED:
 *           type: boolean
 *         INSERT_TYPE:
 *           type: string
 *         PRINTER_STATUS:
 *           type: string
 *         POINTER:
 *           type: string
 *         PRODUCTION_DATE:
 *           type: string
 */

/**
 * @swagger
 * /bundles:
 *   get:
 *     summary: Retrieve all bundles
 *     tags: [Bundle API]
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
 *         name: shift
 *         schema:
 *           type: string
 *           enum: ["All","1", "2", "3"]  # Specify the valid values for shift parameter
 *         description: Shift of the bundles
 *       - in: query
 *         name: area
 *         schema:
 *           type: string
 *           enum: ["All","1", "2"]  # Specify the valid values for area parameter
 *         description: area of the bundle
 *       - in: query
 *         name: crew
 *         schema:
 *           type: string
 *           enum: ["All","A", "B", "C", "D"]  # Specify the valid values for crew parameter
 *         description: Crew of the bundles
 *       - in: query
 *         name: start
 *         schema:
 *           type: string
 *         description: |
 *           Start date and time (format: YYYY-MM-DD HH:mm)
 *       - in: query
 *         name: stop
 *         schema:
 *           type: string
 *         description: |
 *           Stop date and time (format: YYYY-MM-DD HH:mm)
 *     responses:
 *       '200':
 *         description: A list of bundles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bundle'
 */
/**
 * @swagger
 * /bundles/export:
 *   get:
 *     summary: Export bundles to Excel
 *     description: |
 *       Export bundles data to an Excel file.
 *       Parameters:
 *         - `shift`: Shift of the bundles (optional, valid values: All,1, 2, 3)
 *         - `crew`: Crew of the bundles (optional)
 *         - `start`: Start date and time (format: YYYY-MM-DD HH:mm)
 *         - `stop`: Stop date and time (format: YYYY-MM-DD HH:mm)
 *     tags: [Bundle API]
 *     parameters:
 *      
 *       - in: query
 *         name: start
 *         schema:
 *           type: string
 *         description: |
 *           Start date and time (format: YYYY-MM-DD HH:mm)
 *       - in: query
 *         name: stop
 *         schema:
 *           type: string
 *         description: |
 *           Stop date and time (format: YYYY-MM-DD HH:mm)
 *     responses:
 *       '200':
 *         description: Excel file containing bundles data
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


router.get("/", bundleValidators, bundleService.getBundles);
router.get("/export", bundleService.exportBundlesToExcel);
module.exports = router;

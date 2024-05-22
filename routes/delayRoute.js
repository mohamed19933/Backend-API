const express = require("express");
const router = express.Router();
const delayService = require("../services/delay.service");
const delaysValidators = require("../utils/delaysValidators");
const reasonService = require("../services/reasons.service");

/**
 * @swagger
 * tags:
 *   - name: Delay API
 *     description: Endpoints for retrieving delay and reason data
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Delays:
 *       type: object
 *       properties:
 *         DELAY_CNT:
 *           type: integer
 *         STOP_STATUS:
 *           type: integer
 *         START_DELAY:
 *           type: string
 *         END_DELAY:
 *           type: string
 *         DURATION:
 *           type: string
 *         CENTER_CODE:
 *           type: string
 *         DEVICE:
 *           type: string
 *         REASON:
 *           type: string
 *         SHIFT:
 *           type: integer
 *         NOTE:
 *           type: string
 *     Reason Delays:
 *       type: object
 *       properties:
 *         ID:
 *           type: integer
 *         REASON:
 *           type: string
 *     Factory Status:
 *       type: object
 *       properties:
 *         DELAY_STATUS:
 *           type: integer
 */

/**
 * @swagger
 * /delay:
 *   get:
 *     summary: Retrieve all Delays records
 *     tags: [Delay API]
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
 *           Start date (format: YYYY-MM-DD HH:mm)
 *       - in: query
 *         name: stop
 *         schema:
 *           type: string
 *         description: |
 *           Stop date (format: YYYY-MM-DD HH:mm)
 *     responses:
 *       '200':
 *         description: A list of delays
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delays'
 */

/**
 * @swagger
 * /delay/reasons:
 *   get:
 *     summary: Retrieve all reasons
 *     tags: [Delay API]
 *     responses:
 *       '200':
 *         description: A list of reasons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reason Delays'
 */

router.get("/", delaysValidators, delayService.getDelayConsumption);
router.get("/reasons", reasonService.getReasons);

module.exports = router;

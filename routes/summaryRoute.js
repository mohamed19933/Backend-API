const express = require("express");
const router = express.Router();
const summaryService = require("../services/summary.service");


/**
 * @swagger
 * tags:
 *   name: Summary API
 *   description: API to retrieve Current JOB , Mill Cataloge , Finish_Catalog from CatalogeView In SUEZSTEELRM_HIS Database 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Summary:
 *       type: object
 *       properties:
 *         JOB_ID:
 *           type: integer
 *         JOB_CODE:
 *           type: string
 *         MILL_CATALOGE:
 *           type: string
 *         FINISH_CATALOGE:
 *           type: string
 *         HEAT_CODE_CHARGING:
 *           type: string
 *         ALLOCATED_SP_CHARGING:
 *           type: number
 *         CHARGED_SP_CHARGING:
 *           type: number
 *         HEAT_CODE_ROUGHING:
 *           type: string
 *         ALLOCATED_SP_ROUGHING:
 *           type: number
 *         INROUGH_COUNT_ROUGHING:
 *           type: number
 *         FACTORY_STOPPED:
 *           type: number
 * 
 */
/**
 * @swagger
 * /summary:
 *   get:
 *     summary: Retrieve Summary Data
 *     tags: [Summary API]        
 *     responses:
 *       '200':
 *         description: A list of catalogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   category:
 *                     type: string
 *                   size:
 *                     type: string
 *                   material:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 */


router.get("/", summaryService.getSummary);
module.exports = router;

import express from 'express'
const router = express.Router()

import enrollController from '../../controllers/enrollment/index.js'
import authMiddleWare from '../../middleware/auth.js'

/* Enroll form */
/* *
* @api {post} /api/user/enroll/
* @apiDescription api to login
* */
router.post('/enroll', authMiddleWare, enrollController.enrollForm)

/* *
* @api {post} /api/user/enroll/payLater
* @apiDescription api to pay later of enrollment
* */
router.post('/enroll/payLater', authMiddleWare, enrollController.payLater)

/* *
* @api {post} /api/user/enroll/getAll
* @apiDescription api to get all enrollments of user
* */
router.post('/enroll/getAll', authMiddleWare, enrollController.getAllEnrollments)

export default router
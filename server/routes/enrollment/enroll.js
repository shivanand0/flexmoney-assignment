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

export default router
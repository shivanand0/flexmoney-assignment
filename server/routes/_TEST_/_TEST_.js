import express from 'express'
const router = express.Router()
import TestController from '../../controllers/_TEST_/index.js'

/* TEST API */
/* *
* @api {post} /api/_TEST_
* @apiDescription api to login
* */
router.get('/_TEST_', TestController._TEST_)


export default router
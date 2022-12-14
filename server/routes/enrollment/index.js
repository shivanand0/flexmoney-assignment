import express from 'express'
const router = express.Router()

import enroll from './enroll.js'

router.use('/', enroll)

export default router
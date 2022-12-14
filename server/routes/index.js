import express from 'express'
import UserAuthRoutes from './user/index.js'
import EnrollRoutes from './enrollment/index.js'
import TestRoutes from './_TEST_/index.js'

const app = express()
const router = express.Router()

router.use('/user', UserAuthRoutes)
router.use('/user',EnrollRoutes)

router.use('/', TestRoutes)

export default router
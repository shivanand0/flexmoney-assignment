import express from 'express'
const router = express.Router()

import AuthController from '../../controllers/user/index.js'

/* SignIn Users */
/* *
* @api {post} /api/user/auth/signin
* @apiDescription api to login
* */
router.post('/signin', AuthController.signin)

/* SignUp Users */
/* *
* @api {post} /api/user/auth/signup
* @apiDescription api to sign up
* */
router.post('/signup', AuthController.signup)

export default router
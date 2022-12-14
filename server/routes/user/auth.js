import express from 'express'
const router = express.Router()

import AuthController from '../../controllers/user/index.js'
import authMiddleWare from '../../middleware/auth.js'

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

/* Reset Password */
/* *
* @api {post} /api/user/auth/resetpassword
* @apiDescription api to reset password
* */
router.post('/resetpassword', authMiddleWare, AuthController.resetpassword)

/* Update Profile */
/* *
* @api {post} /api/user/auth/updateProfile
* @apiDescription api to reset password
* */
router.post('/updateProfile', authMiddleWare, AuthController.updateprofile)

export default router
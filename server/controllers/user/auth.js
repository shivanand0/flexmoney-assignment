import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import config from '../../config/mainConfig.js'
import UserModel from '../../models/user/users.js'
const secret = config.jwtSecretKey;

const moduleExport = {

    /* *
     * @api {post} /api/user/auth/signin
     * @apiDescription api to login
     * */
    async signin(req, res) {
        res.status(200).json({ message: "sign in"});
    },

    /* *
     * @api {post} /api/user/auth/signup
     * @apiDescription api to signup
     * */
    async signup(req, res) {
        res.status(200).json({ message: "sign up"});
    }
}

export default moduleExport
/*
    for any kind of action user makes, first we'll check if the user token is valid if it is valid then only the action is allowed else not
*/

import jwt from "jsonwebtoken";
import config from '../config/mainConfig.js'
import User from '../models/user/users.js'

const secret = config.jwtSecretKey
const expiresIn = config.jwtExpireToken

const auth = async(req, res, next) => {
    const bearerHeader = req.headers["authorization"]
    if (!bearerHeader) return res.status(401).json({
        status: false,
        message: "Access denied. No token provided."
    });
    const token = bearerHeader.split(" ")[1];

    //if no token found, return response (without going to the next middelware)
    if (!token) return res.status(401).json({
        status: false,
        message: "Access denied. No token provided."
    });

    try {
        const isCustomAuth = token.length < 500; //is out auth or google auth

        let decodedData; //data to get from token

        /*
            The optional chaining operator ( ?. ) enables you to read the value of a property located deep within a chain 
            of connected objects without having to check that each reference in the chain is valid.
        */
        if (token && isCustomAuth) { //if it's own auth
            decodedData = jwt.verify(token, secret);
            // console.log('decodedData', decodedData)
            req.userId = decodedData ?.id;

            checkTokenExpiry(req.userId, token, res);
        } else {
            //for google auth
            decodedData = jwt.decode(token);
            // sub is users id in google auth
            req.userId = decodedData ?.sub;
        }

        next();
    } catch (error) {
        res.send(error)
        console.log('Error', error);
    }
}

const checkTokenExpiry = async(userId, token, res) =>
{
    const user = await User.findOne({ _id: userId, token: token })

    if (!user) {
        // throw new Error()
        return res.status(401).json({
            status: false,
            message: "token expired"
        });
    }
}
export default auth
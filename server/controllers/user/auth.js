import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import config from '../../config/mainConfig.js'
import Users from '../../models/user/users.js'
const secret = config.jwtSecretKey
const expiresIn = config.jwtExpireToken

const moduleExport = {

    /* *
     * @api {post} /api/user/auth/signin
     * @apiDescription api to login
     * */
    async signin(req, res) {
        // res.status(200).json({ message: "sign in"});
        const { email, password } = req.body;

        try {
            const userExists = await Users.findOne({ email: email });

            if (!userExists) return res.status(404).json({ message: `User with this email: ${email} does not exist` });

            const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

            if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

            const token = jwt.sign({ email: userExists.email, id: userExists._id }, secret, { expiresIn: expiresIn });

            res.status(200).json({ result: userExists, token });
        } catch (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
    },

    /* *
     * @api {post} /api/user/auth/signup
     * @apiDescription api to signup
     * */
    async signup(req, res) {
        // res.status(200).json({ message: "sign up"});
        const { email, password } = req.body;

        try {
            const userExists = await Users.findOne({ email: email });

            if (userExists) return res.status(400).json({ message: `User with this email: ${email} already exist` });

            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await Users.create({ email: email, password: hashedPassword });

            const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: expiresIn });

            res.status(201).json({ result, token });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong", error: error });
            // console.log(error)
        }
    },

    /* *
     * @api {post} /api/user/auth/resetpassword
     * @apiDescription api to change password
     * */
    async resetpassword(req, res) {
        try {
            // res.send('RESET PASSWORD')
            const { id, password } = req.body
            let user = await Users.findById(id)

            if (!user)
                return res.status(404).json({ message: "User doesn\`t exists" });

            const hashedPassword = await bcrypt.hash(password, 12);
            user.password = hashedPassword;
            user = await user.save();

            return res.status(200).json({ message: "Password Reset Successful" });
        } catch (error) {
            // console.log(error)
            return res.status(500).json({ message: "Something went wrong...", error: error });
        }
    },

    /* *
     * @api {post} /api/user/auth/updateProfile
     * @apiDescription api to Update Profile
     * */
    async updateprofile(req, res) {
        try {
            // res.send('UPDATE PROFILE'); return;

            const { name, phone, DOB, age, id } = req.body
            let user = await Users.findById(id)

            if (!user)
                return res.status(404).json({ message: "User doesn\`t exists" });

            user.name = name;
            user.phone = phone
            user.DOB = DOB
            user.Age = age

            user = await user.save();

            return res.status(200).json({ message: "Profile Update Successful" });
        } catch (error) {
            // console.log(error)
            return res.status(500).json({ message: "Something went wrong...", error: error });
        }
    },

    /* *
     * @api {post} /api/user/auth/getProfile
     * @apiDescription api to Get Profile
     * */
    async getprofile(req, res) {
        try {
            // return res.send('UPDATE PROFILE')

            const { id } = req.body
            let user = await Users.findById(id)

            if (!user)
                return res.status(404).json({ message: "User doesn\`t exists" });

            return res.status(200).json({ message: "Get Profile", res: user });
        } catch (error) {
            // console.log(error)
            return res.status(500).json({ message: "Something went wrong...", error: error });
        }
    },
}

export default moduleExport
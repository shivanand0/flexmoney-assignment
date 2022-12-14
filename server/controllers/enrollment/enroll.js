import config from '../../config/mainConfig.js'
import Users from '../../models/user/users.js'
import Enroll from '../../models/enrollment/enrollments.js'
const moduleExport = {
    /* *
     * @api {post} /api/user/auth/signin
     * @apiDescription enroll method
     * */
    async enrollForm(req, res) {
        // res.status(200).json({ message: "Enroll"}); return;

        try {
            const { id, paymentStatus, paymentID, paymentDate, batch, enrollDate } = req.body

            const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            const d = new Date(enrollDate);
            let monthName = Months[d.getMonth()];

            let user = await Users.findById(id)
            if (!user)
                return res.status(404).json({ message: "User doesn\`t exists" });
            // have to check users age is between 18-65 or not, if yes then allow to enroll
            if(user.Age < 18 || user.Age > 65) return res.status(400).json({ message: "Age not applicable" })
            // return res.status(200).json({ message: user.Age });

            let checkEnrollment = await Enroll.findOne({ author: id, month: monthName })

            if(checkEnrollment) return res.status(400).json({ message: `Already Enrolled for month ${monthName}` });
            
            const result = await Enroll.create({
                author : id,
                paymentStatus : paymentStatus,
                paymentID : paymentID,
                paymentDate : paymentDate,
                enrollDate: enrollDate,
                month: monthName,
                batch : batch
            });


            return res.status(201).json({ message: "Enrolled Successfully", res: result });
        } catch (err) {
            res.status(500).json({ message: "Something went wrong", Error: err });
        }
    }
}

export default moduleExport
import mongoose from "mongoose";

const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        name: { type: String, trim: true },
        email: {
            type: String,
            unique: true,
            trim: true,
            match: /^\S+@\S+\.\S+$/,
            lowercase: true,
            required: true,
        },
        gender: { type: String, enum: ["male", "female", "other"] },
        password: { type: String, required: true },
        phone: {
            type: String,
            unique: true,
        },
        DOB: { type: Date },
        Age: { type: Number },
        isEmailVerified: { type: Boolean, default: false }, //- email true when, when email verified
        isMobileVerified: { type: Boolean, default: false },
        enrollments: [{
            type: Schema.Types.ObjectId,
            ref: "Enrollments",
        }],
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

export default mongoose.model("Users", userSchema);
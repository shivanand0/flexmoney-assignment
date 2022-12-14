import mongoose from "mongoose";

const Schema = mongoose.Schema;

let enrollmentSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "Users" },
        payNow: { type: Boolean },
        paymentStatus: { type: Boolean, default: 0 },
        paymentID: { type: String },
        paymentDate: { type: Date },
        enrollDate: { type: Date },
        month: { type: String, enum: ["January","February","March","April","May","June","July","August","September","October","November","December"] },
        batch: { type: String, enum: ["6-7 AM", "7-8 AM", "8-9 AM", "5-6 PM"] }
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

export default mongoose.model("Enrollments", enrollmentSchema);
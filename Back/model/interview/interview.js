import { Schema, model } from "mongoose";

const interviewSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

const Interview = model('Interview', interviewSchema);

export default Interview;
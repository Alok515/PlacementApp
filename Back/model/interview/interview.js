import { Schema, model } from "mongoose";

const interviewSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    emp_id: {
        type: Schema.Types.ObjectId,
        ref: 'employee',
    }
});

interviewSchema.statics.addInterview =async function (interview) {
    if (!interview) {
        throw Error ("Fill all the fields");
    }
    const newInterviews = await this.create(interview);
    return newInterviews;
}

const Interview = model('Interview', interviewSchema);

export default Interview;
import { Schema, model} from 'mongoose';

const courseSchema = new Schema({
    dsa: {
        type: String,
        required: true,
    },
    webd: {
        type: String,
        required: true,
    },
    react: {
        type: String,
        required: true,
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student',
    }
});

const Course = model('Course', courseSchema);

export default Course;
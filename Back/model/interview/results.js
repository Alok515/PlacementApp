import { Schema, model} from 'mongoose';

const resultSchema = new Schema({
    interview: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'interview',
    },
    student: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'student',
    }
});

const Results = model('Student', resultSchema);

export default Results;
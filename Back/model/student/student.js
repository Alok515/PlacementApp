import {Schema, model} from 'mongoose';

const studentSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    collage: {
        type: String,
        required: true,
    },
    batch : {
        type: Schema.Types.ObjectId,
        ref: 'batch',
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

const Student = model('Student', studentSchema);

export default Student;
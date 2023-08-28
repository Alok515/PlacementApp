import {Schema, model} from 'mongoose';

const studentSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    collage: {
        type: String,
        required: true,
    },
    dsa: {
        type: String,
        required: true,
    },
    react: {
        type: String,
        required: true,
    },
    webd: {
        type: String,
        required: true,
    },
    emp_id: {
        type: Schema.Types.ObjectId,
        ref: 'employee',
        required: true,
    },
    status: {
        type: String,
        default: 'false',
    }
});

studentSchema.statics.addNewStudent = async function(student) {
    if(!student) {
        throw Error('Please provide all the required fields');
    }
    const studentExist = await this.findOne({email: student.email});
    if(studentExist) {
        throw Error('Student already exists if want update them please visit that page');
    }
    const newStudent = await this.create(student);
    return newStudent;
}

const Student = model('Student', studentSchema);

export default Student;
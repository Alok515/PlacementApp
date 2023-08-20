import mongoose from 'mongoose';

const createConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.DataBase);
        if(connection) {
            console.log('connected to database');
        }
    } catch (error) {
        console.log('error connecting to database');
    }
}

export default createConnection;
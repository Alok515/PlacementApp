import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import dbConnection from './config/mongoInit.js';
dbConnection();
import router from './router/main.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
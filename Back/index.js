import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import dbConnection from './config/mongoInit.js';
dbConnection();
import flash from 'express-flash';
import session from 'express-session';

const app = express();
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
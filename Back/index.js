import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import dbConnection from './config/mongoInit.js';
dbConnection();
import session from 'express-session';
import router from './router/main.js';
import passport from 'passport';
import passportLocal from './config/passportLocal.js';

const app = express();
//app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use('/', router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
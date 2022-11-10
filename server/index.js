import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotEnv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';

const app = express();

app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));


dotEnv.config();

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}`)))
.catch((error)=> console.log(error.message));


app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
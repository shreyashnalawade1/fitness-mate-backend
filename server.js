const express=require('express');
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const morgan=require('morgan')

// user routes
const authRoutes=require('./routes/authRoutes');
const healthRoutes=require('./routes/healthRoutes');

// config 
const app=express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"))


app.get('/',(req,res,next)=>{
    res.send("API is running");
});

app.use(authRoutes,healthRoutes);

module.exports=app;
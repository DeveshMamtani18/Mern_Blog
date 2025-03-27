import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/user.routes.js'
import authroute from './routes/auth.routes.js'

dotenv.config();
const app=express();
app.use(express.json())

mongoose.connect(process.env.MONGO).then(console.log("mongo db connected succesfully"))

app.listen(3000,()=>{
    console.log("server is running on port 3000!")
})

app.use("/api/user",userrouter)
app.use("/api/auth",authroute)

app.use((err,req,res,next)=>{
    const StatusCode =err.StatusCode || 500; 
    const message = err.message || "internal server error";
    res.status(StatusCode).json({
        success:false,
        StatusCode,
        message
    })})
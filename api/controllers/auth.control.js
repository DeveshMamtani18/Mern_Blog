import User from "../models/user.models.js"
import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js";
export const signup=async (req,res,next) => {
    const {username,email,password}=req.body;


    if (!username||!email||!password||username===''||email===''||password===''){
        next(errorhandler(400,"all fields are required"))
    }

    const hashedpass= bcryptjs.hashSync(password,10)


    const newUser=new User({
        username,
        email,
        password:hashedpass
    })

    try {
       await newUser.save();
    res.json("signup succesful") 
    } catch (error) {
        next(error);
    }
    

}
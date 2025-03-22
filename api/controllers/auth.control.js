import User from "../models/user.models.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
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

    export const signin=async (req,res,next) => {
        const {email,password}=req.body;
        if (!email||!password||email===''||password===''){
            next(errorhandler(400,"all fields are required"))
        }

        try {
            const validuser=await User.findOne({email})
            if(!validuser){
                next(errorhandler(400,"invalid credentials"))
            }
            const validpass=bcryptjs.compareSync(password,validuser.password)
            if (!validpass){
               return next(errorhandler(400,"invalid credentials"))
            }
            const token=jwt.sign({id:validuser._id},process.env.JWT_SECRET)
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json("signin succesful")
        } catch (error) {
            next(error)
        }
}
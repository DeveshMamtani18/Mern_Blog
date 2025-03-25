import User from "../models/user.models.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { errorhandler } from "../utils/error.js";
export const signup=async (req,res,next) => {
    const {username,email,password}=req.body;


    if (!username||!email||!password||username===''||email===''||password===''){
        return next(errorhandler(400,"all fields are required"))
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
           return next(errorhandler(400,"all fields are required"))
        }

        try {
            const validuser=await User.findOne({email})
            if(!validuser){
               return next(errorhandler(400,"invalid credentials"))
            }
            const validpass=bcryptjs.compareSync(password,validuser.password)
            if (!validpass){
               return next(errorhandler(400,"invalid credentials"))
            }
            const token=jwt.sign({id:validuser._id},process.env.JWT_SECRET)
            const { password, ...others } = validuser._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(others)
        } catch (error) {
            next(error)
        }
}



export const google=async (req,res,next) => {     
    const {name,email,photourl}=req.body;
    if (!name||!email||name===''||email===''){
        next(errorhandler(400,"all fields are required"))
    }
    try {
        let user=await User.findOne({email})
        if (!user){
            const generatepassword=Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            const hashedpass=bcryptjs.hashSync(generatepassword,10)
            const cleanPhotoURL = photourl?.replace("s96-c", "s400-c") || photourl;
            const newUser=new User({
                username:name.toLowerCase().split(' ').join('')+Math.random().toString(36).slice(-5),
                email,
                password:hashedpass,
                photourl:cleanPhotoURL
            })
           user = await newUser.save();
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
            const {password,...others}=user._doc
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(others)
        }
        
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
        const {password,...others}=user._doc
        res.status(200).cookie('access_token',token,{
            httpOnly:true,
        }).json(others)
    } catch (error) {
        next(error)
    }
}
import User from "../models/user.models.js"
import bcryptjs from 'bcryptjs'
export const signup=async (req,res) => {
    const {username,email,password}=req.body;


    if (!username||!email||!password||username===''||email===''||password===''){
        return res.status(400).json({message:"all fields are requred"})
    }

    const hashedpass= bcryptjs.hashSync(password,10)


    const newUser=new User({
        username,
        email,
        password:hashedpass
    })
    await newUser.save();
    res.json("signup succesful")

}
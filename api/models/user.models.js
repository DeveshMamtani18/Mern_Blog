import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    photourl:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw15UNbHEZLahiDi79sxP96L&ust=1742804904077000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi31qzkn4wDFQAAAAAdAAAAABAE"
    },
},{timestamps:true})

const User=mongoose.model('User',userSchema);

export default User;
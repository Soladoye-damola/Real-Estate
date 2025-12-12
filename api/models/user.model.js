import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength: 5
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength: 6
    },

    avatar:{
        type:String,
        default:"https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=keyword&page=1&position=0&uuid=6f746fc0-86fc-4713-8662-60384783f1de&query=Profile"
    }
},
    {
        timestamps:true,
    
})

const User = mongoose.model('User', UserSchema);

export default User
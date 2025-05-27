import mongoose , { Schema ,model} from "mongoose";

const userSchema =new Schema({
    userName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : Object
    },
    phone : {
        type : String
    },
    confirmEmail : {
        type : Boolean,
        default : false
    },
    faculty: { type: String }, 
    department: { type: String },
    sendCode : {
        type : String,
        default : null
    }
},{timestamps : true})
const userModel = model('users',userSchema)

export default userModel
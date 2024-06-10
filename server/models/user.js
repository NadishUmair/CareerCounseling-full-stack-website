
const mongoose=require('mongoose')
const {Schema}=mongoose

const PatnerSchema=new Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    password:String,
    role:String,
    avatar:String,
    resetPasswordToken:{
        type:String,
        default:null
    },
    resetPasswordTokenExpiry:{
        type:Date,
        default:null
    }

})

const Customermodel= new mongoose.model('user', PatnerSchema)
module.exports= Customermodel;
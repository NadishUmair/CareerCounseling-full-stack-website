
const usermodel=require('../models/user');
const adminModel=require('../models/admin');
const bycrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


exports.login=async(req,res)=>{
    console.log(req.body);
    const {email,password,role}=req.body;
    console.log(req.body)
    try {
        let user;
        if(role === 'user'){
            user=await usermodel.findOne({email})
        }else if(role === 'admin'){
            user= await adminModel.findOne({email})
        }else {
            return res.status(404).json({
                success:false,
                msg:"user not exist"
            })
        }
        if(!user){
            return res.status(404).json({
                success:false,
                msg:"user not found"
            })
        }
         const matchpassowrd=await bycrypt.compare(password,user.password);
         if(!matchpassowrd){
            return res.status(409).json({
                success:false,
                msg:'Password not matched'
            })
         }
         const token=jwt.sign({
            id:user._id,
            email:user.email,
            role:user.role
           
         },process.env.JWT_SECRET)
        res.status(200).json({
            success:true,
            msg:`user login as ${user.role}`,
            token,
            user
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

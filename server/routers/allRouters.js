const express=require('express')

const router=express.Router();

// Admin routers
// const {createAminuser, loginAdmin,forgetAdminpassword, deleteuser, deleteproduct}=require('../controllers/admin')
// router.post('/adin/creatadmin',createAminuser)
// router.post('/admin/loginadmin',loginAdmin)
// router.post('/admin/forgetpasswordAdmin',forgetAdminpassword)
// router.delete('/admin/deleteuser/:id',deleteuser)
// router.delete('/admin/deleteproduct/:id',deleteproduct)


// admin routers
const { createadmin, } = require('../controllers/admin');
router.post('/admin/createadmin',createadmin)


// user router
const {  creatuser}=require('../controllers/user');
router.post('/user/creatuser',creatuser)




// user login user and admin
const { login } = require('../controllers/login');
router.post('/login',login);


// products routers
const {  adminposts, AddInstitute, allInstitutes } = require('../controllers/institues');
router.post('/AddInstitute',AddInstitute)
router.get('/allinstitutes',allInstitutes);


// resetpassword router
const { forgetpassword, resetPassword}=require('../controllers/resetpassword');
router.post('/all/resetpassword',forgetpassword);
router.post('/user/changepassword/:resetToken',resetPassword)


// singleuser get by id
const { singleuser } = require('../controllers/singleuser');
router.post('/singleuser',singleuser)

//updateuser

const {updateuser}=require('../controllers/updateuser');
const { jobSearch, Educationjobs, internshipSearch } = require('../controllers/jobs');

// const { Adduniversity } = require('../controllers/university');
router.patch('/updateuser',updateuser);
router.post('/myposts',adminposts)


router.get('/ITjobs',jobSearch);
router.get('/education-jobs',Educationjobs);
router.get('/internships',internshipSearch);
module.exports=router;
const express=require('express')
const userCon=require('../controller/userController.js')
const router=express.Router()
router.post('/register',userCon.signup)
router.post('/login',userCon.login)
module.exports=router;

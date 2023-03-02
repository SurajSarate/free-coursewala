require('dotenv').config();
const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const { body, validationResult } = require("express-validator");
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken')
const fetchAdmin=require('../middleware/fetchAdmin')
let success=false;
// router 1 create new user using post endpoint /admin
router.post(
  "/",
  [
    body("name","enter vaild name").isString(),
    body("email","enter vaild email").isEmail(),
    body("password","please enter string password").isStrongPassword(),
  ],
  async(req, res) => {
    //   if any mistek occured in input field then error will occured 
    const errors= validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()});
    }
    // cheking user alerdy exits or not 
    let admin=await Admin.findOne({email:req.body.email});
    if(admin){
        return res.status(400).json({errors:"sorry user with same email existes"});
    }
    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt);
    admin=await Admin.create({
        name:req.body.name,
        email:req.body.email,
        password:secPassword
    });
    const data={
        admin:{
            id:admin.id
        }
    }
    success=true;
    const authtoken=jwt.sign(data,process.env.TOKEN_SECRET)
    res.json({success,authtoken});
    console.log("user created succesfully");
  }
);


//log in user using email and password endpoint /admin/login
router.post(
    "/login",
    [
      body("email","enter vaild email").isEmail(),
      body("password","password cannot be blank").exists()
    ],
    async (req, res) => {
      const errors= validationResult(req);
      if(!errors.isEmpty){
          return res.status(400).json({errors:errors.array()});
      } 
      const {email,password}=req.body;
      try{
        let admin=await Admin.findOne({email});
        if(!admin){
            return res.status(400).json({errors:"incorrect creditonls email"});
        }

        const passwordCompare=await bcrypt.compare(password,admin.password);
        if(!passwordCompare){
            return res.status(400).json({errors:"incorrect creditonls password"});
        }
        const data={
            admin:{
                id:admin.id
            }
        }
        success=true;
        const authtoken=jwt.sign(data,process.env.TOKEN_SECRET);
        res.json({success,authtoken});
        
      }catch(error){
        console.error(error.message);
        res.status(500).send("internal error occured");
      }
    }
  );


//   route 3 get admin details
router.post('/getadmin',fetchAdmin,[
    body('email', 'enter a vaild email').isEmail(),
    body('password', 'password lenth required minimun 8 chr').exists(),
], async (req, res) => {
    try {
        let adminId = req.admin.id;
        const admin = await Admin.findById(adminId).select("-password");
        res.send({success},admin);
    } catch (err) {
        return res.status(400).json({ error: "enter correct creaditions" });
    }
})


module.exports = router;

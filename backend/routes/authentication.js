const express = require('express');
const router = express.Router();
const {body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Any$Doubt#Screte%Key'

//ROUTE 1: Creating User No Authentication require

router.post('/register',[
    body('email','Invalid email Id!! Enter Correct One!!!').isEmail(),
    body('name','Name length must be gtreater then 4 character').isLength({min:4}),
    body('password','password length must be 4+').isLength({min:4}).not()
    .isIn(['12345', 'password', 'admin@123'])
    .withMessage('Do not use a common word as the password')
],async(req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        
        //condition for whether user already Exist or Not
        
        let user = await User.findOne({email:req.body.email});
        
        if(user){
            return res.status(400).json({success,error:"Your are trying to register with same email which already registered"});
        }

        const salt = await bcrypt.genSalt(12);
        const secPass = await bcrypt.hash(req.body.password,salt);
        
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });

        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success = true;
        res.json({success,user,authtoken});

    } catch (error) {
        console.error(error.msg);
        res.status(500).send("something wrong with the server");
    }
});

module.exports = router;
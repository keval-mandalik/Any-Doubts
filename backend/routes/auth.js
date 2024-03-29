const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'AnyDoubt$123';

// ROUTE 1 :Create a User using POST:"/api/auth/createuser". No login Required
router.post('/register',
[
    body('email').isEmail(),
    body('name').isLength({ min: 2 }),
    body('password').isLength({ min: 5 }),
    body("picture").isLength({min:1})
],
async (req,res)=>{
    let success = false;

    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        
    
    // check whether the user with this email exists already 
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({success,error:"Sorry a user with this email already exists"})
        
    }
    const salt = await bcrypt.genSalt(10);

    const secPass = await bcrypt.hash(req.body.password,salt)
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        picture:req.body.picture
      })
      const data = {
          user:{
              id:user.id
          }
      }
      const authtoken = jwt.sign(data,JWT_SECRET);
      success = true;
      res.json({success,authtoken,user})

    //   res.json(user)
    //   .then(user => res.json(user))
    //   .catch(err=>console.log(err))
    } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error") 
    }
    // res.status(200).json({success : true, data : [{name : "User"}]})
})


//ROUTE 2 :Authenticate a User using POST:"/api/auth/login". No login Required
router.post('/login',[
    body('email','Enter Valid Email').isEmail(),
    body('password','Password can not be blank').exists()
],async (req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success,error:"Please try to login with correct credentials"})
        }

        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({success,error:"Please try to login with correct credentials"})
            
        }
        const data = {
            user:user
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken,user})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error") 
    }
   
})

//forgot password
router.post("/forgot-password", async (req, res) => {
    const { email } = req.body; 
    console.log(email);
    try {
    const olduser = await User.findone({ email });
    if (!olduser) {
    return res.json({status:"User Not Exists !!"});
    }
    const secret = JWT_SECRET + olduser.password;
    const token =jwt.sign({ email: olduser.email, id: olduser._id }, secret, {
    expiresIn: "5m",
    });
    const link= `http:// localhost:3001/reset-password/${olduser._id}/${token}`;
    console.log(link);
    } catch (error) {}
});

router.get("/reset-password/:id/:token", async (req, res) => {
    const {id, token } = req.params;
    console.log(req.params);
    res.send("Done");
    });

//ROUTE 3 :Get loggedin User Details using POST:"/api/auth/getuser". login Required
// router.post('/getuser',user,async (req,res)=>{
//     try {
//         userId = req.user.id;
//         const user = await User.findById(userId).select("-password");
//         res.send(user)

        
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error") 
//     }
// })

module.exports = router;

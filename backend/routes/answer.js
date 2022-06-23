const express = require('express');
const router = express.Router();
const Answers = require('../models/answers');

//create new question;
router.post('/addanswer/:id',async (req,res)=>{
    try {
        console.log("in try");
        const qId = req.params.id;
        const saveAnswer = await Answers.create({...req.body,question:qId});
        res.status(200).json(saveAnswer)
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
}
    // res.status(200).json({question:"thuis is question",PostedBy:"kevalgmail.com",Upvotes:10})
})

module.exports = router;
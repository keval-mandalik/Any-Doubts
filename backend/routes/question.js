const express = require('express');
const router = express.Router();
const Question = require('../models/question');

//create new question;
router.post('/addquestion',async (req,res)=>{
    try {
        console.log("in try")
        const { question, PostedBy, Upvotes } = req.body;
        // const questions = new Question({
        //     question, PostedBy, Upvotes
        // })
        const saveQuestion = await Question.create(req.body);
        res.status(200).json(saveQuestion)
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
}
    // res.status(200).json({question:"thuis is question",PostedBy:"kevalgmail.com",Upvotes:10})
})

// To get all Questions Posted...
router.get('/api/questions', (req, res, next) => {
    res.status(200).json({success : true, data : [ { question1 : " My Question 1 " } ,  { question2 : " My Question 2"} ]})
})

// To get a specific Question using its id...
router.get('/api/questions/:id', (req,res,next)=>{
    res.status(200).json({success : true, data : `Question with the id = ${req.params.id}`})
})

module.exports = router;
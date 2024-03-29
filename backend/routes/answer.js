const { query } = require('express');
const express = require('express');
const router = express.Router();
const Answer = require('../models/answer');
const Question = require('../models/question');
//create new question;
router.post('/addanswer/:id',async (req,res)=>{
    try {
        console.log("in try");
        const qId = req.params.id;
        const question = await Question.findById(qId);
        if(question){
            const saveAnswer = await Answer.create({...req.body,question:qId});
            await question.updateOne({$push:{answers:saveAnswer._id}});
            res.status(200).json(saveAnswer)
        }else{
            res.status(400).json({msg:"Bad Request"});
        }
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
}
});

//get all answer for specific question
router.get('/getanswer/:id',async (req,res)=>{
    try {
        const qId = req.params.id;
        const answer = await Answer.find({question:qId});
        if(!answer) {res.status(404).send("No question found!!!")}
        res.status(200).json({answer});
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
}
});


//get all answers from database
router.get('/getanswer',async (req,res)=>{
    try {
        const answer = await Answer.find();
        if(!answer) {res.status(404).send("No answer found!!!")}
        res.status(200).json({answer});
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
}
});

//get all answers of user
router.post('/useranswer',async (req,res)=>{
    try {
        let query = {PostedBy:req.body.email}
        const answer = await Answer.find(query);
        if(!answer) {res.status(404).send("No answer found!!!")}
        res.status(200).json({answer});
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
}
});

//edit answer
router.put('/editanswer/:id',async (req,res)=>{
    const {answer} = req.body;
    try {
        const newAnswer = {};
        if(answer) {newAnswer.answer = answer}

        let ans = await Answer.findById(req.params.id);
        if(!ans) {res.status(404).send("No such as answer found!!!")}

        ans = await Answer.findByIdAndUpdate(req.params.id,{$set:newAnswer},{new:true});
        res.status(200).json({ans});
} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
}
});
//delete asnwer
router.delete('/deleteanswer/:id',async(req,res)=>{
    try {

        let ans = await Answer.findById(req.params.id);
        if(!ans) {res.status(404).send("No answer found!!!")}

        ans = await Answer.findByIdAndDelete(req.params.id);
        res.status(200).json({ans});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//upvote answer
router.put("/:id/upvote",async(req,res)=>{
    try {
        const answer = await Answer.findById(req.params.id);
        if(!answer.Upvotes.includes(req.body.userId)){
            await answer.updateOne({$push:{Upvotes:req.body.userId}});
            res.status(200).json("You upvote this post");
        }else{
            console.log("upvote in try else")
            await answer.updateOne({$pull:{Upvotes:req.body.userId}});
            res.status(200).json("Your upvote removed from this post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router;
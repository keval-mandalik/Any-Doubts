const express = require('express');
const router = express.Router();
const Question = require('../models/question');

//create new question;
router.post('/addquestion',async (req,res,next)=>{
    try {
        const { question, PostedBy, Upvotes, category } = req.body;
        const saveQuestion = await Question.create(req.body);
        res.status(200).json(saveQuestion)
} catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
        next();
}
    // res.status(200).json({question:"thuis is question",PostedBy:"kevalgmail.com",Upvotes:10})
})

// To get all Questions Posted...
router.get('/questions', async(req, res, next) => {
    try {
        const question = await Question.find();
        res.status(200).json({question, count : question.length});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//To get user specific question...
router.post('/userquestion', async(req, res, next) => {
    try {
        let query = {PostedBy:req.body.email};
        const question = await Question.find(query);
        res.status(200).json({question, count : question.length});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// To get a specific Question using its id...
router.get('/questions/:id', async(req,res,next)=>{
    try {
        const question = await Question.findById(req.params.id);
        res.status(200).json(question);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//Update your question
router.put('/editquestion/:id',async(req,res)=>{
    const {question} = req.body;
    try {
        const newQuestion = {};
        if(question) {newQuestion.question = question}

        let ques = await Question.findById(req.params.id);
        if(!ques) {res.status(404).send("Looks loke somthing wrong")}

        ques = await Question.findByIdAndUpdate(req.params.id,{$set:newQuestion},{new:true});
        res.status(200).json({ques});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Delete your question
router.delete('/deletequestion/:id',async(req,res)=>{
    try {

        let ques = await Question.findById(req.params.id);
        if(!ques) {res.status(404).send("No question found!!!")}

        ques = await Question.findByIdAndDelete(req.params.id);
        res.status(200).json({ques});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//upvote question
router.put("/:id/upvoteque",async(req,res)=>{
    try {
        let question = await Question.findById(req.params.id);
        if(!question.Upvotes.includes(req.body.userId)){
            await question.updateOne({$push:{Upvotes:req.body.userId}});
            question = await Question.findById(req.params.id);
            res.status(200).json({msg:"You upvote this post",question});
        }else{
            console.log("upvote in try else")
            await question.updateOne({$pull:{Upvotes:req.body.userId}});
            question = await Question.findById(req.params.id);
            res.status(200).json({msg:"Your upvote removed from this post",question});
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
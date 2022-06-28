const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001;
const connectToMongo = require('./db');

//middleware
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
connectToMongo();
// cors
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    next();
});
app.use(cors());

//routes

app.use('/api/question',require('./routes/question'));
app.use('/api/answer',require('./routes/answer'));

// // To get answer of the specific question with id
// app.get('/api/answers/:id', (req,res,next)=>{
//     res.status(200).json({success : true, data : `Answers of the Question with the id = ${req.params.id}`})
// })

// // To post an answer to the question
// app.post('/api/answers/:id', (req,res,next)=>{
//      console.log(req.body)   
//     res.status(200).json({success : true, data : `Posting an answer to the Question with the id = ${req.params.id}`})
// })


app.use('/uploads',express.static(path.join(__dirname,'/../uploads')));
app.use('/uploads',express.static(path.join(__dirname,'/../../frontend/build')));

app.get('*',(req,res)=>{
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    } catch (error) {
        res.send("Oops! Unexpected Error");
    }
});


//server listening

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})
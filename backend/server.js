const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001;
//middleware
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));

// cors
// app.use((req,res,next)=>{
//     req.headers("Access-Control-Allow-Origin","*");
//     req.headers("Access-Control-Allow-Headers","*");
//     next();
// });
// app.use(cors());

//routes

// To get all Questions Posted...
app.get('/api/questions', (req, res, next) => {
    res.status(200).json({success : true, data : [ { question1 : " My Question 1 " } ,  { question2 : " My Question 2"} ]})
})

// To get a specific Question using its id...
app.get('/api/questions/:id', (req,res,next)=>{
    res.status(200).json({success : true, data : `Question with the id = ${req.params.id}`})
})

// To get answer of the specific question with id
app.get('/api/answers/:id', (req,res,next)=>{
    res.status(200).json({success : true, data : `Answers of the Question with the id = ${req.params.id}`})
})

// To post an answer to the question
app.post('/api/answers/:id', (req,res,next)=>{
     console.log(req.body)   
    res.status(200).json({success : true, data : `Posting an answer to the Question with the id = ${req.params.id}`})
})


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
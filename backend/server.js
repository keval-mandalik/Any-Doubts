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
app.use((req,res,next)=>{
    req.headers("Access-Control-Allow-Origin","*");
    req.headers("Access-Control-Allow-Headers","*");
    next();
});
app.use(cors());

//routes




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
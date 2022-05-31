const express=require("express");
const app=express();
const morgan=require('morgan');

app.use(morgan('common'))
app.use((req,res,next)=>{
    console.log("middleware")
    next();
})
app.get('/',async(req,res)=>{
    res.send("home");
})

app.get('/dog',async(req,res)=>{
    res.send("husky")
})
app.listen(8000,()=>{
    console.log("connected")
})
const express=require('express');
const app=express();

const userModel=require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hey");
})

app.get('/create',async(req,res)=>{
    let createduser=await userModel.create({
        name:"Aditya",
        email:"adityadangi1920@gmail.com",
        username:"Aditya"
    })
})

app.listen(3000);
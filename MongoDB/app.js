const express=require('express');
const app=express();

const userModel=require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hey");
})

app.get('/create',async(req,res)=>{
    let createduser=await userModel.create({
        name:"Adit",
        email:"aditdangi1920@gmail.com",
        username:"Adit"
    })
    res.send(createduser);
})

app.get('/update',async(req,res)=>{
    let updateduser=await userModel.findOneAndUpdate({username:"Aditya"},{name:"Aditya Dangi"},{new:true})
    res.send(updateduser);
})

app.get('/read',async(req,res)=>{
    let users=await userModel.find();
    res.send(users);
})

app.get('/delete',async(req,res)=>{
    let users=await userModel.findOneAndDelete({username:"Aditya"});
    res.send(users);
})

app.listen(3000);
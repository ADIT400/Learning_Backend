const express=require('express');
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post');


app.get('/',function(req,res){
    res.send("Hey");
})

app.get('/create',async function(req,res){
    let user=await userModel.create({
        username:"Aditya",
        age:20,
        email:"aditya@gmail.com"
    });
    res.send(user);
})

app.get('/create/post',async function(req,res){
    let post=await postModel.create({
        postdata:"Hello",
        user:"68e0149440000efcc25a7d1f"
    })
    let user=await userModel.findOne({_id:"68e0149440000efcc25a7d1f"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})

app.listen(3000);
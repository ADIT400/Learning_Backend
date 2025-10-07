//CRUD operations with MongoDB

/*const express=require('express');
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

app.listen(3000);*/



//CRUD operations with EJS and Server-Side Rendering

const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./models/user');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public'))); 

app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/read',async(req,res)=>{
    let users=await userModel.find();
    res.render("read",{users});
})

app.get('/edit/:userid',async(req,res)=>{
    let user=await userModel.findOne({_id: req.params.userid});
    res.render("edit",{user});
})

app.post('/update/:userid',async(req,res)=>{
    let {name,email,image}=req.body;
    let user=await userModel.findOneAndUpdate({_id: req.params.userid},{name,email,image},{new:true});
    res.redirect("/read");
})

app.get('/delete/:id',async(req,res)=>{
    let users=await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
})

app.post('/create',async(req,res)=>{
    let {name,email,image}=req.body;
    let createduser=await userModel.create({
        name,
        email,
        image
    });
    res.redirect("/read"); 
})

app.listen(3000);
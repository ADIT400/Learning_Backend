/*const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.cookie("name","Aditya");
    res.send("Done");
})

app.get('/read',function(req,res){
    console.log(req.cookies);
    res.send("Read page");
})

app.listen(3000);*/



/*const express=require('express');
const app=express();
const bcrypt=require('bcrypt');

app.get('/',function(req,res){
    bcrypt.compare("passwod","$2b$10$Hh26r0RuBfnarBGZiSWqKeGbZZxHicYRixaKE30y39yZl/gs1t34W", function(err, result) {
        console.log(result);
});
})

app.listen(3000);*/


const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/',function(req,res){
    let token=jwt.sign({email:"aditya@ex.com"},"secret");
    res.cookie("token",token);
    res.send("Done");
})

app.get('/read',function(req,res){
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
    
})

app.listen(3000);
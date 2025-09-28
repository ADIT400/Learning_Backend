/*async function ab(){
var blob=await fetch('https://randomuser.me/api/');
var ans=await blob.json();
console.log(ans.results[0].name);
}
ab();*/


//const fs = require('fs');
/*fs.writeFile("a.txt","Hello, Aditya!",function(err){
    if(err) console.log(err);
    else console.log("Done");
})*/

/*fs.appendFile("a.txt","\nWhat's up?",function(err){
    if(err) console.log(err);
    else console.log("Done");
})*/

/*fs.rename("b.txt","c.txt",function(err){
    if(err) console.log(err);
    else console.log("Done");
})*/

/*fs.copyFile("a.txt","./copy/copy.txt",function(err)
{
    if(err) console.log(err);
    else console.log("Done");
})*/

/*fs.unlink("copy.txt",function(err)
{
    if(err) console.log(err);
    else console.log("Done");
})*/

/*fs.rmdir("./copy",{recursive:true},function(err){
    if(err) console.log(err);
    else console.log("Done");
})*/

/*const http=require('http');
const server=http.createServer(function(req,res){
    res.end("Hello, Aditya!");
})
server.listen(3000);*/

//console.log("Hello, Aditya!");

/*import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)*/

/*const express=require('express');
const app=express();

app.use(function(req,res,next){
    console.log("Middleware");
    next(); 
})

app.get("/",function(req,res){
    res.send("Hi, Whats up?")
})*/

/*app.get("/profile",function(req,res){
    res.send("I am Aditya Dangi.")
})*/

//app.listen(3000);
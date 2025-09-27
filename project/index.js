const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
const { log } = require('console');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get("/",function(req,res){
    fs.readdir(`./files`,function(err,files){
        res.render("index",{files:files});
    })
})

app.get('/file/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        res.render('show',{filename: req.params.filename ,filedata: filedata});
    })
})

app.get("/Edit/:filename",function(req,res){
    res.render('Edit',{filename: req.params.filename});
})

app.post("/Edit",function(req,res){
    fs.rename(`./files/${req.body.Previous}`, `./files/${req.body.New}`,function(err){
        res.redirect("/");
    })
})


app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        res.redirect("/")
    });
})
app.listen(3000);
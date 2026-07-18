const express = require ("express");
const app=express();

app.get('/',function (req,res){
    res.send("hello world")

})

app.get('/asd',(req,res)=>{
    res.send("hello from asd tab")
})

app.get("/html",function (req,res){
    res.send("<b>hi from the html tag</b>");
})

app.get("/json",function (req,res){
    res.send("{'name':harkirat}");
})

app.listen(3000);
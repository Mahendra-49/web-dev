const express = require('express')
const {userModel,todomodel, todoModel}= require('./db.js')
const jwt= require("jsonwebtoken")
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/todo-app')

const JWT_SECRET='mahendra124356'
const app=express()
app.use(express.json())

//7.2
const bcrypt=require('bcrypt')
const {z}=require('zod')


app.post('/signup',async function(req,res){


    /*   body{
    email:email,
    password:password,
    name:name
    }
           */

    
    const email=req.body.email
    const password=req.body.password
    const name=req.body.name

    try{
    
    //7.2 password hash
    const hashedPassword = await bcrypt.hash(password,5)

    await userModel.create({
        email:email,
        password:hashedPassword,
        name:name
    })

}catch(e){
    res.json({
        message:"user already exist"
    })

}
    res.send({
        message:"you are logged in"
    })


})

app.post('/signin',async function(req,res){
    const email=req.body.email
    const password=req.body.password

    const User=await userModel.findOne({
        email:email,
        // password:password
    })
    // console.log(User)
    if(!User){
        res.ststus(403).json({
            message:"USER NOT FOUND"
        })
    }
//7.2
    const passwordMatch = await bcrypt.compare(password,User.password)

    if(passwordMatch){
        const token=jwt.sign({
            id:User._id.toString()

        },JWT_SECRET)
 
        res.json({
            token:token
        })
    }
    else{
        res.status(403).send({
            message:"INVALID CREDENTIAL"
        })
    }


})

//middleware
function auth(req,res,next){
    const token =req.headers.token;

    const decodedData= jwt.verify(token,JWT_SECRET)

    if(decodedData){
        req.userId=decodedData.id;
        next();
    }
    else{
        res.status(403).json({
            message:"INVALID CREDENTIALS"
        })
    } 

}


app.post('/todo', auth,function (req,res){
    const userId=req.userId;
    const title=req.body.title


    await todoModel.create({
        title,done,userId
    })
    res.json({
        userId:userId
    })
})


app.get('/todos',auth,function(req,res){
    const userId=req.userId;

    res.json({
        userId:userId
    })

})


app.listen(3000,()=>{
    console.log("app is running on port 3000")
})
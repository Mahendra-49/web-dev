const express = require("express")
const jwt = require("jsonwebtoken")

const app=express();
app.use(express.json())

const JWT_SECRET="MAHI"

let users=[];

app.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({username,password})

    res.send({
        message:"you are successfully signed up"
    })


})

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;


    let founduser=null
   for(let i=0;i<users.length;i++){
    if(users[i].username=== username && users[i].password=== password)
        founduser=username
   }

   if(!founduser){
    res.json({
        message:"invalid Credential"
    })
   }
   else{
    const token=jwt.sign({username},JWT_SECRET);

    res.header("jwt",token)// just like cookie
    res.json({token})
   }

})


//middleware
function auth(req,res,next){
    const token=req.headers.token
    const decoded=jwt.verify(token,JWT_SECRET);


    if(decoded.username){
        req.username=decoded.username
        next()

    }
        
    else{
        res.json({
            message:"user not verified"
        })
    }
}
app.get('/me',auth,(req,res)=>{
    
 let founduser=null  
        for(let i=0;i<users.length;i++){
            if(users[i].username === req.username){
                founduser=users[i]
            }
            else{
                res.json({
                    message:"user not found"
                })
            }

        }
    if(founduser){
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }
   
    
})


app.get('/', function (req,res){

    res.send(__dirname+"/public/index.html")
})



app.listen(3000)
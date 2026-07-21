const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
const JWT_SECRET=""

const users = []
app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username, password
    })

    res.status(200).send({
        message: "signed up successfully"

    })

})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    let founduser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username ===username && users[i].password ===password){
            founduser=username;

        }
    }

    if(!founduser){
        res.status(500).send({
            message:"credintial invalid"
        })
    }
    else{
        const token=jwt.sign({username},JWT_SECRET)
        res.json({token:token})
    }

    res.status(200).send({
        message: "signed up successfully"

    })

})

app.get('/me',(req,res)=>{
    const token=req.headers.token
    const decoded=jwt.verify(token,JWT_SECRET)

    if(decoded.username){
        res.json({
            message:"you get your content"
        })
    }
    else{
        res.json({
            message:"invalid session"
        })
    }
})

app.listen(3000)

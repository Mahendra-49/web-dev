const express = require('express')
const jwt = require('jsonwebtoken')

const jwt_secret = ""

const app = express()
app.use(express.json())



app.post('/signup', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username, password
    })

    res.send({
        message: "you are successfully signed up"
    })


})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // const user=users.find(users.username ===username && users.password === password)



    //const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username: username }, jwt_secret );
        users.token = token;

        res.send(
            token)
        console.log(users)
    }

    else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})


// authorization end point
app.get('/me', function (req, res) {
    const token = req.headers.authorization;

    //1st option
    const user = users.find(user => users.token === token)


    // 2nd option :-
    /*

    let founduser=null
    for(let i=0;i<users.length;i++){
    if(users[i].token === token){
    
    founduser= users[i]
    }
    if(founduser){username }
    else{unauthorised}
    }
     */
    if (user) {
        res.json({
            username: user.username
        })
    }
    else {
        res.status(403).send({
            message: "unauthorized"
        })
    }
})

app.listen(3000)

// sign up and sign in only


const express=require('express')

const app=express()
app.use(express.json())

const users=[]

function tokengeneate(){
      let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      let token="";

      for(let i=0;i<32;i++){
        token+=options[Math.floor(Math.random()*options.length)]
      }

      return token;

}
app.post('/signup',(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username,password
    })

    res.send({
        message:"you are successfully signed up"
    })


})

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    // const user=users.find(users.username ===username && users.password === password)



    const user = users.find(u => u.username === username && u.password === password);
    if(user){
        const token=tokengeneate();
        users.token=token;

        res.send(
            token
        )
        console.log(users)
    }

else{
     res.status(403).send({
            message: "Invalid username or password"
        })
}
})


// authorization end point  and authenticated endpoint
app.get('/me',function(req,res){
    const token=req.headers.authorization;

    //1st option
    const user=users.find(user =>users.token ===token)


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
    if(user){
        res.json({
            username:user.username
        })
    }
    else{
        res.status(403).send({
            message:"unauthorized"
        })
    }
})

app.listen(3000)
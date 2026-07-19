const express=require('express');
const app=express()

// let requestcount=0;
// function requestIncreaser(req,res,next){
//     requestcount+=1;
//     console.log("number of request:"+requestcount)
// // next()
// }
// function sumHandler(req,res){
//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     res.json({
//         "answer":a+b
//     })
// }

// app.get('/sum',requestIncreaser,sumHandler)

// app.get('/multiply',function(req,res){
//     const a=req.query.a
//     const b=req.query.b

//     res.json({
//         "answer":a*b
//     })
// })

// app.listen(3000)


// asssignmet that display:- method, url, timestamp

function middleware(req,res,next){
    console.log("method:"+req.method)
    console.log("url:"+req.url)  // it gave the route where the request came from
    
    console.log("timestamp:"+new Date())
console.log("status code:"+req.statusCode)
console.log("host"+req.hostname)          // it give the name of the host form where request is comes

    next()
}
app.use(middleware)
app.get('/',(req,res)=>{

})
app.post('/',(req,res)=>{
    
})
app.put('/',(req,res)=>{
    
})
app.delete('/',(req,res)=>{
    
})

app.listen(3000)
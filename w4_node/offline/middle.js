const express=require('express')
const app=express()

// function isOldEnough(age){
// if(age>=14){
//     return true;
// }
// return false;
// }




// app.get('/ride1',function (req,res){
//     if(isOldEnough(req.query.age)){
//     res.json({
//         msg:"you have successfully riden the ride1"
//     })
//     }
//     else{
//         res.json({
//             msg:"Sorry you are not for the ride"
//         })
//     }
// })


// app.get('/ride1',function (req,res){
//     if(isOldEnough(req.query.age)){
//     res.json({
//         msg:"you have successfully riden the ride1"
//     })
//     }
//     else{
//         res.json({
//             msg:"Sorry you are not for the ride"
//         })
//     }
// })





//Middle ware intro

function isOldEnoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();  
    }
    else{
        res.json({
            msg:"Sorry you are not for the ride"
        })
    }
}


app.get('/ride1',isOldEnoughMiddleware,function (req,res){
   
    res.json({
        msg:"you have successfully riden the ride1"
    })
   
})


app.get('/ride2',isOldEnoughMiddleware,function (req,res){
    
    res.json({
        msg:"you have successfully riden the ride1"
    })
   
})
app.listen(3000);
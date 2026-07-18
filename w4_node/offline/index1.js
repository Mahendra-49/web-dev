const express=require('express')
const app=express();

let users=[{
    name:'jhon',
    kidneys:[{
        healthy:false
    }]
}]

app.use(express.json());

//GET METHOD
app.get('/' ,function (req,res){
const jhonkidney=users[0].kidneys;  //array of kidneys
const numberOfkidneys=jhonkidney.length;
let jhonhealthykidney=0;

for(let i=0;i<jhonkidney.length;i++){
if(jhonkidney[i].healthy){
    jhonhealthykidney=jhonhealthykidney+1;

}
}
const unhealthykidney=numberOfkidneys-jhonhealthykidney;
res.json({
    numberOfkidneys,jhonhealthykidney,unhealthykidney
})


})


//POST METHOD:-it will take the input from user using query parameter body
app.post('/',function(req,res)
{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({healthy: isHealthy})

    res.json({
        msg:"Done"
    })

})


//UPDATE:- all kidney set unhealthy
app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=false;
    }
    res.json({})
})

//DELETE:- it will delete all unhealthy    
app.delete("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}
app.listen(8000);


// console.log(users[0].kidneys);
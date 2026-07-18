const express =require('express')

function calsum(n){
let ans=0;
for(let i=0;i<=n;i++){
    ans=ans+i;

}
return ans;

}

const app=express();
app.get('/',(req,res)=>{
    const n=Number(req.query.n);
    const ans=calsum(n);
    res.end(ans.toString());
});

app.listen(8000);
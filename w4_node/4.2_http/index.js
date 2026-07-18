import http from 'http';
import fs from 'fs';

const myMessage=http.createServer((req,res)=>
{
    const log=`${Date.now()}: ${req.url}new req received \n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end("Homepage")
            break;
            
            case '/about':
                res.end("Hello i am mahendra");
                break;

            default:
                res.end("404 not found");   
        }
       
})
   
    
})

myMessage.listen(8000,()=>
    {
        console.log("server started")
    })
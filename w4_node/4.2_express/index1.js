const http=require('http')

const server=http.createServer((req,res)=>{
    console.log("new request recorded")
    res.end("hello from server")
})
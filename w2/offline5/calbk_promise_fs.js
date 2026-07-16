const fs = require("fs");

/* refer for syntax only

function setTimeout{

    return a+b;
}


function sum (err,data){
console.log(data)

}*/

const content=fs.readFileSync('a.txt','utf-8')
console.log("1st line before content")
console.log(content)
console.log("end line after content")



// async code


// call back hell: option 1

setTimeout(function (){
    console.log("hi")

    setTimeout(function(){
        console.log("hello")

        setTimeout(function (){
            console.log("hey there")
        },5000)
    },3000)
},1000)


// callback hell: option 2- 

function cal3(){
console.log("hey there")

}

function cal2(){
    console.log("hello")
    setTimeout(cal3,5000);

}

function cal1(){
    console.log("hi")
    setTimeout(cal2,3000);
}

setTimeout(cal1,1000);



// promise in callback hell/ promisified chaining
//1 approach


function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration)
    });
}


setTimeoutPromisified(1000).then (function(){
    console.log('HI');
    setTimeoutPromisified(3000).then(function (){
        console.log("hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("hey there")
        })
    })
})



//2nd approach : .then().then().then()


function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration)
    });
}



setTimeoutPromisified(1000).then(
    function (){
        console.log("Hi")
        return setTimeoutPromisified(3000)
    }
).then(function (){
    console.log("Hello")
    return setTimeoutPromisified(5000)
}).then(function (){
    console.log("hey there")
    
})


// async , await syntax

function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration)
    });
}

async function solve(){

    await setTimeoutPromisified(5000);
    console.log("hi")

    await setTimeoutPromisified(3000);
    console.log("hello")

   await setTimeoutPromisified(1000);
    console.log("hey there")
}

solve();
console.log("after or before ")


//async await for readfile

function readfile(){
    return new Promise(function(resolve,rejects){
        fs.readFile("a.txt","utf-8",function(err,data){
           if(err)
            rejects("file not found")//resolve(data)
           else
            resolve(data)       
       
        })
    })
}
readfile().then(function(x){
    console.log("contents of file"+x)
})
.catch(function(e){
    console.log("in catch");
    console.log(e)
});
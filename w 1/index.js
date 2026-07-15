// console.log(a);

// var a=10;

// function test(){

//     console.log(a);
//     var a=20;
//     console.log(a);

// }

// test();

// console.log(a);




// const fs=require('fs');
// console.log('hi');

// function timeout(data, err){

//     if(data){
//         console.log("error");
//     }else{
//         console.log("no error");
//     }
// }

// setTimeout(timeout,1000);


// promises


// function random(){
//  console.log("hello")

// }
// let a= new Promise(random);
// console.log(a);


function asyncop(resolve){
    console.log("4")
 setTimeout(resolve,3000)


}
console.log("1");
const p= new Promise(asyncop);
console.log("2")
function callback(){
  console.log("3 seconds have passed;");
}
//console.log("3")
//p.then (callback);
//console.log("5")

console.log(p);
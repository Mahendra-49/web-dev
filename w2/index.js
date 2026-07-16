 let str="hugyf"

//string operation
 let a=str.split("")
let b=str.split("ak")
let c=str.split("r")

let d=a.sort()
let e=str.sort()


console.log(a)
console.log(b)
console.log(c)

console.log(d)
console.log(e)

str.split("")
console.log(str)



// stop watch
let ctr=1;
function callback(){
    console.clear();
    console.log(ctr);
    ctr+=1;

setTimeout(callback,1000);
}

setTimeout(callback,1000);

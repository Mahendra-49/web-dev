//  updating assignment =stopwatch
 
 
// let ctr=1;
// function stpw(){
//         const name=document.querySelector("h4")
//         name.innerHTML= ctr;
//         ctr++;
// }

// setInterval(stpw,1000);


// deleting by me(i use here one counter to delete the task from bottom by reducing counter)


// let i=3
// function delchild(){

//     const ele=document.getElementById("t"+i)
//     ele.parentNode.removeChild(ele)
//  i--;
// }


// hr
function addtodo(){
    const input= document.getElementById("text").value;

    const divele= document.createElement("div")
    divele.innerHTML=input;
    document.body.appendChild(divele)

}

function delchild(index){

    const ele=document.getElementById("t"+index)
    ele.parentNode.removeChild(ele)
 
}

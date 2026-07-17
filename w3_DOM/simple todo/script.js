let ctr=1


function add_Todo(){
    const input=document.querySelector("input").value;
    const divele=document.createElement("div")
    divele.innerHTML='<div>'+input+'</div> <button onclick="deltodo()">delete</button>'
    const parent=document.querySelector("body")
    parent.appendChild(divele)

ctr++;
}

function deltodo(){

    const ch1=document.querySelector("div")
    ch1.parentNode.removeChild(ch1)
}

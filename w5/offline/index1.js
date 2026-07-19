 const axios=require('axios')
 
 //GET
//  async function main(){

//     const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data=await response.json()

//     console.log(data)
// }

// main();


async function main_(){
    const respose=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    console.log(respose.data)
}

// main_()


//POST
async function main(){
    const response=await fetch("https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
        {method:"POST"})

    const textData=await response.text()
    console.log(textData)    
}

// main();


async function main_(){

    const response=await axios.post("https://httpbin.org/anything")
    console.log(response.data)
}

// main_()
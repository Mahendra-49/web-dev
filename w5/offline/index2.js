//dump http
//send headers,body

const axios=require('axios')

// async function main(){
//     const response=await fetch("https://httpdump.app/dumps/8c99c762-9788-4d26-bda1-15db9cd98e26",
//         {
//             method:"POST",
           
        
//         })

//     const textData=await response.text()
//     console.log(textData)    
// }

// main();


async function main_(){

    const response= await axios.post("https://httpdump.app/dumps/8c99c762-9788-4d26-bda1-15db9cd98e26",{
         
                "username":"harkirat",
                "pass":"123",
            },
            {
                "authentication":"mithi booliyan"
            }
    )
    console.log(response.data)
}

main_()
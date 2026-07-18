import fs from "fs";
import { Command } from "commander";

function main(file_path){


    fs.readFile(file_path,"utf-8",function(err,data){

         if(err){
            console.error("Error:", err.message);
            return; // ✅ VERY IMPORTANT
        }

        let total=0;
        for(let i=0;i<data.length;i++){
            if(data[i]==" "){
                total++;
            }
        }
        console.log(total);
    })
}

main(process.argv[2]);
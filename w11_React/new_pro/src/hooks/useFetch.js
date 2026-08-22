import {useState , useEffect } from "react";

export function useFetch(){
  const [post , setPost ]= useState({});

  async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const jsn =await response.json();
    setPost(jsn)

  }
  useEffect(()=>{
   getPosts();
  },[])

  return({
    post :post

  })
}

//Generic useFetch

import {useState , useEffect } from "react";
export function useFetch (url){
  const [finalData , setFinalData]= useState({})

  async function getPost(){
  const data =await fetch(url);
  const jsn = await data.json();
  setFinalData(jsn)
  }

  useEffect(()=>
    {
      getPost()
    },[url])


  return({
    finalData:finalData
  })

}



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


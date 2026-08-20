import {useState } from 'react'

//custom hook
function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCounter(){
    setCount(c=> c+1)
  }
  return{
    count:count , increaseCounter:increaseCounter
  }
}

function App(){
const {count , increaseCounter} = useCounter()

  return<div>
    <button onClick={increaseCounter}>Increase {count}</button>

  </div>
}

export default App;



//11.1 useFetch eg:
import {useState , useEffect } from 'react';

function App(){
  const [post , setPost]= useState({});
  const [loading , setLoading] = useState(0)


  async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    setLoading(1)
    const jsn = await response.json();
    setPost(jsn)

  }

  useEffect(()=>{
    getPosts();
  },[])

  return (<div>
    {post.title}
  </div>
  )
}
export default App;

//useFetch introduced for that we create new folder hooks and file named useFetch.js:

import { useFetch } from "./hooks/useFetch"
function App(){
  const {post} = useFetch();

  return(<div>
    {post.title}
  
  </div>)
}
export default App;


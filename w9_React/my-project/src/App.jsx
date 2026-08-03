 import { useState ,useEffect} from 'react'
 import { PostComponent } from './Post'


function App() {
 const[posts, setPosts]= useState([])


  const postComponents = posts.map(post =><PostComponent
    name ={post.name}
    subtitle={ post.subtitle}
    time ={post.time}
    image={ post.image}
    description ={ post.description}
    />
  )

  function addPost(){
    setPosts([...posts,{
       name:"harkirat",
    subtitle:"22000 followers",
    time:"2m ago",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh9ZR7j2Oi5JHGSIe2mt2cgeVlwQb4mXg3kXIaPgEJQ&s=10",
    
    description:"what to know to win that match? Checkout it now!"

    }])

  }
  
  return (
     
   <div style={{ backgroundColor: "#dfe6e9",height:"100vh" }}>
   <button onClick={addPost}>Add post</button>
   <div style={{display:"flex", justifyContent:"center"}}>
    <div> 
      {postComponents}
    </div>
   </div>

    
   </div>
  )
}




//9.3 offline- linkedin navbar
import {useState , useEffect} from 'react'

function App(){

  const [currenttab , setCurrenttab]=useState("feed")

 

  return (
    <div>
      <button onClick={()=>
        setCurrenttab("feed")} style={{color: currenttab == "feed"? "red" : "black"}}>feed</button>

      <button onClick={()=>
        setCurrenttab("notification")} style={{color: currenttab == "notification"? "red" : "black"}}>notification</button>
      
      <button onClick={()=>
        setCurrenttab("message")} style={{color: currenttab == "message"? "red" : "black"}}>message</button>
      
      <button onClick={()=>
        setCurrenttab("jobs")} style={{color: currenttab == "jobs"? "red" : "black"}}>jobs</button>
    </div>
  )
}




// 9.3 offline - todolist with loading message
import {useState , useEffect} from 'react';


 function App(){
  const [currentTab , setCurrenttab] = useState(1);
  const [tabData , settabData]= useState({})
  const [loading , setLoading]= useState(0)

  useEffect( function(){
    setLoading(1)
    fetch('https://jsonplaceholder.typicode.com/todos/'+currentTab)
      .then(async response => {
        const json=await response.json()
        settabData(json)
    setLoading(0)    

  })
   
  },[currentTab])

   return (
    <div>
      <button onClick={function(){
        setCurrenttab(1)}} style={{color: currentTab == 1? "red" : "black"}}>Task #1</button>

      <button onClick={function (){
        setCurrenttab(2)}} style={{color: currentTab == 2? "red" : "black"}}>Task #2</button>
      
      <button onClick={function (){
        setCurrenttab(3)}}style={{color: currentTab == 3? "red" : "black"}}>Task #3</button>
      
      <button onClick={function (){
        setCurrenttab(4)}} style={{color: currentTab == 4? "red" : "black"}}>Task #4</button>

<br />
        {loading? "Loading.." :tabData.title}
    </div>
  )
}

 

//9.4 offline

import { useState, useEffect } from "react";

function App(){

  return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <textarea placeholder="Write post"/>
                <p>This card has different content!</p>
            </Card>
        </div>
    )
}

function Card({children}){

return (
  <div>
 <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>     {children}
  </div>
   </div>
)

}
 

 export default App;




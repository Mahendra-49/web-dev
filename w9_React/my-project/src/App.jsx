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
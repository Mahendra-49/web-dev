import { useState ,useEffect} from 'react'


function App() {
 
  
  return (
     
   <div style={{ backgroundColor: "lightblue",height:"100vh" }}>
   
    <div style={{display:"flex", justifyContent:"center"}}>
      <div >
        <div style={{padding:10}}><PostComponent/></div>
        <div style={{padding:10}}><PostComponent/></div>
        <div style={{padding:10}}><PostComponent/></div>
      </div>
    </div>
    
   </div>
  )
}

 //object 
const style = { width:  350, backgroundColor:"white", borderRadius:10, borderWidth:1, borderColor:"gray", padding:20}
 
  function PostComponent(){
    return (<div style={style}>
    <div style={{display:"flex"}}>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh9ZR7j2Oi5JHGSIe2mt2cgeVlwQb4mXg3kXIaPgEJQ&s=10"} style={{height:70, width :70, borderRadius:36 }}/>
    
    <div style={{marginLeft:10, width:200, marginTop:10}}>
      <div>
      <b>username</b>
    </div>
    <div>23,445 followers</div>
    <div>12 min</div>
    </div>
    
    </div>

    <div> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione veniam ad libero cumque cum totam voluptas natus, enim ipsa est veritatis inventore ut quasi nobis tenetur nam, nisi repellat molestiae?</div>
    </div>)
  }

  




export default App

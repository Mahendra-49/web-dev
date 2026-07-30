
import{useState} from 'react'

function App(){

  return (
    <div>
       <div> <Togglefunction/></div>
       <div> <Togglefunction/></div>
       <div> <Togglefunction/></div>

    </div>
  )
}

function Togglefunction(){

  const[notificationCount, setnotificationCount]= useState(0)

  console.log("re-render");
  function mess(){
    setnotificationCount(notificationCount + 1)
  }
  return(
    <div>
      <button onClick={mess}>Toggle message</button>
      {notificationCount}
    </div>
  )
}

export default App;
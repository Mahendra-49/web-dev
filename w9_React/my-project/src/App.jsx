import { useState ,useEffect} from 'react'

// import './App.css'

function App() {
  const [countervisible ,setcountervisible] = useState(true);
   useEffect( function() {
    setInterval(function() {
      setcountervisible(c => !c)

    },5000)
  return <div> 
    {countervisible && <Counter></Counter>}
 
</div>
}


function Counter(){
   const [count, setCount] = useState(0);

   // hooking into the lifecycle events in react
  //  console.log("counter")

   // mounting- gaurd the seInterval from re-render
   useEffect(function (){
    console.log(" on mount")
     const clock= setInterval(function(){
      console.log("from inside setInterval")
      setCount(count => count + 1)
    },1000)

    // unmounting: cleanup
    return function (){
      console.log("on ummount")
      clearInterval(clock)
    }
   },[])
  //  function Increse(){
  //   setCount(count + 1)
  //  }
  //  function Decrese(){
  //   setCount(count - 1)
  //  }
   function Reset(){
    setCount(0)
   }


   return <div>
    <h1>{count}</h1>
    {/* <button onClick={Increse}>Increase</button>
    <button onClick={Decrese}>Decrease count</button> */}
    <button onClick={Reset}>Reset count</button>
   </div>

}

export default App

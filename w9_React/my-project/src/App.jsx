import { useState ,useEffect} from 'react'

// import './App.css'

function App() {
  let countervisible = true;
  return <div> 
    {countervisible ? <Counter></Counter> : null}
    {countervvisible && <Counter></Counter>}
 
</div>
}

function Counter(){
   const [count, setCount] = useState(0);

   // hooking into the lifecycle events in react
   console.log("counter")

   // mounting- gaurd the seInterval from re-render
   useEffect(function (){
    console.log("mounted")
    setInterval(function(){setCount(count=> count + 1)},1000)

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

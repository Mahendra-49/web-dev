import { useState } from 'react'

// import './App.css'

function App() {
  return <div> <h1>hi there</h1>
  <Counter></Counter>
 
</div>
}

function Counter(){
   const [count, setCount] = useState(0);

   function Increse(){
    setCount(count + 1)
   }
   function Decrese(){
    setCount(count - 1)
   }
   function Reset(){
    setCount(0)
   }


   return <div>
    <h1>{count}</h1>
    <button onClick={Increse}>Increase</button>
    <button onClick={Decrese}>Decrease count</button>
    <button onClick={Reset}>Reset count</button>
   </div>

}

export default App

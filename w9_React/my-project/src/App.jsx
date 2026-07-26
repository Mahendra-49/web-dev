import { useState ,useEffect} from 'react'

// import './App.css'

// learning - dependency array, useEffect, cleanup

function App() {
 
  const [countervisible , setCountervisible] = useState(true)

  useEffect(function(){
    setInterval(function (){
      setCountervisible(c =>!c)
    },5000)
  },[])

  return <div>
    {countervisible && <Counter ></Counter>}
  </div>
 
  
}

function Counter(){
   const [count , setCount] = useState(0)

   useEffect(function (){
    const clk=setInterval(function (){
      setCount(c => c+1)
    },1000)

    return function(){
      clearInterval(clk)
    }

   },[])

   function reset(){

    return setCount(0)
   }



  return <div>

    <h1>{count}</h1>
    <button onClick={reset}>Reset count</button>
  </div>
}



export default App

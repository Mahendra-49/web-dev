import { useState ,useEffect} from 'react'

// import './App.css'

// learning - dependency array, useEffect, cleanup

function App() {
 
  // const [countervisible , setCountervisible] = useState(true)
    const [count , setCount] = useState(0)

  // useEffect(function(){
  //   setInterval(function (){
  //     setCountervisible(c =>!c)
  //   },5000)
  // },[])

  function increse(){
    setCount(c => c+ 1)

  }

  return <div>
    {<Counter count={count} />}
    <button onClick={increse}>Increase count</button>
  </div>
 
  
}

function Counter(props){
 

   useEffect(function (){
    const clk=setInterval(function (){
      setCount(c => c+1)
    },1000)

    return function(){
      clearInterval(clk)
    }

   },[])

   //dependency array with value:-when the count change then only the function execute 
   useEffect(function(){
    console.log("count has changed")
   },[props.count])



   function reset(){
    return setCount(0)
   }



  return <div>

    <h1>{props.count}</h1>
    <button onClick={reset}>Reset count</button>
  </div>
}



export default App

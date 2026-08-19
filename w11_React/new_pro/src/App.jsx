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
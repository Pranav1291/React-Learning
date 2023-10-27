import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15
  const addValue = () => {
    console.log(`clicked`, counter);
    //counter = counter + 1;
    setCounter(counter + 1)
  }
  const removeValue = () => {
    if(counter>0){  //--> jab tak zero se bda h removevalue hoga
      // counter = counter + 1;
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      
      <h1>Pranav Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button><br/>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

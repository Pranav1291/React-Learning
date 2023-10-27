import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)
  let myObj = {
    username: "Pranav",
    age: 25
  }
  let newArr = [1, 2, 4, 5]

  return (
    
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl">TAILWIND TEST</h1>

    <Card username="pranavLala" btnText="Visit Me" />
    <Card username2 = "Hitesh Sir" btnText="click me" />


    
    


   
    </>
  )
}

export default App

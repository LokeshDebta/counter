import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
 const [counter, setCounter] = useState(15)
 const [red, setRed] = useState(true)
// let counter = 1
const addValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1;
      setRed(!red)
    if(counter<20)
    {
      setCounter((prev) => prev + 1)
    }
  }
const removeValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1;
    if(counter>0)
    {
         setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Welcome to react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
        style={{ backgroundColor: `${red ? "red" : ""}` }}
      >Add value {counter}</button>
      <br></br>
      <button
        onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}
export default App

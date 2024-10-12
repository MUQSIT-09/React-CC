// UseState is a hook that allows you to add state (data that can change) to functional components.
// Think of it as a way to make a variable dynamic so it can "remember" its value between renders. When you change this state, React automatically updates the UI. 

// In simple terms:
// State is a way to track and update values in your component.
// useState gives you two things:
// The current value of the state (in your example, counter).
// A function to update that value (in your example, setCounter).

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(16)
  // let counter= 16;
  const addvalue = () =>{
    if(counter < 69) {
      setCounter(counter+1);
    }
  }
  const subvalue = () =>{
    if(counter > 0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>React project </h1>
      <h2>Counter Value: 16</h2>
      <button onClick={addvalue}> Add Value {counter}</button>
      <br/>
      <button onClick={subvalue}> Subtarct Value {counter}</button>
      <h3>Leni {counter} Lingi</h3>
    </>
  )
}
export default App


// Summary:
// useState(16) starts the counter at 16.
// Clicking the "Add Value" button increases the counter.
// Clicking the "Subtract Value" button decreases it.
// The UI updates automatically based on the current value of counter.
import React from 'react'
import './App.css'

function App() {
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)

  const editBreak = (signal) => {
    if (signal) {
      setBreakLength(old => old + 1)
    } else {
      setBreakLength(old => old - 1)
    }
  }

  const editSession = (signal) => {
    if (signal) {
      setSessionLength(old => old + 1) 
    } else {
      setSessionLength(old => old - 1)
    }
  }

  function Settings(props) {
    return (
      <div className="bg-slate-700 p-2 rounded-lg w-64" id="break-settings">
        <h3>{props.name}</h3>
        <div className="flex justify-center gap-3 items-center bg-slate-600 rounded-lg py-2 my-2 mx-auto w-9/12">
          <i onClick={() => props.clickHandler(false)} className="fa-solid fa-minus p-2 cursor-pointer"></i>
          <p>{props.length}</p>
          <i onClick={() => props.clickHandler(true)} className="fa-solid fa-plus p-2 cursor-pointer"></i>
        </div>
      </div>
    )
  }

  return (
    <div className="md:text-3xl text-2xl text-center w-11/12 md:w-10/12 max-w-2xl bg-slate-800 rounded-lg font-mono text-white p-2">
      <h1 className="m-4"> Pomodoro-Timer </h1>
      <div className="flex justify-center gap-4 m-6"id="length-container">
        <Settings name="Break Length" length={breakLength} clickHandler={editBreak}/>
        <Settings name="Session Length" length={sessionLength} clickHandler={editSession}/>
      </div>
      <div id="stopwatch">
        <h3>
          Session
        </h3>
        <h1>
          {sessionLength + ":00"}
        </h1>
      </div>
      <div id="buttons-container">
        <i className="fa-solid fa-play"></i>
      </div>
    </div>
  )
}

export default App

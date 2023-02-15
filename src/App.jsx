import React from 'react'
import './App.css'
import Settings from "./components/Settings"

function App() {
  const [breakLength, setBreakLength] = React.useState(5*60)
  const [sessionLength, setSessionLength] = React.useState(25*60)
  const [watch, setWatch] = React.useState(false)
  const [countInterval, setCountInterval] = React.useState()
  const [display, setDisplay] = React.useState()
  const [session, setSession] = React.useState(true)

  const editBreak = (signal) => {
    if (breakLength > 0 && breakLength < 3601) {
      if (signal) {
        setBreakLength(old => old + 60)
      } else {
        setBreakLength(old => old - 60)
      }
    }
  }

  const editSession = (signal) => {
    if (sessionLength > 0 && sessionLength < 3601) {
      if (signal) {
        setSessionLength(old => old + 60) 
      } else {
        setSessionLength(old => old - 60)
      }
    }
  }

  const startCountdown = () => {
    setCountInterval(setInterval( () => setDisplay(old=>old-1), 1000))
    setWatch(true)
  }

  const stopCountdown = () => {
    clearInterval(countInterval)
    setWatch(false)
  }
  
  React.useEffect( () => {
    if (session && !watch) {
      setDisplay(sessionLength)
    }
  }, [sessionLength])

  React.useEffect( () => {
    if (display <= 0) {
      if (session) {
        setDisplay(breakLength)
        setSession(false)
      } else {
        setDisplay(sessionLength)
        setSession(true)
      }
    }
  }, [display])


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
          {Math.floor(display / 60) + ":" + (display % 60)}
        </h1>
      </div>
      <div id="buttons-container">
        {!watch ? <i onClick={() => startCountdown()} className="fa-solid fa-play"></i> : <i onClick={() => stopCountdown()} className="fa-solid fa-stop"></i>}
      </div>
    </div>
  )
}

export default App

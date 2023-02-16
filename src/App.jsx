import React from 'react'
import './App.css'
import alarm1 from "./assets/alarm.wav"
import Settings from "./components/Settings"

function App() {
  const [breakLength, setBreakLength] = React.useState(5*60)
  const [sessionLength, setSessionLength] = React.useState(25*60)
  const [watch, setWatch] = React.useState(false)
  const [countInterval, setCountInterval] = React.useState()
  const [display, setDisplay] = React.useState()
  const [session, setSession] = React.useState(true)

  const editBreak = (signal) => {
      if (signal) {
        breakLength < 3601 ? setBreakLength(old => old + 60) : ""
      } else {
        breakLength > 61 ? setBreakLength(old => old - 60) : ""
      }
  }

  const editSession = (signal) => {
      if (signal) {
        sessionLength < 3601 ? setSessionLength(old => old + 60) : ""
      } else {
        sessionLength > 61 ? setSessionLength(old => old - 60) : ""
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
  
  const reset = () => {
    stopCountdown()
    if (session) {
      setDisplay(sessionLength)
    } else {
      setDisplay(breakLength)
    }
  }
  
  React.useEffect( () => {
    if (session && !watch) {
      setDisplay(sessionLength)
    }
  }, [sessionLength])

  React.useEffect( () => {
    if (display <= 0 && watch) {
      const alarm = new Audio(alarm1)
      alarm.play()
      if (session) {
        setDisplay(breakLength)
        setSession(false)
      } else {
        setDisplay(sessionLength)
        setSession(true)
      }
    }
  }, [display])

  const seconds = () => {
    if (display % 60 < 10) {
      return "0" + display % 60
    } else {
      return display % 60
    }
  }

  const minutes = () => {
    if (Math.floor(display / 60) < 10) {
      return "0" + Math.floor(display / 60)
    } else {
      return Math.floor(display / 60)
    }
  }

  return (
      <div className="md:text-3xl text-2xl text-center w-11/12 md:w-10/12 max-w-2xl bg-slate-800 rounded-lg font-mono text-white p-2">
        <a href="https://webfabrik.substack.com/p/javascript-calculator" target="_blank"><i className="fa-solid fa-info text-[2.5rem]  text-white m-2mr-2"></i></a>
        <a target="_blank" href="https://github.com/TillJonas27/" ><i className="fa-brands fa-github text-[2.5rem] text-white m-2 ml-5"></i></a>
        <h1 className="m-4"> Pomodoro-Timer </h1>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 m-6"id="length-container">
          <Settings updateValue={setBreakLength} name="Break Length" length={breakLength} clickHandler={editBreak}/>
          <Settings updateValue={setSessionLength} name="Session Length" length={sessionLength} clickHandler={editSession}/>
        </div>
        <div id="stopwatch">
          <h3>
            Session
          </h3>
          <h1>
            {minutes() + ":" + seconds() }
          </h1>
        </div>
        <div className="flex gap-3 justify-center m-3 text-3xl" id="buttons-container">
          {!watch ? <i onClick={() => startCountdown()} className="fa-solid fa-play"></i> : <i onClick={() => stopCountdown()} className="fa-solid fa-stop"></i>}
          <i onClick={reset} className="fa-solid fa-rotate-left"></i>
        </div>
      </div>
  )
}

export default App

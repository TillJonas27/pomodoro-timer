import React from "react"

function Settings(props) {
    function changeHandle(e) {
        console.log(e)
        props.updateValue(e.target.value * 60)
    }

    return (
      <div className="bg-slate-700 p-2 rounded-lg w-64" id="break-settings">
        <h3>{props.name}</h3>
        <div className="flex justify-center gap-3 items-center bg-slate-600 rounded-lg py-2 my-2 mx-auto w-9/12">
          <i onClick={() => props.clickHandler(false)} className="fa-solid fa-minus p-2 cursor-pointer"></i>
          <input onChange={changeHandle} className="bg-transparent appearance-none rounded w-9/12 focus:outline-none focus:border focus:border-slate-500 focus:border-4 text-center" type="text" value={props.length / 60}></input>
          <i onClick={() => props.clickHandler(true)} className="fa-solid fa-plus p-2 cursor-pointer"></i>
        </div>
      </div>
    )
  }

export default Settings
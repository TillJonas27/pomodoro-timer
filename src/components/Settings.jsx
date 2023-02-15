import React from "react"

function Settings(props) {
    return (
      <div className="bg-slate-700 p-2 rounded-lg w-64" id="break-settings">
        <h3>{props.name}</h3>
        <div className="flex justify-center gap-3 items-center bg-slate-600 rounded-lg py-2 my-2 mx-auto w-9/12">
          <i onClick={() => props.clickHandler(false)} className="fa-solid fa-minus p-2 cursor-pointer"></i>
          <p>{props.length / 60}</p>
          <i onClick={() => props.clickHandler(true)} className="fa-solid fa-plus p-2 cursor-pointer"></i>
        </div>
      </div>
    )
  }

export default Settings
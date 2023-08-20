import { useState } from 'react'
import { FcAcceptDatabase } from "react-icons/fc";
import './App.css'
function App() {
 
  return (
    <div className="App">
      <FcAcceptDatabase onClick={()=>navigator.clipboard.writeText(text)} size={"3em"} style={{cursor:"pointer"}}/>
      <h2>{text}</h2>
    </div>
  )
}

export default App

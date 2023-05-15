import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {
  const nav=useNavigate()
  const clicked=()=>{
    nav('/home')
  }
  return (
    <div>
      <h1>About...</h1>
      <button onClick={clicked}>Home</button>
    </div>
  )
}

export default About

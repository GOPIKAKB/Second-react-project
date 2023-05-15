import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home2() {
  const nav=useNavigate()
  const cickee=()=>{
    nav(-1)
}  
return (
    <div>
      <h1 onClick={cickee}>home...</h1>
    </div>
  )
}

export default Home2

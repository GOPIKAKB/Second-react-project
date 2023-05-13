import React from 'react'
import { AiFillAccountBook, AiFillBank } from "react-icons/ai";
import { FiAnchor, FiArrowLeftCircle } from "react-icons/fi";

function Icon1() {
  return (
    <div style={{textAlign:"center"}}>
      <AiFillAccountBook style={{fontSize:'100px',color:'blue'}}/>
      <AiFillBank style={{fontSize:'50px',color:'red'}}/>
      <FiAnchor style={{fontsize:'25pc',color:'green'}}/>
      <FiArrowLeftCircle style={{fontsize:'12.5px',fontStyle:'italic'}}/>
    </div>
  )
}

export default Icon1

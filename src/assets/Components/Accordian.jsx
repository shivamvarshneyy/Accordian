import React, { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"



const Accordian = ({question, answer, onToggle, isActive}) => {

  return (
    <>
    <li>
        <div className="box">
            <p style={{justifyContent:'center' }} onClick={onToggle}>{isActive?<FiMinusCircle/>:<FiPlusCircle />}{question}</p>
            <p className='answer'>{isActive && answer}</p>
      </div>
    </li>
    </>
  )
}

export default Accordian;

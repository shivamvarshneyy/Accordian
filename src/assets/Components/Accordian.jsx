import React, { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"



const Accordian = ({key, question, answer}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <>
        <div className="box">
            <p style={{justifyContent:'center' }} onClick={handleToggle}>{toggle?<FiMinusCircle/>:<FiPlusCircle />}{question}</p>
            {toggle && <p className='answer'>{answer}</p>}
        </div>
    </>
  )
}

export default Accordian;

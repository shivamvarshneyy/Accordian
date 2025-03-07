import React, { useEffect, useState } from 'react';
import Accordian from './assets/Components/Accordian';
import Data from './assets/Components/Data.json';

const App = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(()=>{
    setData(Data);
  },[]);

  const handleButton = (id) => {
    setActive((prev) => (prev===id ? false : id))
  };

  return (
    <>
    <div className="main-div">
    <h1 className="heading">React Interview Question</h1>
    <ul>
      {data.map((val) => {
        return(
          <Accordian
            key={val.id} 
            question={val.question} 
            answer={val.answer}
            isActive={active === val.id}
            onToggle={() => handleButton(val.id)}
          />     
        )
      })}
    </ul>
    </div>
    </>
  )
}

export default App;

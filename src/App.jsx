import React from 'react';
import Accordian from './assets/Components/Accordian';
import Data from './assets/Components/Data.json';

const App = () => {
  return (
    <>
    <div className="main-div">
    <h1 className="heading">React Interview Question</h1>
      {Data.map((val,index) => {
        return(
          <Accordian
            key={index} 
            question={val.question} 
            answer={val.answer}
          />     
        )
      })}
    </div>
    </>
  )
}

export default App;

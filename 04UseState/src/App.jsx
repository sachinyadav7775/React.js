import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  
  function increaseNum() {
    setNum(num + 1)
  }
  function decreaseNum() {
    setNum(num - 1)
  }
  function jump10Num() {
    setNum(num + 10)
  }

  return (
    <div className="parent">
      <h1>{num}</h1>
      <div className='btn'>
        <button className='btn1' onClick={increaseNum}>Increase</button>
        <button className='btn2' onClick={decreaseNum}>Decrease</button>
        <button className='btn3' onClick={jump10Num}>Increase by 10</button>
      </div>
    </div>
  );
};

export default App;
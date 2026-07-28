import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(5)

  useEffect(function(){
    console.log('use effect is runing.....')
  },[])

  return (
    <div>
      <h1>Value of num is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onClick={() => {
        setNum(num+1)
      }}
      onDoubleClick={() =>{
        setNum2(num2+10)
      }}
      >Click</button>
    </div>
  )
}

export default App
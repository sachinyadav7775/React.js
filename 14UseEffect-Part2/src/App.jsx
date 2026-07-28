import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log('A ki value change ho gai hai ')
  }

  function bChanging() {
    console.log('B ki value change ho gai hai ')
  }

  useEffect(function(){
    aChanging()
  },[a])

  useEffect(function(){
    bChanging()
  },[b])


  return (
    
    <div>

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button 
        className='btn1'
        onClick={() => {
          setA(a+1)
        }}>
        Change A
      </button>

      <button
        className='btn2'
        onClick={() => {
          setB(b-5)
        }}>
        Change B
      </button>

    </div>
  )
}

export default App
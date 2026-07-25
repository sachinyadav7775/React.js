import React from 'react'

const App = () => {

  // localStorage.clear()
  // localStorage.setItem('age', '19')
  // localStorage.setItem('user', 'sky')
  // const age = localStorage.getItem('age')
  // const user = localStorage.getItem('user')
  // console.log(age,user)
  // localStorage.removeItem('user')
  
  const user = {
    username: 'nchisa',
    age: 19,
    city: 'New York'
  }

  localStorage.setItem('user',JSON.stringify(user))
  const usr = JSON.parse(localStorage.getItem('user'))
  console.log(usr)

  return (
    <div>
      <h1>Sachin yadav</h1>
    </div>
  )
}

export default App
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // async function gatData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // const gatData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users') 
  //   const data = await response.json()
  //   console.log(data)
  // }

  const [data, setData] = useState([])
  
  const gatData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response.data)
    setData(response.data)
  }

  return (
    <div>
      <button onClick={gatData}>Get Data</button>
      <div>
        {
          data.map(function(elem,idx){
            return <h3>Hello,{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
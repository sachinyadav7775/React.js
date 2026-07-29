import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
    setUserData(response.data);
  }

  useEffect(function() {
    getData()
  },[index])

  let PrintUserData = <h3 className='text-gray-300 text-xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>

  if(userData && userData.length > 0) {
    PrintUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='min-h-screen bg-black overflow-auto text-white'>

      <div className='text-center py-6'>
        <h1 className='text-4xl font-black text-orange-500 tracking-wide'>
          PIXEL GALLERY
        </h1>
        <p className='text-gray-300 mt-3 text-lg'>
          Explore • Discover • Download Amazing Photography
        </p>
      </div>

      <div className='h-[82%] flex flex-wrap justify-center gap-4 p-4'>
        {PrintUserData}
      </div>

      <div className='flex justify-center items-center gap-5 p-6'>

        <button
          style={{opacity: index === 1 ? 0.6 : 1}}
          onClick={() => {
            if(index>1) {
              setIndex(index-1)
              setUserData([])
            }
          }}
          className="bg-amber-400 text-black px-5 py-2 rounded font-semibold cursor-pointer active:scale-95">
          Prev
        </button>

        <h2 className='text-xl font-bold'>
          Page {index}
        </h2>
        
        <button
          onClick={() => {
            setUserData([])
            setIndex(index+1)
          }}
          className="bg-amber-400 text-black px-5 py-2 rounded font-semibold cursor-pointer active:scale-95">
          Next
        </button>

      </div>

    </div>
  )
}

export default App
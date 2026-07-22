import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }
  return ( 
    <div className='h-screen lg:flex text-white bg-black'>
      <form 
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex gap-4 flex-col items-start p-10'>
        <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full font-medium border-2 rounded'
        />
        <textarea 
          type="text" 
          placeholder='Write Delails'
          className='px-5 py-2 w-full h-35 flex items-start flex-row border-2 outline-none font-medium rounded'>
        </textarea>
        <button className='px-5 py-2 w-full bg-white text-black font-medium outline-none rounded'>Add Note</button>
      </form>

      <div className='p-10'>
        <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className=' mt-5 flex flex-wrap gap-5'>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
        </div>
      </div>

    </div>
  )
}

export default App
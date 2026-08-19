import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between gap-5 mt-10'>
        <div className='w-[45%] px-9 py-6 bg-sky-400 rounded-xl'>
            <h1 className='text-3xl font-semibold'>1</h1>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className='w-[45%] px-9 py-6 bg-green-400 rounded-xl'>
            <h1 className='text-3xl font-semibold'>3</h1>
            <h2 className='text-xl font-medium'>Completed Task</h2>
        </div>
        <div className='w-[45%] px-9 py-6 bg-yellow-400 rounded-xl'>
            <h1 className='text-3xl font-semibold'>4</h1>
            <h2 className='text-xl font-medium'>Accepted Task</h2>
        </div>
        <div className='w-[45%] px-9 py-6 bg-red-400 rounded-xl'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h2 className='text-xl font-medium'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumber
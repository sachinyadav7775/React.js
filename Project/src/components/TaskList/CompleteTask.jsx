import React from 'react'

const CompleteTask = () => {
    return (
        <div className='h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0 p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4>19 Aug 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consec is a adipisicing elit. Iste cumque dolorem ullam pariatur deserunt! Sint molestias distinctio laborum ut tempora id, quaerat voluptatum sapiente alias.</p>
            <div className='mt-4'>
                <button className='w-full border-none bg-green-600 rounded py-1 px-2 text-sm'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask
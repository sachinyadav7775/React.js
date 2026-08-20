import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between '>
            <h1 className='text-2xl font-medium'>
                Hello, <br /> 
                <span className='font-semibold text-2xl sm:text-3xl'>Sachin 👋</span>
            </h1>
            <button className='px-3 sm:px-5 py-2 rounded-sm text-sm sm:text-lg font-medium border-none cursor-pointer bg-red-600 hover:bg-red-500 '>
                Log Out
            </button>
        </div>
    )
}

export default Header
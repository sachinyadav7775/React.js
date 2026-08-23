import React from 'react'

const Header = () => {

    const logOutUser = () => {
        localStorage.setItem('loggedUser','')
        window.location.reload()
    }

    return (
        <div className='flex items-center justify-between '>
            <h1 className='text-2xl font-medium'>
                Hello, <br /> 
                <span className='font-semibold text-2xl sm:text-3xl'>sky 👋</span>
            </h1>
            <button onClick={logOutUser} className='px-3 sm:px-5 py-2 rounded-sm text-sm sm:text-lg font-medium border-none cursor-pointer bg-red-600 hover:bg-red-500 '>
                Log Out
            </button>
        </div>
    )
}

export default Header
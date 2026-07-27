import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigation = useNavigate()
    return (
        <div className='py-3 px-5 bg-cyan-700'>
            <button 
                onClick={() => {
                    navigation('/')
                }} 
                className='bg-emerald-800 px-5 py-2 rounded m-2 font-medium cursor-pointer active:hover:bg-emerald-900 active:scale-95'>
                Return to Home Page
            </button>
            <button 
                onClick={() => {
                    navigation(-1)
                }} 
                className='bg-emerald-800 px-5 py-2 rounded m-2 font-medium cursor-pointer active:hover:bg-emerald-900 active:scale-95'>
                Back
            </button>
        </div>
    )
}

export default Navbar2
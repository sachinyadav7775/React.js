import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <div className='h-44 hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 border-white flex items-center px-10 rounded-full uppercase'>
            <Link className='text-[6vw] mt-6' to="/projects">Projects</Link>
        </div>
        <div className='h-44 hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 border-white flex items-center px-10 rounded-full uppercase'>
            <Link className='text-[6vw] mt-6' to="/agence">Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
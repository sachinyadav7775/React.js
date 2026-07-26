import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-600 items-center justify-between'>
        <h2 className='text-xl font-bold'>@Sachin_Sky</h2>
        <div className='flex gap-10'>
           <Link className='text-lg font-medium' to='/'>Home</Link>
           <Link className='text-lg font-medium' to='/about'>About</Link>
           <Link className='text-lg font-medium' to='/course'>Courses</Link>
           <Link className='text-lg font-medium' to='/product'>Product</Link>
           <Link className='text-lg font-medium' to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
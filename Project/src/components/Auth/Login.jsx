import React from 'react'
import {LockKeyhole, CircleUserRound} from 'lucide-react'

const Login = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>

            <div className='border-emerald-500 border-2 p-12 rounded-xl'>

                <form className='flex flex-col items-center justify-center gap-10'>

                    <div className='relative w-full'>
                        <input 
                            className='w-full border-2 border-emerald-700 rounded-full text-xl pl-5 pr-14 py-3 text-white outline-none bg-transparent hover:border-emerald-500 transition-colors duration-200 placeholder:text-gray-400' 
                            type="email" 
                            placeholder='Enter your email' 
                            required
                        />
                        <CircleUserRound 
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-emerald-500"
                            size={22}
                        />
                    </div>

                    <div className="relative w-full">
                        <input 
                            className="w-full border-2 border-emerald-700 rounded-full text-xl pl-5 pr-14 py-3 text-white outline-none bg-transparent hover:border-emerald-500 transition-colors duration-200 placeholder:text-gray-400"
                            type="password"
                            placeholder="Enter password"
                            required
                        />
                        <LockKeyhole 
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-emerald-500"
                            size={22}
                        />
                    </div>

                    <div className='w-full flex justify-between'>
                        <span className='text-gray-400 flex gap-2 font-semibold'>
                            <input 
                                type="checkbox"
                                className='cursor-pointer' 
                            />
                            Remember me
                        </span>
                        <span className='underline text-blue-300 hover:text-blue-400'>
                            <a className='underline text-blue-300 hover:text-blue-400' href="#">Forgot Password</a>
                        </span>
                    </div>

                    <button 
                        type='submit'
                        className='w-full border-none rounded-full text-lg px-8 py-3 text-white outline-none font-semibold bg-emerald-700 hover:bg-emerald-800 cursor-pointer'>
                        Log In
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login
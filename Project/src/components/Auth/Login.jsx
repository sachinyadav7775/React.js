import React, { useState } from 'react'
import {LockKeyhole, CircleUserRound} from 'lucide-react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='min-h-screen w-full flex items-center justify-center px-4 py-6'>

            <div className='w-full max-w-md border-emerald-500 border-2 p-6 sm:p-10 md:p-12 rounded-xl'>

                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center gap-10'
                >

                    <div className='relative w-full'>
                        <input 
                            type="email"
                            value={email} 
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            placeholder='Enter your email' 
                            className='w-full border-2 border-emerald-700 rounded-full text-xl pl-5 pr-14 py-3 text-white outline-none bg-transparent hover:border-emerald-500 transition-colors duration-200 placeholder:text-gray-400' 
                            required
                        />
                        <CircleUserRound 
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-emerald-500"
                            size={22}
                        />
                    </div>

                    <div className="relative w-full">
                        <input 
                            type="password"
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            placeholder="Enter password"
                            className="w-full border-2 border-emerald-700 rounded-full text-xl pl-5 pr-14 py-3 text-white outline-none bg-transparent hover:border-emerald-500 transition-colors duration-200 placeholder:text-gray-400"
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
                        className='w-full border-none rounded-full text-lg px-8 py-3 text-white outline-none font-semibold bg-emerald-700 hover:bg-emerald-600 cursor-pointer'>
                        Log In
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login
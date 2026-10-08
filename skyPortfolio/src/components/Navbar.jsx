import { Link } from 'react-router-dom'
import { FaCode } from "react-icons/fa6";

const Navbar = () => {

    return (

        <nav className="relative text-white flex items-center justify-between bg-black/35 backdrop-blur-md py-6 px-60">

            <h3 className="relative z-10 text-3xl font-bold flex items-center">
                <span className='mr-2 text-fuchsia-600'><FaCode size={40}/></span>
                Sachin<span className='text-violet-600'>Sky</span>
            </h3>

            <div className="relative z-10 flex gap-20 text-xl">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/skill">Skills</Link>
                <Link className="nav-link" to="/project">Project</Link>
            </div>

            <div>
                <Link className="nav-link" to="/login"><button className='bg-zinc-800 hover:bg-zinc-900 border py-2 px-4 border-zinc-700 rounded-xl text-xl transition-transform cursor-pointer'>Login</button></Link>
            </div>

        </nav>

    )
    
}

export default Navbar
import { LiaSkyatlas } from 'react-icons/lia'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const linkStyle = ({ isActive }) =>
        `transition duration-300 ${
            isActive
                ? 'text-green-400'
                : 'text-gray-400 hover:text-green-400'
        }`

    return (

        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#080b09]/85 px-6 py-5 backdrop-blur-xl sm:px-10 lg:px-20 xl:px-32">

            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-green-400">
                        <LiaSkyatlas size={38} />
                    </span>

                    <h1 className="text-3xl font-bold tracking-tight">
                        sky<span className="text-green-400">.</span>
                    </h1>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-5 text-sm font-medium sm:gap-8 sm:text-base">
                    <NavLink to="/" end className={linkStyle}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={linkStyle}>
                        About
                    </NavLink>

                    <NavLink to="/skill" className={linkStyle}>
                        Skills
                    </NavLink>

                    <NavLink to="/contact" className={linkStyle}>
                        Contact
                    </NavLink>
                </div>

                {/* Contact Button */}
                <Link
                    to="/about"
                    className="rounded-full border border-green-400/60 px-4 py-2 text-sm font-semibold text-green-400 transition duration-300 hover:bg-green-400 hover:text-black sm:px-6 sm:py-2.5 sm:text-base"
                >
                    Let's Talk
                </Link>

            </nav>

        </header>

    )

}

export default Navbar
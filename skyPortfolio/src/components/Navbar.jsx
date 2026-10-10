import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skill" },
        { name: "Project", path: "/project" },
        // { name: "Contact", path: "/contact" },
    ];

    const linkClass = ({ isActive }) =>
    `transition-colors duration-300 hover:text-purple-400 ${
        isActive ? "text-purple-400" : "text-white"
    }`;

    return (

        <nav className="fixed top-0 left-0 z-50 w-full text-white bg-black/35 backdrop-blur-md border-b border-white/10">

            <div className="max-w-[1600px] mx-auto flex items-center justify-between py-5 px-6 md:px-12 lg:px-20 xl:px-24">

                {/* LOGO */}
                <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="relative z-10 text-2xl md:text-3xl font-bold flex items-center shrink-0"
                >
                    <span className="mr-2 text-fuchsia-600"> <FaCode size={36} /> </span>
                    Sachin
                    <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 bg-clip-text text-transparent"> Sky </span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-lg">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            className={linkClass}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* DESKTOP LOGIN */}
                <div className="hidden lg:block">
                    <Link
                        to="/login"
                        className="inline-flex items-center bg-zinc-800 hover:bg-purple-800 border border-zinc-700 hover:border-purple-500 py-2 px-5 rounded-xl text-lg transition-all duration-300"
                    >
                        Login
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-3xl p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

            </div>

            {/* MOBILE NAVIGATION */}
            <div
                id="mobile-navigation"
                className={`lg:hidden overflow-hidden transition-all duration-300 ${
                isOpen
                    ? "max-h-[450px] opacity-100 border-t border-white/10"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col gap-1 px-6 py-4 bg-black/70 backdrop-blur-xl">

                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-lg transition-colors duration-300 ${
                                isActive
                                    ? "bg-purple-600/20 text-purple-400"
                                    : "text-white hover:bg-white/10 hover:text-purple-400"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 text-center bg-purple-800 hover:bg-purple-700 py-3 px-4 rounded-xl transition-colors duration-300"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </nav>

    )

}

export default Navbar;
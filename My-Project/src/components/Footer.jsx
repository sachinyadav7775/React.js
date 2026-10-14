import { Link } from 'react-router-dom'
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaArrowUp
} from 'react-icons/fa'
import { LiaSkyatlas } from 'react-icons/lia'

const Footer = () => {

    return (

        <footer className="relative z-10 mt-20 border-t border-white/10 bg-[#080b09] px-6 pt-14 pb-6 text-white sm:px-10 lg:px-20 xl:px-32">

            <div className="mx-auto max-w-7xl">

                {/* Top Section */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Logo and Description */}
                    <div>
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-green-400">
                                <LiaSkyatlas size={40} />
                            </span>

                            <h2 className="text-3xl font-bold tracking-tight">
                                sky<span className="text-green-400">.</span>
                            </h2>
                        </Link>

                        <p className="mt-5 max-w-sm leading-7 text-gray-400">
                            Building modern, responsive, and user-friendly web experiences with creativity and clean code.
                        </p>

                        <p className="mt-4 text-sm text-gray-500">
                            Let's build something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>

                        <h3 className="mb-5 text-lg font-bold"> Quick Links </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link to="/"
                                    className="transition hover:text-green-400">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about"
                                    className="transition hover:text-green-400">
                                    About Me
                                </Link>
                            </li>

                            <li>
                                <a href="/#projects"
                                    className="transition hover:text-green-400">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="/#contact"
                                    className="transition hover:text-green-400">
                                    Contact
                                </a>
                            </li>
                        </ul>

                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold"> Connect With Me </h3>

                        <p className="mb-5 leading-7 text-gray-400">
                            Follow my journey and explore my work on social platforms.
                        </p>

                        <div className="flex items-center gap-4">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:text-green-400"
                            >
                                <FaGithub size={19} />
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:text-green-400"
                            >
                                <FaLinkedinIn size={19} />
                            </a>

                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:text-green-400"
                            >
                                <FaInstagram size={19} />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-green-400">
                            sky.
                        </span>{" "}
                        All rights reserved.
                    </p>

                    <p className="text-sm text-gray-500">
                        Designed & built with{" "}
                        <span className="text-green-400">♥</span>{" "}
                        by You
                    </p>

                    {/* Back to Top */}
                    <button
                        type="button"
                        onClick={() => window.scrollTo({
                            top: 50,
                            behavior: 'smooth'
                        })}
                        aria-label="Back to top"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/30 bg-green-400/5 text-green-400 transition duration-300 hover:bg-green-400 hover:text-black"
                    >
                        <FaArrowUp />
                    </button>

                </div>

            </div>

        </footer>

    )
    
}

export default Footer
import {
    FaGithub,
    FaLinkedinIn,
    FaArrowRight,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiTailwindcss } from 'react-icons/si'
import { HiOutlineCodeBracket } from 'react-icons/hi2'

const Home = () => {

    return (

        <section
            id="home"
            className="relative flex min-h-[85vh] w-full items-center px-6 py-16 sm:px-10 lg:px-20 xl:px-32"
        >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">

                {/* Left Content */}
                <div>
                    <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm text-green-400">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                        Available for Opportunities
                    </p>

                    <p className="mb-2 text-xl text-gray-400"> Hello, I'm </p>

                    <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl xl:text-7xl">
                        Sachin
                        <span className="block bg-gradient-to-r from-green-300 via-green-400 to-emerald-600 bg-clip-text text-transparent"> Yadav </span>
                    </h1>

                    <h2 className="mt-5 text-2xl font-semibold text-gray-200 sm:text-3xl"> Frontend Web Developer </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                        I create modern, responsive, and interactive websites using React.js and Tailwind CSS. I 
                        love transforming creative ideas into clean, functional, and engaging digital experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="group flex items-center gap-3 rounded-xl bg-green-400 px-6 py-3.5 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/20"
                        >
                            View My Work
                            <FaArrowRight className="transition group-hover:translate-x-1" />
                        </a>

                        <Link
                            to="/about"
                            className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition duration-300 hover:border-green-400 hover:text-green-400"
                        >
                            About Me
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="mt-10 flex items-center gap-5">

                        <span className="text-sm text-gray-500"> Follow me </span>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-xl text-gray-400 transition hover:scale-110 hover:text-green-400"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-xl text-gray-400 transition hover:scale-110 hover:text-green-400"
                        >
                            <FaLinkedinIn />
                        </a>

                    </div>

                </div>

                {/* Right Developer Card */}
                <div className="relative mx-auto w-full max-w-md">

                    <div className="absolute -inset-1 rounded-3xl bg-green-400/10 blur-2xl" />

                    <div className="relative rounded-3xl border border-white/10 bg-[#0d120f]/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                        {/* Card Header */}
                        <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-400" />

                            <span className="ml-auto font-mono text-xs text-gray-500">
                                developer.jsx
                            </span>
                        </div>

                        {/* Developer Icon */}
                        <div className="py-8 text-center">
                            <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-3xl border border-green-400/20 bg-green-400/5 text-6xl text-green-400 shadow-lg shadow-green-400/5">
                                <HiOutlineCodeBracket />
                            </div>

                            <h3 className="text-2xl font-bold">
                                Web Developer
                            </h3>

                            <p className="mt-2 text-gray-400">
                                Building ideas into reality.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="grid grid-cols-3 gap-3">

                            <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40">
                                <FaHtml5 className="text-2xl text-orange-500" />
                                <span className="text-xs text-gray-400">HTML5</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40">
                                <FaCss3Alt className="text-2xl text-blue-400" />
                                <span className="text-xs text-gray-400">CSS3</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40">
                                <FaJs className="text-2xl text-yellow-400" />
                                <span className="text-xs text-gray-400">JavaScript</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40">
                                <FaReact className="text-2xl text-cyan-400" />
                                <span className="text-xs text-gray-400">React</span>
                            </div>

                            <div className="col-span-2 flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40">
                                <SiTailwindcss className="text-2xl text-cyan-400" />
                                <span className="text-sm text-gray-300">
                                    Tailwind CSS
                                </span>
                            </div>

                        </div>

                        {/* Code Footer */}
                        <div className="mt-5 rounded-xl border border-green-400/10 bg-green-400/5 p-4 font-mono text-sm">
                            <p className="text-gray-500">
                                // Keep learning, keep building
                            </p>
                            <p className="mt-2">
                                <span className="text-purple-400">const</span>
                                {' '}
                                <span className="text-green-300">passion</span>
                                {' = '}
                                <span className="text-yellow-300">
                                    "web development";
                                </span>
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Home
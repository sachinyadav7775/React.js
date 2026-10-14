import { Link } from 'react-router-dom'
import {
    FaCode,
    FaLaptopCode,
    FaGraduationCap,
    FaArrowRight,
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGithub
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { HiOutlineUser } from 'react-icons/hi2'

const About = () => {

    return (

        <section className="relative min-h-screen overflow-hidden px-6 py-16 text-white sm:px-10 lg:px-20 xl:px-32">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                        Get To Know Me
                    </p>

                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        About <span className="text-green-400">Me.</span>
                    </h1>

                    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-400" />

                    <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
                        A little introduction about who I am, what I do, and my passion for web development.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Profile Card */}
                    <div className="relative mx-auto w-full max-w-md">

                        <div className="absolute -inset-1 rounded-3xl bg-green-400/10 blur-2xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-[#0d120f]/90 p-8 sm:p-10">

                            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-green-400/40 bg-green-400/5 text-6xl text-green-400 shadow-lg shadow-green-400/10">
                                <HiOutlineUser />
                            </div>

                            <div className="mt-6 text-center">
                                <h2 className="text-2xl font-bold"> Sachin Yadav </h2>

                                <p className="mt-2 font-medium text-green-400"> Frontend Web Developer </p>

                                <p className="mt-5 leading-7 text-gray-400">
                                    Passionate about creating beautiful websites, learning new technologies, and solving problems through code.
                                </p>
                            </div>

                            {/* Info */}
                            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                                <div className="flex items-center gap-3">
                                    <FaCode className="text-green-400" />
                                    <span className="text-gray-300"> Web Development </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaLaptopCode className="text-green-400" />
                                    <span className="text-gray-300"> Frontend Development </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaGraduationCap className="text-green-400" />
                                    <span className="text-gray-300"> Always Learning </span>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Right About Content */}
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400"> Who Am I? </p>

                        <h2 className="text-3xl font-bold leading-snug sm:text-4xl">
                            I Build Websites That
                            <span className="text-green-400">
                                {' '}Make An Impact.
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-gray-400">
                            Hello! I'm a passionate web developer who enjoys building modern, responsive, and 
                            user-friendly websites. I love turning ideas into real digital experiences through code.
                        </p>

                        <p className="mt-4 leading-8 text-gray-400">
                            My main focus is frontend development using React.js and Tailwind CSS. I enjoy exploring
                            new technologies, improving my coding skills, and creating websites that look great on every device.
                        </p>

                        <p className="mt-4 leading-8 text-gray-400">
                            My goal is to keep learning, build meaningful projects, and grow 
                            as a developer while delivering clean and maintainable code.
                        </p>

                        {/* Skills */}
                        <h3 className="mt-8 text-lg font-bold"> Technologies I Work With </h3>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition hover:border-green-400/50">
                                <FaHtml5 className="text-orange-500" />
                                HTML5
                            </span>

                            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition hover:border-green-400/50">
                                <FaCss3Alt className="text-blue-400" />
                                CSS3
                            </span>

                            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition hover:border-green-400/50">
                                <FaJs className="text-yellow-400" />
                                JavaScript
                            </span>

                            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition hover:border-green-400/50">
                                <FaReact className="text-cyan-400" />
                                React.js
                            </span>

                            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition hover:border-green-400/50">
                                <SiTailwindcss className="text-cyan-400" />
                                Tailwind CSS
                            </span>

                            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition hover:border-green-400/50">
                                <FaGithub className="text-white" />
                                Git & GitHub
                            </span>
                        </div>

                        {/* CTA */}
                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                to="/"
                                className="group flex items-center gap-3 rounded-xl bg-green-400 px-6 py-3.5 font-bold text-black transition hover:-translate-y-1 hover:bg-green-300"
                            >
                                Back to Home
                                <FaArrowRight className="transition group-hover:translate-x-1" />
                            </Link>
                        </div>

                    </div>

                </div>

                {/* Bottom Highlights */}
                <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-2xl border border-white/10 bg-[#0d120f]/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/40">
                        <FaCode className="text-3xl text-green-400" />

                        <h3 className="mt-5 text-xl font-bold"> Clean Code </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            Writing readable, maintainable, and well-structured code for better projects.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0d120f]/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/40">
                        <FaLaptopCode className="text-3xl text-green-400" />

                        <h3 className="mt-5 text-xl font-bold"> Responsive Design </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            Building interfaces that adapt smoothly to mobile, tablet, and desktop screens.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0d120f]/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/40">
                        <FaGraduationCap className="text-3xl text-green-400" />

                        <h3 className="mt-5 text-xl font-bold"> Continuous Learning </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            Exploring new tools, practicing coding, and improving my development skills.
                        </p>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default About
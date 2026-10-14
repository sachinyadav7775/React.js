import { useState } from 'react'
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaUser,
    FaCode,
    FaGithub,
    FaLinkedinIn,
    FaArrowRight
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Contact Form Data:', formData)

        alert('Your message has been submitted!')

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    return (

        <section className="relative min-h-screen overflow-hidden px-6 py-16 text-white sm:px-10 lg:px-20 xl:px-32">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                        <HiOutlineChatBubbleLeftRight className="text-xl" />
                        Get In Touch
                    </p>

                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        Contact <span className="text-green-400">Me.</span>
                    </h1>

                    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-400" />

                    <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
                        Have a project in mind or want to work together?
                        Feel free to send me a message. I'd love to hear from you.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* Left Contact Information */}
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-3xl bg-green-400/10 blur-2xl" />

                        <div className="relative h-full rounded-3xl border border-white/10 bg-[#0d120f]/90 p-7 sm:p-10">

                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-3xl text-green-400">
                                <HiOutlineChatBubbleLeftRight />
                            </div>

                            <h2 className="text-2xl font-bold sm:text-3xl"> Let's Talk </h2>

                            <p className="mt-4 leading-7 text-gray-400">
                                I am always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
                            </p>

                            {/* Contact Details */}
                            <div className="mt-9 space-y-5">

                                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40 hover:bg-green-400/5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-xl text-green-400 transition group-hover:bg-green-400 group-hover:text-black">
                                        <FaUser />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Name</h3>
                                        <p className="mt-1 text-sm text-gray-400"> Sachin Yadav </p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40 hover:bg-green-400/5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-xl text-green-400 transition group-hover:bg-green-400 group-hover:text-black">
                                        <FaEnvelope />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="font-semibold">Email Address</h3>
                                        <p className="mt-1 break-all text-sm text-gray-400"> your-email@example.com </p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40 hover:bg-green-400/5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-xl text-green-400 transition group-hover:bg-green-400 group-hover:text-black">
                                        <FaPhone />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="mt-1 text-sm text-gray-400"> Your Phone Number </p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-green-400/40 hover:bg-green-400/5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-xl text-green-400 transition group-hover:bg-green-400 group-hover:text-black">
                                        <FaMapMarkerAlt />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Location</h3>
                                        <p className="mt-1 text-sm text-gray-400"> Your Location </p>
                                    </div>
                                </div>
                                
                            </div>

                            {/* Social Links */}
                            <div className="mt-9 border-t border-white/10 pt-7">
                                <h3 className="mb-4 font-semibold">
                                    Connect With Me
                                </h3>

                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-gray-300 transition hover:-translate-y-1 hover:border-green-400/50 hover:bg-green-400 hover:text-black"
                                    >
                                        <FaGithub />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-gray-300 transition hover:-translate-y-1 hover:border-green-400/50 hover:bg-green-400 hover:text-black"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Right Contact Form */}
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-3xl bg-emerald-400/10 blur-2xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-[#0d120f]/90 p-7 sm:p-10">

                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Send Me a <span className="text-green-400">Message</span>
                            </h2>

                            <p className="mt-3 leading-7 text-gray-400">
                                Fill out the form below and let's start a conversation.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                        <FaUser className="text-green-400" /> Your Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                        <FaEnvelope className="text-green-400" /> Your Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                        <FaCode className="text-green-400" /> Subject
                                    </label>

                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="What is this about?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                        <HiOutlineChatBubbleLeftRight className="text-green-400" /> Your Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write your message here..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-green-400 px-6 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/20"
                                >
                                    Send Message
                                    <FaPaperPlane className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                                
                            </form>

                        </div>

                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-16 rounded-2xl border border-white/10 bg-[#0d120f]/80 p-7 text-center sm:p-10">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10 text-2xl text-green-400">
                        <FaCode />
                    </div>

                    <h2 className="mt-5 text-2xl font-bold">
                        Let's Build Something <span className="text-green-400">Amazing.</span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-400">
                        Have an idea? Let's turn it into reality with clean code, creative design, and great user experiences.
                    </p>

                    <Link
                        to="/"
                        className="group mt-6 inline-flex items-center gap-3 rounded-xl border border-green-400/40 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-400 hover:text-black"
                    >
                        Back to Home
                        <FaArrowRight className="transition group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>

        </section>

    )

}

export default Contact
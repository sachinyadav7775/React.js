import { IoCalendarClearOutline, IoCodeSlashOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { LuUser, LuDownload, LuCode, LuPalette } from "react-icons/lu";
import { FaReact, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60 py-24">

      {/* ================= ABOUT INTRO ================= */}

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">

          <p className="text-purple-400 font-semibold tracking-[2px] text-sm">
            <span className="bg-purple-950/45 py-1 px-2 rounded">ABOUT ME</span>
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            I'm passionate about creating
            <span className="text-purple-500"> digital solutions.</span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-xl">
            I'm a passionate web developer focused on creating modern,
            responsive, and user-friendly websites. I enjoy turning ideas
            into interactive digital experiences using modern web technologies.
          </p>

          <p className="mt-4 text-zinc-400 text-lg leading-8 max-w-xl">
            I love solving problems, learning new technologies, and writing
            clean and efficient code. My goal is to build websites that are
            not only visually appealing but also fast, accessible, and easy
            to use.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button
              className="
                flex items-center gap-3
                bg-purple-700
                hover:bg-purple-800
                px-6 py-3 cursor-pointer
                rounded-lg
                font-semibold
                transition-all duration-300
              "
            >
              Learn More About Me
              <LuUser className="text-xl" />
            </button>

            <button
              className="
                flex items-center gap-3
                border border-zinc-600
                hover:bg-zinc-800
                hover:border-purple-500
                px-6 py-3 cursor-pointer
                rounded-lg
                font-semibold
                transition-all duration-300
              "
            >
              Download CV
              <LuDownload className="text-xl" />
            </button>

          </div>

        </div>


        {/* ================= STATS ================= */}

        <div className="w-full lg:w-[450px] grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Experience */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <div className="w-14 h-14 rounded-xl bg-purple-800/80 flex items-center justify-center">
              <IoCalendarClearOutline className="text-3xl" />
            </div>

            <div className="mt-4">
              <p className="text-3xl font-bold">1+</p>
              <p className="mt-1 text-gray-400">
                Years Experience
              </p>
            </div>

          </div>


          {/* Projects */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <div className="w-14 h-14 rounded-xl bg-purple-800/80 flex items-center justify-center">
              <IoCodeSlashOutline className="text-3xl" />
            </div>

            <div className="mt-4">
              <p className="text-3xl font-bold">75+</p>
              <p className="mt-1 text-gray-400">
                Projects Completed
              </p>
            </div>

          </div>


          {/* Happy Clients */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <div className="w-14 h-14 rounded-xl bg-purple-800/80 flex items-center justify-center">
              <HiOutlineEmojiHappy className="text-3xl" />
            </div>

            <div className="mt-4">
              <p className="text-3xl font-bold">35+</p>
              <p className="mt-1 text-gray-400">
                Happy Clients
              </p>
            </div>

          </div>


          {/* Satisfaction */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <div className="w-14 h-14 rounded-xl bg-purple-800/80 flex items-center justify-center">
              <GoTrophy className="text-3xl" />
            </div>

            <div className="mt-4">
              <p className="text-3xl font-bold">100%</p>
              <p className="mt-1 text-gray-400">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ================= WHAT I DO ================= */}

      <div className="mt-28">

        <div className="text-center">

          <p className="text-purple-400 font-semibold tracking-[2.5px] text-sm">
            <span className="bg-purple-950/45 py-1 px-2 rounded">WHAT I DO</span>
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Turning ideas into digital experiences
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            I focus on building modern websites that combine clean design,
            smooth interactions, and reliable functionality.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          {/* Web Development */}
          <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <div className="w-14 h-14 rounded-xl bg-purple-800/80 flex items-center justify-center">
              <FaLaptopCode className="text-3xl" />
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Web Development
            </h3>

            <p className="mt-3 text-zinc-400 leading-7">
              Building responsive and modern websites using HTML, CSS,
              JavaScript, React, and modern web technologies.
            </p>

          </div>


          {/* React Development */}
          <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <div className="w-14 h-14 rounded-xl bg-purple-800/80 flex items-center justify-center">
              <FaReact className="text-3xl text-cyan-300" />
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              React Development
            </h3>

            <p className="mt-3 text-zinc-400 leading-7">
              Creating interactive and scalable React applications with
              reusable components and clean architecture.
            </p>

          </div>


          {/* UI Design */}
          <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <div className="w-14 h-14 rounded-xl bg-purple-800/80 flex items-center justify-center">
              <LuPalette className="text-3xl" />
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              UI & UX
            </h3>

            <p className="mt-3 text-zinc-400 leading-7">
              Designing clean, intuitive, and user-friendly interfaces
              focused on creating a better user experience.
            </p>

          </div>

        </div>

      </div>


      {/* ================= MY JOURNEY ================= */}

      <div className="mt-28">

        <div className="text-center">

          <p className="text-purple-300 font-semibold tracking-[2.5px] text-sm">
            <span className="bg-purple-950/20 backdrop-blur-md py-1 px-2 rounded">MY JOURNEY</span>
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            My journey in web development
          </h2>

        </div>


        <div className="relative max-w-3xl mx-auto mt-12">

          {/* Timeline Line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-purple-700/50 md:-translate-x-1/2" />


          {/* 2024 */}
          <div className="relative flex flex-col md:flex-row items-start gap-6 mb-12">

            <div className="w-7 h-7 rounded-full bg-purple-600 border-4 border-[#0F0F0F] z-10 shrink-0" />

            <div className="md:w-1/2 md:text-right md:pr-10">

              <p className="text-purple-400 font-bold">
                2024
              </p>

              <h3 className="text-xl font-semibold mt-1">
                Started Web Development
              </h3>

              <p className="text-zinc-400 mt-2 leading-7">
                Started learning the fundamentals of HTML, CSS, and
                JavaScript and built my first websites.
              </p>

            </div>

          </div>


          {/* 2025 */}
          <div className="relative flex flex-col md:flex-row-reverse items-start gap-6 mb-12">

            <div className="w-7 h-7 rounded-full bg-purple-600 border-4 border-[#0F0F0F] z-10 shrink-0" />

            <div className="md:w-1/2 md:text-left md:pl-10">

              <p className="text-purple-400 font-bold">
                2025
              </p>

              <h3 className="text-xl font-semibold mt-1">
                Started React Development
              </h3>

              <p className="text-zinc-400 mt-2 leading-7">
                Started working with React and modern frontend tools
                while building real-world projects.
              </p>

            </div>

          </div>


          {/* 2026 */}
          <div className="relative flex flex-col md:flex-row items-start gap-6">

            <div className="w-7 h-7 rounded-full bg-purple-600 border-4 border-[#0F0F0F] z-10 shrink-0" />

            <div className="md:w-1/2 md:text-right md:pr-10">

              <p className="text-purple-400 font-bold">
                2026
              </p>

              <h3 className="text-xl font-semibold mt-1">
                Building Modern Web Experiences
              </h3>

              <p className="text-zinc-400 mt-2 leading-7">
                Continuing to improve my skills and building modern,
                responsive, and interactive web applications.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
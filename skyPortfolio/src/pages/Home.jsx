import { GrNode } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";
import { TbDownload } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoReact } from "react-icons/io5";
import { BsJavascript } from "react-icons/bs";
import { TfiArrowTopRight } from "react-icons/tfi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa6";

const Home = () => {
  
  return (

    <div className="relative w-full min-h-[90vh] px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60 bg-black/35 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-12 py-16 overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="max-w-2xl relative z-10">

        <p className="bg-sky-950 w-fit py-1 px-3 rounded text-blue-300 text-sm tracking-wide"> I'M A WEB DEVELOPER </p>

        <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 bg-clip-text text-transparent"> Sachin </span>
          <br />
          I build things for the web.
        </h1>

        <p className="mt-5 text-zinc-300 max-w-xl leading-7">
          I'm a passionate web developer specializing in building exceptional digital experiences
          with modern technologies. I love creating beautiful, responsive and user-friendly websites.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-7">

          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-purple-800 font-semibold flex items-center gap-3 py-3 px-5 hover:bg-purple-700 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            View My Work
            <TfiArrowTopRight className="text-lg" />
          </button>

          <a
            href="/cv.pdf"
            download
            className="border border-zinc-400 hover:border-purple-400 hover:bg-zinc-800/80 font-semibold rounded-lg py-3 px-5 flex items-center gap-3 cursor-pointer transition-all duration-300 text-white"
          >
            Download CV
            <TbDownload className="text-xl" />
          </a>

        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-10">

          <p className="text-sm text-zinc-400 tracking-widest"> TECHNOLOGIES I WORK WITH </p>

          <div className="flex flex-wrap gap-5 md:gap-6 text-3xl md:text-4xl mt-5">

            <ImHtmlFive
              title="HTML5"
              className="text-[#E34F26] hover:scale-125 transition-transform duration-300 cursor-pointer"
            />

            <FaCss3Alt
              title="CSS3"
              className="text-[#1572B6] hover:scale-125 transition-transform duration-300 cursor-pointer"
            />

            <BsJavascript
              title="JavaScript"
              className="text-[#F7DF1E] hover:scale-125 transition-transform duration-300 cursor-pointer"
            />

            <IoLogoReact
              title="React"
              className="text-[#61DAFB] hover:scale-125 transition-transform duration-300 cursor-pointer"
            />

            <FaGitAlt
              title="Git"
              className="text-[#F05032] hover:scale-125 transition-transform duration-300 cursor-pointer"
            />

            <VscGithub
              title="GitHub"
              className="text-[#E6EDF3] hover:scale-125 transition-transform duration-300 cursor-pointer"
            />

            <GrNode
              title="Node.js"
              className="text-[#339933] hover:scale-125 transition-transform duration-300 cursor-pointer"
            />

            <RiTailwindCssFill
              title="Tailwind CSS"
              className="text-[#06B6D4] hover:scale-125 transition-transform duration-300 cursor-pointer"
            />

          </div>

        </div>

      </div>

      {/* RIGHT CONTENT - PROFILE CARD */}
      <div className="flex w-full items-center justify-center relative mt-10 lg:mt-0 lg:w-auto shrink-0">

        {/* Background Glow */}
        <div className="absolute w-80 h-80 bg-purple-600/30 rounded-full blur-[100px]"></div>

        {/* Profile Card */}
        <div className="group relative w-80 xl:w-96 min-h-[430px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-purple-900/20 flex flex-col items-center justify-center py-10 px-6 transition-all duration-500 hover:border-purple-500/40 hover:-translate-y-2">

          {/* Decorative Circle */}
          <div className="absolute top-8 right-8 w-3 h-3 bg-purple-500 rounded-full blur-[1px]"></div>
          <div className="absolute bottom-12 left-8 w-2 h-2 bg-blue-400 rounded-full"></div>

          {/* Profile Image Ring */}
          <div className="relative w-48 h-48 xl:w-52 xl:h-52 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-400 shadow-xl shadow-purple-500/20 transition-transform duration-500 group-hover:scale-105">

            <div
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-full rounded-full bg-zinc-900 p-1"
            >
              <img
                src="/profile.png"
                alt="Sachin - Web Developer"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full rounded-full object-cover pointer-events-none select-none"
              />
            </div>

          </div>

          {/* Name and Role */}
          <h2 className="mt-7 text-3xl font-bold text-white tracking-wide">
            <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 bg-clip-text text-transparent">Sachin Yadav (sky)</span>
          </h2>

          <p className="mt-2 text-purple-300 text-sm tracking-wider"> Frontend Developer </p>

          <p className="mt-3 text-zinc-400 text-sm text-center max-w-[250px] leading-6"> Turning creative ideas into beautiful digital experiences. </p>

          {/* Availability Status */}
          <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">

            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

            <span className="text-sm text-zinc-300"> Available for projects </span>

          </div>

          {/* Floating React Icon */}
          <div className="absolute -top-5 -right-5 bg-zinc-900 border border-white/10 rounded-2xl p-3 shadow-xl shadow-blue-500/10 transition-transform duration-300 hover:scale-110">
            <IoLogoReact className="text-4xl text-[#61DAFB]" />
          </div>

          {/* Floating Tailwind Icon */}
          <div className="absolute top-28 -left-6 bg-zinc-900 border border-white/10 rounded-2xl p-3 shadow-xl shadow-cyan-500/10 transition-transform duration-300 hover:scale-110">
            <RiTailwindCssFill className="text-3xl text-[#06B6D4]" />
          </div>

          {/* Floating JavaScript Icon */}
          <div className="absolute -bottom-5 right-8 bg-zinc-900 border border-white/10 rounded-2xl p-3 shadow-xl shadow-yellow-500/10 transition-transform duration-300 hover:scale-110">
            <BsJavascript className="text-3xl text-[#F7DF1E]" />
          </div>

          {/* Floating HTML Icon */}
          <div className="absolute bottom-20 -right-5 bg-zinc-900 border border-white/10 rounded-2xl p-3 shadow-xl transition-transform duration-300 hover:scale-110">
            <ImHtmlFive className="text-3xl text-[#E34F26]" />
          </div>

        </div>

      </div>

    </div>

  );

};

export default Home;
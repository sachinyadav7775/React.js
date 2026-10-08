import { TbDownload } from "react-icons/tb"
import { TfiArrowTopRight } from "react-icons/tfi"
import { ImHtmlFive } from "react-icons/im"
import { FaCss3Alt, FaGitAlt } from "react-icons/fa6"
import { BsJavascript } from "react-icons/bs"
import { IoLogoReact } from "react-icons/io5"
import { VscGithub } from "react-icons/vsc"
import { GrNode } from "react-icons/gr"
import { RiTailwindCssFill } from "react-icons/ri"

const Home = () => {

  return (

    <div className="w-full h-[90vh] px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60 bg-black/35 backdrop-blur-md flex items-center justify-between">

      {/* LEFT CONTENT */}
      <div className="max-w-2xl">

        <p className="bg-sky-950 w-fit py-1 px-2 rounded text-blue-300">
          I'M A WEB DEVELOPER
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          Hi, I'm <span className="text-purple-700">Sachin</span>
          <br />
          I build things for the web.
        </h1>

        <p className="mt-4 text-zinc-300 max-w-xl">
          I'm a passionate web developer specializing in building
          exceptional digital experiences with modern technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-5 mt-6">

          <button className="bg-purple-800 font-semibold flex items-center gap-4 py-2 px-4 hover:bg-purple-900 rounded cursor-pointer transition">
            View My Work
            <span className="text-xl font-bold">
              <TfiArrowTopRight />
            </span>
          </button>

          <button className="border border-zinc-400 hover:bg-zinc-800 font-semibold rounded py-2 px-4 flex items-center gap-5 cursor-pointer transition">
            Download CV
            <span className="text-xl">
              <TbDownload />
            </span>
          </button>

        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-8">

          <p className="text-sm text-zinc-400">
            TECHNOLOGIES I WORK WITH
          </p>

          <div className="flex gap-5 text-4xl mt-5">

            <ImHtmlFive
              className="text-[#E34F26] hover:scale-125 transition-all"
            />

            <FaCss3Alt
              className="text-[#1572B6] hover:scale-125 transition-all"
            />

            <BsJavascript
              className="text-[#F7DF1E] hover:scale-125 transition-all"
            />

            <IoLogoReact
              className="text-[#61DAFB] hover:scale-125 transition-all"
            />

            <FaGitAlt
              className="text-[#F05032] hover:scale-125 transition-all"
            />

            <VscGithub
              className="text-[#E6EDF3] hover:scale-125 transition-all"
            />

            <GrNode
              className="text-[#339933] hover:scale-125 transition-all"
            />

            <RiTailwindCssFill
              className="text-[#06B6D4] hover:scale-125 transition-all"
            />

          </div>

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div>
        {/* Yahan profile image / animated circle / card laga sakte ho */}
      </div>

    </div>

  )

}

export default Home
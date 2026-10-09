import { GrNode } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoReact } from "react-icons/io5";
import { BsJavascript } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiFigma } from "react-icons/si";
import { FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa6";
import { LuCode, LuMonitor, LuPalette, LuSmartphone } from "react-icons/lu";

const Skill = () => {

  const skills = [
    {
      name: "HTML",
      percentage: 95,
      icon: <ImHtmlFive />,
      color: "text-[#E34F26]",
    },
    {
      name: "CSS",
      percentage: 90,
      icon: <FaCss3Alt />,
      color: "text-[#1572B6]",
    },
    {
      name: "JavaScript",
      percentage: 90,
      icon: <BsJavascript />,
      color: "text-[#F7DF1E]",
    },
    {
      name: "React.js",
      percentage: 85,
      icon: <IoLogoReact />,
      color: "text-[#61DAFB]",
    },
    {
      name: "Next.js",
      percentage: 80,
      icon: <SiNextdotjs />,
      color: "text-white",
    },
    {
      name: "MongoDB",
      percentage: 75,
      icon: <BiLogoMongodb size={25} />,
      color: "text-[#58AD57]",
    },
    {
      name: "Node.js",
      percentage: 80,
      icon: <GrNode />,
      color: "text-[#339933]",
    },
    {
      name: "Tailwind CSS",
      percentage: 90,
      icon: <RiTailwindCssFill />,
      color: "text-[#06B6D4]",
    },
    {
      name: "Git",
      percentage: 85,
      icon: <FaGitAlt />,
      color: "text-[#F05032]",
    },
  ];

  return (

    <section className="min-h-[90vh] w-full px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60 py-20">

      {/* ================= HEADER ================= */}

      <div className="text-center">

        <p className="text-purple-400 font-semibold tracking-[2px] text-sm">
          <span className="bg-purple-950/45 py-1 px-2 rounded">MY SKILLS</span>
        </p>

        <h1 className="mt-3 text-3xl md:text-4xl font-bold"> Technologies I Master </h1>

        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Technologies and tools I use to create modern, responsive and interactive web experiences.
        </p>

      </div>

      {/* ================= SKILLS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mt-14">

        {skills.map((skill) => (

          <div key={skill.name}>

            {/* NAME + PERCENTAGE */}
            <div className="flex items-center justify-between mb-3">

              <div className="flex items-center gap-3">

                <span className={`text-xl ${skill.color}`}> {skill.icon} </span>

                <span className="text-sm font-medium text-zinc-200"> {skill.name} </span>

              </div>

              <span className="text-sm text-purple-400 font-semibold"> {skill.percentage}% </span>

            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">

              <div className="h-full rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 animate-[progress_2s_ease-out_forwards] "
                style={{
                  "--progress": `${skill.percentage}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

      {/* ================= TOOLS ================= */}

      <div className="mt-24">

        <div className="text-center">

          <p className="text-purple-400 font-semibold tracking-[2.5px] text-sm">
            <span className="bg-purple-950/45 py-1 px-2 rounded">TOOLS I USE</span>
          </p>

          <h2 className="mt-3 text-3xl font-bold"> My Development Tools </h2>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">

          {/* VS CODE */}
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <VscVscode className="text-4xl text-[#007ACC] group-hover:scale-110 transition-transform" />

            <p className="text-zinc-300"> VS Code </p>

          </div>

          {/* GITHUB */}
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <FaGithub className="text-4xl text-white group-hover:scale-110 transition-transform" />

            <p className="text-zinc-300"> GitHub </p>

          </div>

          {/* FIGMA */}
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <SiFigma className="text-4xl text-[#F24E1E] group-hover:scale-110 transition-transform" />

            <p className="text-zinc-300"> Figma </p>

          </div>

          {/* GIT */}
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <FaGitAlt className="text-4xl text-[#F05032] group-hover:scale-110 transition-transform" />

            <p className="text-zinc-300"> Git </p>

          </div>

        </div>

      </div>

      {/* ================= WHAT I CAN DO ================= */}

      <div className="mt-24">

        <div className="text-center">

          <p className="text-purple-300 font-semibold tracking-[2.5px] text-sm">
            <span className="bg-purple-950/20 backdrop-blur-md py-1 px-2 rounded">WHAT I CAN DO</span>
          </p>

          <h2 className="mt-3 text-3xl font-bold"> How I Can Help </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

          {/* FRONTEND */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <LuCode className="text-4xl text-purple-400" />

            <h3 className="mt-5 text-lg font-semibold"> Frontend Development </h3>

            <p className="mt-3 text-sm text-zinc-400 leading-6"> Building modern and responsive websites with clean and reusable code. </p>

          </div>

          {/* RESPONSIVE */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <LuSmartphone className="text-4xl text-cyan-400" />

            <h3 className="mt-5 text-lg font-semibold"> Responsive Design </h3>

            <p className="mt-3 text-sm text-zinc-400 leading-6"> Creating websites that work smoothly on mobile, tablet and desktop. </p>

          </div>

          {/* UI */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <LuPalette className="text-4xl text-pink-400" />

            <h3 className="mt-5 text-lg font-semibold"> UI Implementation </h3>

            <p className="mt-3 text-sm text-zinc-400 leading-6"> Converting designs and ideas into beautiful and interactive interfaces. </p>

          </div>

          {/* WEB */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">

            <LuMonitor className="text-4xl text-green-400" />

            <h3 className="mt-5 text-lg font-semibold"> Web Applications </h3>

            <p className="mt-3 text-sm text-zinc-400 leading-6"> Developing interactive web applications using React and modern JavaScript. </p>

          </div>

        </div>

      </div>

      {/* ================= CURRENTLY LEARNING ================= */}

      <div className="mt-24">

        <div className="text-center">

          <p className="text-purple-400 font-semibold tracking-[2.5px] text-sm">
            <span className="bg-purple-950/45 py-1 px-2.5 rounded">CURRENTLY LEARNING</span>
          </p>

          <h2 className="mt-3 text-3xl font-bold"> Always Improving My Skills </h2>

          <p className="mt-4 text-zinc-400 max-w-xl mx-auto"> I believe in continuous learning and always try to explore new technologies. </p>

        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"> Node.js </span>

          <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"> TypeScript </span>

          <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"> Next.js </span>

          <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"> MongoDB </span>

        </div>

      </div>

    </section>

  );

};

export default Skill;
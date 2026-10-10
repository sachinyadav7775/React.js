import { FaXTwitter } from "react-icons/fa6";
import { PiHeartFill } from "react-icons/pi";
import { LuArrowUp, LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md">

      {/* MAIN FOOTER */}
      <div className="px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>

            <h2 className="text-2xl font-bold flex items-center">
              <span className="bg-gradient-to-b from-purple-400 via-purple-600 to-blue-500 bg-clip-text text-transparent">Sachin</span>
              <span className="text-purple-500">.</span> 
            </h2>
    
            <p className="mt-4 text-zinc-400 leading-7 max-w-sm">
              A passionate web developer focused on creating modern, responsive, and user-friendly digital experiences.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/sachinyadav7775"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 transition-all"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/sachinyadavsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 transition-all"
              >
                <FaLinkedinIn className="text-lg" />
              </a>

              <a
                href="https://x.com/home"               
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 transition-all"
              >
                <FaXTwitter className="text-lg" />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold"> Quick Links </h3>

            <div className="flex flex-col gap-3 mt-5">

              <a href="/" className="text-zinc-400 hover:text-purple-400 transition"> Home </a>

              <a href="/about" className="text-zinc-400 hover:text-purple-400 transition"> About </a>

              <a href="/skill" className="text-zinc-400 hover:text-purple-400 transition" > Skills </a>

              <a href="/project" className="text-zinc-400 hover:text-purple-400 transition"> Projects </a>

              <a href="/contact" className="text-zinc-400 hover:text-purple-400 transition"> Contact </a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold"> Get In Touch </h3>

            <p className="mt-5 text-zinc-400"> Have a project in mind? <br /> Let's work together. </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center gap-3 mt-5 text-zinc-300 hover:text-purple-400 transition"
            >
              <LuMail />
              yourmail@gmail.com
            </a>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm text-center"> &copy; 2026 Sachin. All Rights Reserved. </p>

          <p className="text-zinc-500 text-sm flex items-center">
            <span className="mr-1 text-red-600 text-xl"><PiHeartFill /></span>
            Built with <span className="text-purple-400">React</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>

          {/* BACK TO TOP */}
          <button
            title="Back to top"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-purple-700 hover:bg-purple-800 flex items-center justify-center transition-all"
          >
            <LuArrowUp />
          </button>

        </div>

      </div>

    </footer>

  );

};

export default Footer;
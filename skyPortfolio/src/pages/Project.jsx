import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Project = () => {

    const projects = [

        {
            title: "Projects Website",
            description:
                "A modern and responsive project website with a clean layout and user-friendly interface.",
            technologies: ["HTML", "CSS", "JavaScript"],
            image:
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80",
            github: "#",
            live: "https://projectsksky.netlify.app/",
        },

        {
            title: "Website Animation",
            description:
                "A creative animated website featuring smooth animations and interactive visual effects.",
            technologies: ["HTML", "CSS", "JavaScript"],
            image:
                "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80",
            github: "#",
            live: "https://websiteanimationsky.netlify.app/",
        },

        {
            title: "Sky Real Estate",
            description:
                "A modern real estate website with a clean interface for showcasing properties and real estate services.",
            technologies: ["HTML", "CSS", "JavaScript"],
            image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
            github: "#",
            live: "https://sky-realestates.netlify.app/",
        },

    ];

    return (

        <section className="min-h-[90vh] w-full px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60 py-20">

            {/* ================= HEADER ================= */}

            <div className="text-center">

                <p className="text-purple-400 font-semibold tracking-[4px] text-sm">
                FEATURED PROJECTS
                </p>

                <h1 className="mt-3 text-3xl md:text-5xl font-bold">
                Things I've Built
                </h1>

                <p className="mt-5 max-w-2xl mx-auto text-zinc-400 text-lg leading-7">
                Here are some of the projects I've worked on. Each project
                represents my passion for creating modern and user-friendly
                digital experiences.
                </p>

            </div>


            {/* ================= PROJECT CARDS ================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

                {projects.map((project) => (

                <div
                    key={project.title}
                    className="
                    group
                    overflow-hidden
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    hover:border-purple-500/50
                    hover:bg-white/[0.07]
                    transition-all
                    duration-300
                    "
                >

                    {/* ================= IMAGE ================= */}

                    <div className="relative h-52 overflow-hidden">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-110
                        transition-transform
                        duration-500
                        "
                    />

                    <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                    " />

                    </div>


                    {/* ================= CONTENT ================= */}

                    <div className="p-6">

                    <h2 className="
                        text-xl
                        font-bold
                        group-hover:text-purple-400
                        transition
                    ">
                        {project.title}
                    </h2>


                    <p className="
                        mt-3
                        text-sm
                        text-zinc-400
                        leading-6
                    ">
                        {project.description}
                    </p>


                    {/* ================= TECHNOLOGIES ================= */}

                    <div className="flex flex-wrap gap-2 mt-5">

                        {project.technologies.map((technology) => (

                        <span
                            key={technology}
                            className="
                            px-3
                            py-1
                            text-xs
                            rounded-full
                            bg-purple-500/10
                            border
                            border-purple-500/20
                            text-purple-300
                            "
                        >
                            {technology}
                        </span>

                        ))}

                    </div>


                    {/* ================= BUTTONS ================= */}

                    <div className="flex items-center gap-3 mt-6">

                        {/* GitHub */}

                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            flex-1
                            py-2.5
                            rounded-lg
                            border
                            border-zinc-700
                            hover:border-purple-500
                            hover:bg-purple-500/10
                            transition-all
                        "
                        >
                        <FaGithub />

                        GitHub
                        </a>


                        {/* Live Demo */}

                        <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            flex-1
                            py-2.5
                            rounded-lg
                            bg-purple-700
                            hover:bg-purple-800
                            transition-all
                        "
                        >
                        Live Demo

                        <FaExternalLinkAlt className="text-sm" />

                        </a>

                    </div>

                    </div>

                </div>

                ))}

            </div>


            {/* ================= BOTTOM BUTTON ================= */}

            <div className="flex justify-center mt-12">

                <a
                href="https://projectsksky.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    flex
                    items-center
                    gap-3
                    border
                    border-zinc-600
                    hover:border-purple-500
                    hover:bg-purple-500/10
                    px-6
                    py-3
                    rounded-lg
                    font-semibold
                    transition-all
                "
                >
                View All Projects

                <FiArrowUpRight className="text-xl" />

                </a>

            </div>

        </section>
        
    );

};

export default Project;
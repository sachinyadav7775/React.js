import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGithub,
    FaGitAlt,
    FaNodeJs
} from 'react-icons/fa'
import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiVite
} from 'react-icons/si'

const skillGroups = [
    {
        title: 'Frontend Development',
        description: 'Building modern and responsive user interfaces.',
        skills: [
            { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 90 },
            { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400', level: 85 },
            { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', level: 75 },
            { name: 'React.js', icon: FaReact, color: 'text-cyan-400', level: 75 },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300', level: 85 },
        ],
    },
    {
        title: 'Tools & Technologies',
        description: 'Tools I use to build and manage projects.',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', level: 70 },
            { name: 'GitHub', icon: FaGithub, color: 'text-white', level: 75 },
            { name: 'Vite', icon: SiVite, color: 'text-purple-400', level: 75 },
            { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: 50 },
            { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', level: 45 },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 45 },
        ],
    },
]

const Skills = () => {

    return (

        <section
            id="skills"
            className="relative min-h-screen overflow-hidden px-6 py-20 text-white sm:px-10 lg:px-20 xl:px-32"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-16 text-center">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400"> What I Know </p>

                    <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                        My <span className="text-green-400">Skills.</span>
                    </h1>

                    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-400" />

                    <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
                        Technologies and tools I use to transform ideas into responsive, interactive, and engaging web experiences.
                    </p>

                </div>

                {/* Skill Groups */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {skillGroups.map((group) => (

                        <div
                            key={group.title}
                            className="rounded-3xl border border-white/10 bg-[#0d120f]/90 p-6 transition duration-300 hover:border-green-400/30 sm:p-8"
                        >
                            <h2 className="text-2xl font-bold"> {group.title} </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-400"> {group.description} </p>

                            <div className="mt-8 space-y-7">

                                {group.skills.map((skill) => {

                                    const Icon = skill.icon

                                    return (

                                        <div key={skill.name}>

                                            <div className="mb-3 flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <Icon className={`text-2xl ${skill.color}`} />
                                                    <span className="font-medium text-gray-200"> {skill.name} </span>
                                                </div>
                                                <span className="text-sm text-green-400"> {skill.level}% </span>
                                            </div>

                                            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                                <div
                                                    style={{
                                                        width: `${skill.level}%`
                                                    }}
                                                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-300 transition-all duration-1000"
                                                />
                                            </div>

                                        </div>

                                    )

                                })}

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom Highlight Cards */}
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">

                    <div className="rounded-2xl border border-white/10 bg-[#0d120f]/80 p-6 text-center transition hover:border-green-400/40">
                        <h3 className="text-lg font-bold text-green-400"> Responsive Design </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            Websites that adapt to mobile, tablet, and desktop screens.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0d120f]/80 p-6 text-center transition hover:border-green-400/40">
                        <h3 className="text-lg font-bold text-green-400"> Clean Code </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            Readable and maintainable code with a focus on quality.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0d120f]/80 p-6 text-center transition hover:border-green-400/40">
                        <h3 className="text-lg font-bold text-green-400"> Continuous Learning </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            Always exploring new technologies and improving my skills.
                        </p>
                    </div>

                </div>

            </div>

        </section>

    )

}

export default Skills
import { FaGithub } from "react-icons/fa6";
import { HiSignal } from "react-icons/hi2";

const Projects = () => {

    const projects = [
        {
            title: 'JukeBox',
            description: 'A social music review platform',
            image: '/assets/images/JukeBox.png',
            link: 'https://github.com/not-finley/JukeBox',
            active: 'https://juke-box-zeta.vercel.app/',
            alt: 'Jukebox website',
            isActive: true,
        },
        {
            title: 'Ray Tracer',
            description: 'A C++ ray tracer',
            image: '/assets/images/raytracer.png',
            link: 'https://github.com/not-finley/Raytracer',
            alt: 'Ray traced image',
            active: '',
            isActive: false,
        },
        {
            title: 'Portfolio',
            description: 'My personal Portfolio',
            image: '/assets/images/Portfolio.png',
            link: 'https://github.com/not-finley/portfolio',
            alt: 'Portfolio homepage',
            active: 'https://finleyharrison.ca/',
            isActive: true,
        },
        {
            title: 'Quartile Solver',
            description: 'A simple javascript solver for the Apple News Quartile game',
            image: '/assets/images/QuartileSolver.png',
            link: 'https://github.com/not-finley/QuartileSolver',
            alt: 'Quartile Solver',
            active: 'https://quartile-solver-beige.vercel.app/',
            isActive: true,
        },
        {
            title: 'MIT 6.837 Assignments',
            description: 'A few assignments in the MIT introduction to raytracing course',
            image: '/assets/images/MIT.png',
            alt: '3d wine glass',
            link: 'https://github.com/not-finley/MIT_6.837',
            active: '',
            isActive: false,
        },
    ];
    return (
        <div id="projects" className="bg-blue-800 h-auto py-10 px-4">
            <div className="max-w-6xl mx-auto text-center mt-10 mb-10">
                <h1 className="text-4xl font-bold text-white m-10">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform"
                        >
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 text-center flex-col justify-normal content-center">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600">{project.description}</p>
                                <div className="flex gap-7 justify-center text-center ">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline mt-2 block"
                                    >
                                        <FaGithub className='size-10' />
                                    </a>
                                    <a
                                        href={project.active}
                                        target="_blank"
                                        className={`text-blue-400 underline mt-2 block ${project.isActive?'block':'hidden'}`}
                                    >
                                        <HiSignal className='size-10' />
                                    </a>
                                </div>
                                
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects

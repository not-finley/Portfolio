import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { HiSignal } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define the type for the project object
interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    active?: string;
    alt: string;
    isActive: boolean;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
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
            title: 'Quartile Solver',
            description: 'A simple javascript solver for the Apple News Quartile game',
            image: '/assets/images/QuartileSolver.png',
            link: 'https://github.com/not-finley/QuartileSolver',
            alt: 'Quartile Solver',
            active: 'https://quartile-solver-beige.vercel.app/',
            isActive: true,
        },
        {
            title: 'Eularian Fluid Dynamics',
            description: 'A simple Java Script Eularian simulation',
            image: '/assets/images/Eularian.png',
            link: 'https://github.com/not-finley/MIT_6.837',
            alt: 'middle of hires Tunnel simulation',
            active: 'https://eularian-fluid-dynamics.vercel.app/',
            isActive: true,
        },
        {
            title: 'MIT 6.837 Assignments',
            description: 'A few assignments in the MIT introduction to raytracing course',
            image: '/assets/images/MIT.png',
            link: 'https://github.com/not-finley/MIT_6.837',
            alt: '3d wine glass',
            active: '',
            isActive: false,
        },
    ];

    return (
        <div id="projects" className="bg-blue-800 h-auto py-10 px-4">
            <div className="max-w-6xl mx-auto text-center mt-11 mb-10">
                <h1 className="text-4xl font-bold text-white m-10">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { ref, inView } = useInView({ triggerOnce: true,
        rootMargin: "-40% 0px",
        threshold: 0,});

    return (
        <motion.div
            ref={ref}
            className="bg-blue-900 rounded-lg overflow-hidden shadow-xl hover:bg-blue-800"
            initial={{ opacity: 0, y:100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center flex-col justify-normal content-center">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex gap-7 justify-center text-center">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline mt-2 block"
                    >
                        <FaGithub className="size-10" />
                    </a>
                    {project.isActive && (
                        <a
                            href={project.active}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline mt-2 block"
                        >
                            <HiSignal className="size-10" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;

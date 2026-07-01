import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { HiSignal } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    active?: string;
    alt: string;
    isActive: boolean;
    tags: string[];
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: 'JukeBoxd',
            description: 'A social music review platform built with TypeScript, leveraging real-time data states.',
            image: '/assets/images/Jukeboxd.png',
            link: 'https://github.com/not-finley/JukeBox',
            active: 'https://jukeboxd.ca',
            alt: 'Jukeboxd website',
            isActive: true,
            tags: ["React", "TypeScript", "Supabase", "Tailwind"]
        },
        {
            title: 'Guillotine',
            description: 'A web-based multiplayer version of the classic strategic card game Guillotine.',
            image: '/assets/images/Guillotine.png',
            link: 'https://github.com/not-finley/Guillotine',
            active: 'https://guillotine.vercel.app/',
            alt: 'Guillotine website',
            isActive: true,
            tags: ["React", "Websockets", "TypeScript", "Tailwind"]
        },
        {
            title: 'Ray Tracer',
            description: 'A performant C++ core ray tracer showcasing robust 3D math frameworks.',
            image: '/assets/images/raytracer.png',
            link: 'https://github.com/not-finley/Raytracer',
            alt: 'Ray traced image',
            active: '',
            isActive: false,
            tags: ["C++", "OOP", "3D Graphics"]
        },
        {
            title: 'Quartile Solver',
            description: 'An optimized algorithmic solver designed to play Apple News Quartiles efficiently.',
            image: '/assets/images/QuartileSolver.png',
            link: 'https://github.com/not-finley/QuartileSolver',
            alt: 'Quartile Solver',
            active: 'https://quartile-solver-beige.vercel.app/',
            isActive: true,
            tags: ["JavaScript", "HTML/CSS", "Backtracking"]
        },
        {
            title: 'Chaos Attractors',
            description: 'A web-based GPU chaos attractor rendering millions of mathematical particles in real-time.',
            image: '/assets/images/Attractor.png',
            link: 'https://github.com/not-finley/ChaosAttractors',
            alt: 'Chaos Attractor',
            active: 'https://gpu-chaos-attractors.vercel.app/',
            isActive: true,
            tags: ["GPU", "Shaders", "JavaScript", "HTML/CSS"]
        },
        {
            title: 'Eularian Fluid Dynamics',
            description: 'A high-resolution stable fluids simulation running fully natively inside modern web engines.',
            image: '/assets/images/Eularian.png',
            link: 'https://github.com/not-finley/Eularian-Fluid-Dynamics',
            alt: 'middle of hires Tunnel simulation',
            active: 'https://eularian-fluid-dynamics.vercel.app/',
            isActive: true,
            tags: ["JavaScript", "HTML/CSS"]
        }
    ];

    return (
        <div id="projects" className="bg-blue-900 h-auto py-16 px-4">
            <div className="max-w-6xl mx-auto mt-11 mb-10">
                <h1 className="text-4xl font-bold text-white text-center m-10 tracking-tight">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    const { ref, inView } = useInView({ 
        triggerOnce: true,
        rootMargin: "-20% 0px",
        threshold: 0,
    });

    const primaryLink = project.isActive ? project.active : project.link;

    return (
        <motion.div
            ref={ref}
            whileHover={{ 
                y: -6,
                rotateX: 3,
                rotateY: -3,
                borderColor: "rgba(59, 130, 246, 0.2)" // Handles the hover border cleanly with Framer instead of CSS
            }}
            style={{ perspective: "1000px" }}
            /* REMOVED transition-all and duration-300 from class string below */
            className="group flex flex-col justify-between bg-slate-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 150, damping: 20 }} // Changed to a snappy spring transition to reduce delay sluggishness
        >
            <div>
                <div className="relative overflow-hidden h-48 bg-slate-950">
                    <img 
                        src={project.image} 
                        alt={project.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6">
                    <div className="mb-2">
                        <a 
                            href={primaryLink}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight inline-flex items-center gap-1.5 group/link"
                        >
                            {project.title}
                            <span className="text-slate-500 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 transition-all text-xl font-normal">→</span>
                        </a>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-sm md:text-[15px] mb-5">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                            <span 
                                key={idx} 
                                className="text-[11px] md:text-xs font-medium font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-400/30 tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center gap-4 border-t border-white/[0.02]">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit GitHub repository for ${project.title}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono"
                >
                    <FaGithub className="size-5" /> Code base
                </a>
                
                {project.isActive && (
                    <a
                        href={project.active}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live demo of ${project.title}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 text-sm font-mono ml-auto"
                    >
                        <HiSignal className="size-4 animate-pulse" /> Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default Projects;
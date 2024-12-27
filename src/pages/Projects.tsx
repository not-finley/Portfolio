const Projects = () => {

    const projects = [
        {
            title: 'JukeBox',
            description: 'A social music review platform',
            image: '/assets/images/JukeBox.png',
            link: 'https://github.com/not-finley/JukeBox',
            active: 'https://juke-box-zeta.vercel.app/'
        },
        {
            title: 'Ray Tracer',
            description: 'A C++ ray tracer',
            image: '/assets/images/raytracer.png',
            link: 'https://github.com/not-finley/Raytracer',
            active: ''
        },
    ];
    return (
        <div id="projects" className="bg-gray-100 min-h-screen py-10 px-4 margin-">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-110 transition-transform"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary underline mt-2 block"
                                >
                                    View Project
                                </a>
                                <a
                                    href={project.active}
                                    target="_blank"
                                    className="text-primary underline mt-2 block"
                                >
                                    Live
                                </a>
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects

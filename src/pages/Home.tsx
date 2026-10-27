import './Styles/home.css'
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; 
import logo from '/FinleyLogo.svg';

const Home = () => {
    // Set up motion coordinates to track cursor position over the logo
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Map mouse coordinates to subtle rotation angles (-15 to 15 degrees)
    const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
    const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        // Calculate dynamic relative coordinates from the center of the image bounds
        const centerX = e.clientX - rect.left - width / 2;
        const centerY = e.clientY - rect.top - height / 2;
        
        mouseX.set(centerX);
        mouseY.set(centerY);
    };

    const handleMouseLeave = () => {
        // Smoothly snap back to dead-center alignment when cursor exits bounds
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `/finley's-resume.pdf`;
        link.download = "finley's_Resume.pdf"; 
        link.click();
    };

    const buttonVariants = {
        hover: { scale: 1.03, y: -2, transition: { type: "spring", stiffness: 400, damping: 10 } },
        tap: { scale: 0.98 }
    };

    return (
        <div id="home" className="home min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 px-6 py-12">
            {/* Ambient Background Glow Nodes */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12 z-10">
                
                {/* Hero Logo / 3D Interactive Section */}
                <div className="w-full lg:w-1/2 flex justify-center" style={{ perspective: "1000px" }}>
                    <motion.div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="w-2/3 max-w-sm lg:max-w-md flex justify-center cursor-grab active:cursor-grabbing"
                        
                        // Combined Entry Drop + Idle Float loop mechanics
                        initial={{ opacity: 0, y: -60, rotate: -10, scale: 0.8 }}
                        animate={{ 
                            opacity: 1, 
                            y: [0, -12, 0], // Smooth mechanical bouncing float cycle
                            rotate: 0,
                            scale: 1
                        }}
                        transition={{
                            // Entry configuration details
                            opacity: { duration: 0.6 },
                            scale: { type: "spring", stiffness: 100, damping: 15 },
                            // Idle loop float controls (runs indefinitely after loading)
                            y: {
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut",
                                delay: 0.8 // Starts floating right after landing animation completes
                            }
                        }}
                    >
                        <motion.img
                            src={logo}
                            alt="Finley Logo"
                            className='w-full h-auto drop-shadow-[0_0_40px_rgba(99,102,241,0.25)] select-none pointer-events-none'
                            style={{ transform: "translateZ(40px)" }} // Pushes logo layers upward for authentic parallax tracking
                        />
                    </motion.div>
                </div>

                {/* Hero Text & Actions Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-none">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400">Finley</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                        className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        A passionate Software Developer based in Waterloo, Ontario. I love building creative solutions and bringing complex ideas to life.
                    </motion.p>
                    
                    {/* Unified Actions Wrapper */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        {/* Primary Button */}
                        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="w-full sm:w-auto">
                            <ScrollLink 
                                href='#projects' 
                                to="projects"
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                className="inline-flex items-center justify-center w-full sm:w-auto bg-indigo-600 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:text-white transition-colors cursor-pointer text-center"
                            >
                                Check Out My Work
                            </ScrollLink>
                        </motion.div>

                        {/* Secondary Button */}
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={handleDownload} 
                            className="inline-flex items-center justify-center w-full sm:w-auto bg-indigo-800 text-slate-100 font-medium px-8 py-3.5 rounded-xl shadow-md hover:bg-indigo-500 transition-colors"
                        >
                            Download Resume
                        </motion.button>

                        {/* Outline Button */}
                        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="w-full sm:w-auto">
                            <RouterLink 
                                to="/gallery"
                                className="inline-flex items-center justify-center w-full sm:w-auto border border-slate-700 bg-slate-900/50 text-slate-300 font-medium px-8 py-3.5 rounded-xl hover:text-white hover:border-slate-500 hover:bg-slate-800/60 transition-all backdrop-blur-sm text-center"
                            >
                                View Gallery
                            </RouterLink>
                        </motion.div>
                    </motion.div>
                </div>

            </div>      
        </div>
    )
}

export default Home;
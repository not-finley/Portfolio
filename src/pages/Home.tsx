import './Styles/home.css'
import { motion } from "framer-motion" // Note: Updated to standard "framer-motion" package import
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; 
import logo from '/FinleyLogo.svg';

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `/finley's-resume.pdf`;
        link.download = "finley's_Resume.pdf"; 
        link.click();
    };

    const buttonVariants = {
        hover: { scale: 1.03, y: -2, transition: { duration: 0.2 } },
        tap: { scale: 0.98 }
    };

    return (
        <div id="home" className="home min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 px-6 py-12">
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12 z-10">
                
                {/* Hero Logo / Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src={logo}
                        alt="Finley Logo"
                        className='w-2/3 max-w-sm lg:max-w-md drop-shadow-[0_0_35px_rgba(99,102,241,0.15)]'
                    />
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
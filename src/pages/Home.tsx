import './Styles/home.css'
import { motion } from "motion/react"
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

    return (
        <div id="home" className="home">
            <div className="container place-content-center mt-10">
                <motion.img
                    initial={{ x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    src={logo}
                    alt="logo"
                    className='w-1/2 max-w-96 lg:max-w-lg'
                />
                <div>
                    <motion.h1 
                        initial={{ y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'backInOut' }}
                        className="text-5xl font-bold text-white mb-4"
                    >
                        Hi, I'm Finley
                    </motion.h1>
                    <motion.p
                        initial={{ y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3, ease: 'backInOut' }}
                        className="text-lg text-gray-300 mb-8 max-w-lg"
                    >
                        A passionate Software Developer based in Waterloo, Ontario. I love building creative solutions and bringing ideas to life.
                    </motion.p>
                    
                    {/* Centered actions wrapper supporting multi-button horizontal flex spacing */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: .4, duration: .75, ease: 'backOut' }} 
                        >
                            <ScrollLink 
                                href='#projects' 
                                to="projects"
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 cursor-pointer"
                            >
                                Check Out My Work
                            </ScrollLink>
                        </motion.div>

                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: .5, duration: .75, ease: 'backOut' }} 
                            onClick={handleDownload} 
                            className="inline-flex items-center justify-center bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400"
                        >
                            Download Resume
                        </motion.button>

                        {/* Interactive Gallery Router link node element block */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: .6, duration: .75, ease: 'backOut' }} 
                        >
                            <RouterLink 
                                to="/gallery"
                                className="inline-flex items-center justify-center border-2 border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:border-white/40 transition-colors backdrop-blur-sm"
                            >
                                View Gallery
                            </RouterLink>
                        </motion.div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home;
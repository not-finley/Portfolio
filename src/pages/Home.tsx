import './Styles/home.css'
import { motion } from "motion/react"
import { Link } from 'react-scroll';
import logo from '/FinleyLogo.svg';

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `/Resume.pdf`;
        link.download = "finley's_Resume.pdf"; 
        link.click();
    };

    return (
        <div
        id="home" className="home">
            <div className="container place-content-center mt-10">
                <motion.img
                    initial={{
                        opacity: 0,
                        x: -40
                    }}
                    animate={{ 
                        opacity: 100,
                        x: 0
                    }}
                    transition={{
                        delay: .5,
                        duration: 1,
                        ease: "backInOut"
                    }}
                    src={logo}
                    alt="logo"
                    className='w-1/2 max-w-96 lg:max-w-lg'
                />
                <div>
                    <motion.h1 
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{ 
                        opacity: 100,
                        y: 0
                    }}
                    transition={{
                        delay: .1,
                        duration: .75,
                        ease: 'backInOut'
                    }}
                    className="text-5xl font-bold text-white mb-4"
                    >
                        Hi, I'm Finley
                    </motion.h1>
                    <motion.p
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{ 
                        opacity: 100,
                        y: 0
                    }}
                    transition={{
                        delay: .7,
                        duration: .75,
                        ease: 'backInOut'
                    }}
                    className="text-lg text-gray-300 mb-8 max-w-lg"
                    >
                        A passionate Software Developer based in Waterloo, Ontario. I love building creative solutions and bringing ideas to life.
                    </motion.p>
                    <div className="space-x-4 flex items-center justify-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40
                            }}
                            animate={{ 
                                opacity: 100,
                                y: 0
                            }}
                            transition={{
                                delay: .9,
                                duration: .75,
                                ease: 'backInOut'
                            }} 
                        >
                            <Link 
                                href='#projects' 
                                to="projects"
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white"
                            >
                                Checkout My Work
                            </Link>
                        </motion.div>
                        <motion.button
                            initial={{
                                opacity: 0,
                                y: 40
                            }}
                            animate={{ 
                                opacity: 100,
                                y: 0
                            }}
                            transition={{
                                delay: .9,
                                duration: .75,
                                ease: 'backInOut'
                            }} 
                            onClick={handleDownload} 
                            className="inline-flex items-center justify-center bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-white"
                        >
                            Download Resume
                        </motion.button>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home
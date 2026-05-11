import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react";
import { Link } from 'react-scroll';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start({
                opacity: 1, // Fixed scale
                y: 0
            })
        }
    }, [isInView, mainControls])

    return (
        <motion.div
            id="about" 
            className="content bg-blue-900 min-h-[50vh] py-20 px-4 items-center flex"
        >
            <div className="max-w-4xl mx-auto text-center mt-12 mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-bold text-gray-100 mb-6"
                >
                    About Me
                </motion.h1>

                <motion.p 
                    ref={ref} 
                    initial={{ opacity: 0, y: 50 }}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-300 text-lg px-4 md:px-8 mb-6 leading-relaxed"
                >
                    I’m a Computer Science student at the University of Waterloo. I love building software that lives at the intersection of math and design. Whether it's scaling a social platform like 
                    <Link to="projects" smooth={true} duration={500} className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors mx-1 font-medium underline underline-offset-4">Jukeboxd</Link> 
                    to hundreds of users  or optimizing a 
                    <Link to="projects" smooth={true} duration={500} className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors mx-1 font-medium underline underline-offset-4">C++ Ray Tracer</Link> 
                    for high-performance rendering, I thrive on solving complex technical challenges.
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-gray-300 text-lg px-4 md:px-8 leading-relaxed"
                >
                    When I’m not coding, I’m usually working in Blender or refining my home-lab setup. I’m always eager to collaborate and exchange ideas. Let’s connect and create something amazing together!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <Link 
                        to="contact"
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="cursor-pointer inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-400 transition-all mt-8 shadow-lg shadow-blue-500/20"
                    >
                        Let's Chat!
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;
import { motion, useAnimation, useInView } from "framer-motion" // Standard package import
import { useEffect, useRef } from "react";
import { Link } from 'react-scroll';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start({ opacity: 1, y: 0 });
        }
    }, [isInView, mainControls])

    return (
        <motion.div
            id="about" 
            className="content bg-slate-900 min-h-[60vh] py-24 px-6 items-center flex relative border-b border-slate-900/50"
        >
            
            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-bold text-white mb-8 tracking-tight"
                >
                    About Me
                </motion.h1>

                <motion.p 
                    ref={ref} 
                    initial={{ opacity: 0, y: 30 }}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-300 text-lg md:text-xl px-4 md:px-8 mb-6 leading-relaxed"
                >
                    I’m a Computer Science student at the University of Waterloo. I love building software that lives at the intersection of math and design. Whether it's scaling a social platform like 
                    <Link to="projects" smooth={true} duration={500} className="text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors mx-1 font-medium underline underline-offset-4 decoration-indigo-500/30">Jukeboxd</Link> 
                    to hundreds of users or optimizing a 
                    <Link to="projects" smooth={true} duration={500} className="text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors mx-1 font-medium underline underline-offset-4 decoration-indigo-500/30">C++ Ray Tracer</Link> 
                    for high-performance rendering, I thrive on solving complex technical challenges.
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-slate-300 text-lg md:text-xl px-4 md:px-8 leading-relaxed"
                >
                    When I’m not coding, I’m usually working in Blender or refining my home-lab setup. I’m always eager to collaborate and exchange ideas. Let’s connect and create something amazing together!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link 
                        to="contact"
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="cursor-pointer inline-flex items-center justify-center bg-indigo-600 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-indigo-500 hover:text-white transition-all mt-10 shadow-lg shadow-indigo-600/20 active:scale-95"
                    >
                        Let's Chat!
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;
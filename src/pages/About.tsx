import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import { Link } from 'react-scroll';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const mainControls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    // Secondary tracking ref for the interactive mouse background spotlight

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Dynamically shift CSS custom variables to update the gradient spotlight center point
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    // Stagger container setup for the title text character ripple sequence
    const titleContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.1 }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 15, scale: 0.8 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 12 } 
        }
    };

    // Text block fade variant configurations
    const paragraphVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
        })
    };

    return (
        <div
            id="about" 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="group/about bg-slate-900 min-h-[60vh] py-24 px-6 items-center flex relative border-b border-slate-950 overflow-hidden"
        >
            {/* Dynamic Interactive Background Spotlight Element */}
            <div 
    className="absolute inset-0 opacity-0 group-hover/about:opacity-100 transition-opacity duration-500 pointer-events-none"
    style={{
        background: `radial-gradient(
            350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), 
            rgba(99, 102, 241, 0.2) 0%, 
            rgba(168, 85, 247, 0.08) 45%, 
            transparent 80%
        )`
    }}
/>
            
            <div ref={ref} className="max-w-4xl mx-auto text-center z-10 w-full">
                {/* Rolling Word / Character Stagger Animation */}
                <motion.h1
                    variants={titleContainerVariants}
                    initial="hidden"
                    animate={mainControls}
                    className="text-4xl font-bold text-white mb-8 tracking-tight flex justify-center overflow-hidden py-1"
                >
                    {"About Me".split("").map((char, idx) => (
                        <motion.span
                            key={idx}
                            variants={letterVariants}
                            style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p 
                    custom={0.2}
                    variants={paragraphVariants}
                    initial="hidden"
                    animate={mainControls}
                    className="text-slate-300 text-lg md:text-xl px-4 md:px-8 mb-6 leading-relaxed"
                >
                    I’m a Computer Science student at the University of Waterloo. I love building software that lives at the intersection of math and design. Whether it's scaling a social platform like 
                    <Link to="projects" smooth={true} duration={500} className="text-indigo-400 cursor-pointer hover:text-indigo-300 transition-all mx-1 font-medium underline underline-offset-4 decoration-indigo-500/30 hover:decoration-indigo-400">Jukeboxd</Link> 
                    to hundreds of users or optimizing a 
                    <Link to="projects" smooth={true} duration={500} className="text-indigo-400 cursor-pointer hover:text-indigo-300 transition-all mx-1 font-medium underline underline-offset-4 decoration-indigo-500/30 hover:decoration-indigo-400">C++ Ray Tracer</Link> 
                    for high-performance rendering, I thrive on solving complex technical challenges.
                </motion.p>

                <motion.p 
                    custom={0.35}
                    variants={paragraphVariants}
                    initial="hidden"
                    animate={mainControls}
                    className="text-slate-300 text-lg md:text-xl px-4 md:px-8 leading-relaxed"
                >
                    When I’m not coding, I’m usually working in Blender or refining my home-lab setup. I’m always eager to collaborate and exchange ideas. Let’s connect and create something amazing together!
                </motion.p>

                <motion.div
                    custom={0.5}
                    variants={paragraphVariants}
                    initial="hidden"
                    animate={mainControls}
                >
                    <motion.div
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                        className="inline-block"
                    >
                        <Link 
                            to="contact"
                            spy={true} 
                            smooth={true} 
                            duration={500}
                            className="cursor-pointer inline-flex items-center justify-center bg-indigo-600 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-indigo-500 hover:text-white transition-all mt-10 shadow-lg shadow-indigo-600/20"
                        >
                            Let's Chat!
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
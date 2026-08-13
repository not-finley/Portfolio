import { motion, useAnimation, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-scroll';

import MyHeadshot from '/assets/images/about_headshot.jpg';
import logo from '/FinleyLogo.svg';

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });
    const mainControls = useAnimation();
    const shouldReduceMotion = useReducedMotion();
    
    const imageRef = useRef<HTMLDivElement>(null);
    const [isSpotlightCentered, setIsSpotlightCentered] = useState(false);

    // Track scroll progress through the section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"]
    });

    // Sleek architectural slide transforms
    const leftCurtainX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const rightCurtainX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
        sectionRef.current.style.setProperty("--mouse-y", `${y}px`);

        if (imageRef.current) {
            const imgRect = imageRef.current.getBoundingClientRect();
            const imgCenterX = (imgRect.left + imgRect.width / 2) - rect.left;
            const imgCenterY = (imgRect.top + imgRect.height / 2) - rect.top;

            const distance = Math.hypot(x - imgCenterX, y - imgCenterY);
            const CENTER_THRESHOLD = 30; 
            setIsSpotlightCentered(distance < CENTER_THRESHOLD);
        }
    };

    const handleMouseLeave = () => {
        setIsSpotlightCentered(false);
    };

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
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group/about bg-slate-900 min-h-[70vh] py-24 px-6 items-center flex relative border-b border-slate-950 overflow-hidden"
        >
            {/* ==================== REFINED REVEAL PANELS ==================== */}
            {!shouldReduceMotion && (
                <div className="hidden md:block pointer-events-none">
                    {/* Left Panel */}
                    <motion.div
                        style={{ x: leftCurtainX }}
                        className="absolute top-0 left-0 w-1/2 h-full z-30 bg-slate-950 border-r border-indigo-500/20 shadow-[20px_0_50px_rgba(2,6,23,0.9)]"
                    >
                        {/* Center Seam Light Line */}
                        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-indigo-500/0 via-indigo-500 to-purple-500/0 opacity-70 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                    </motion.div>

                    {/* Right Panel */}
                    <motion.div
                        style={{ x: rightCurtainX }}
                        className="absolute top-0 right-0 w-1/2 h-full z-30 bg-slate-950 border-l border-indigo-500/20 shadow-[-20px_0_50px_rgba(2,6,23,0.9)]"
                    >
                        {/* Center Seam Light Line */}
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-indigo-500/0 via-indigo-500 to-purple-500/0 opacity-70 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                    </motion.div>
                </div>
            )}
            {/* ============================================================= */}

            {/* Dynamic Interactive Background Spotlight */}
            <div 
                className="absolute inset-0 opacity-0 group-hover/about:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: isSpotlightCentered 
                        ? `radial-gradient(
                            500px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), 
                            rgba(129, 140, 248, 0.35) 0%, 
                            rgba(192, 132, 252, 0.18) 50%, 
                            transparent 80%
                        )`
                        : `radial-gradient(
                            450px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), 
                            rgba(99, 102, 241, 0.15) 0%, 
                            rgba(168, 85, 247, 0.06) 45%, 
                            transparent 80%
                        )`
                }}
            />
            
            <div ref={contentRef} className="max-w-6xl mx-auto z-10 w-full grid md:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-center">
                
                {/* Text Content Column */}
                <div className="text-center md:text-left">
                    <motion.h1
                        variants={titleContainerVariants}
                        initial="hidden"
                        animate={mainControls}
                        className="text-4xl font-bold text-white mb-8 tracking-tight flex justify-center md:justify-start overflow-hidden py-1"
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
                        className="text-slate-300 text-lg md:text-xl mb-6 leading-relaxed"
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
                        className="text-slate-300 text-lg md:text-xl leading-relaxed"
                    >
                        When I’m not coding, I’m usually taking photos or refining my home-lab setup. I’m always eager to collaborate and exchange ideas. Let’s connect and create something amazing together!
                    </motion.p>

                    <motion.div
                        custom={0.5}
                        variants={paragraphVariants}
                        initial="hidden"
                        animate={mainControls}
                        className="mt-10"
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
                                className="cursor-pointer inline-flex items-center justify-center bg-indigo-600 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-lg shadow-indigo-600/20"
                            >
                                Let's Chat!
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 3D Flip Card Image Container */}
                <motion.div
                    custom={0.6} 
                    variants={paragraphVariants}
                    initial="hidden"
                    animate={mainControls}
                    className="flex justify-center md:justify-end order-first md:order-last mb-12 md:mb-0 relative"
                    style={{ perspective: "1000px" }} 
                >
                    {/* Flipping 3D Card Inner */}
                    <motion.div
                        ref={imageRef}
                        animate={{
                            rotateY: isSpotlightCentered ? 180 : 0,
                            scale: isSpotlightCentered ? 1.08 : 1,
                        }}
                        whileHover={{ 
                            scale: isSpotlightCentered ? 1.08 : 1.04, 
                            y: -4 
                        }}
                        transition={{ 
                            rotateY: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                            scale: { type: "spring", stiffness: 300, damping: 15 },
                            y: { type: "spring", stiffness: 300, damping: 15 }
                        }}
                        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative rounded-full cursor-pointer"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* FRONT FACE: Headshot */}
                        <div 
                            className={`absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 transition-all duration-300 ${
                                isSpotlightCentered 
                                    ? "border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.5)]" 
                                    : "border-slate-800 shadow-xl shadow-slate-950/30 hover:border-indigo-500/80 hover:shadow-indigo-500/20"
                            }`}
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            <img 
                                src={MyHeadshot} 
                                alt="Finley Harrison"
                                className="w-full h-full object-cover aspect-square"
                            />
                        </div>

                        {/* BACK FACE: Logo */}
                        <div 
                            className="absolute inset-0 w-full h-full rounded-full bg-slate-950 border-4 border-indigo-500 flex items-center justify-center p-8 shadow-[0_0_35px_rgba(99,102,241,0.4)]"
                            style={{ 
                                backfaceVisibility: "hidden", 
                                transform: "rotateY(180deg)" 
                            }}
                        >
                            <img 
                                src={logo} 
                                alt="Finley Logo"
                                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                            />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
}

export default About;
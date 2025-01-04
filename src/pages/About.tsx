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
                opacity: 100,
                y: 0
            })
        }
    }, [isInView])
    return (
        <motion.div
            id="about" className="content bg-blue-900 h-auto py-10 px-4 items-center flex">
            <div className="max-w-4xl mx-auto text-center justify-normal mt-12 mb-10">
                <motion.img
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    animate={mainControls}
                    transition={{duration: 0.5, delay: .1}}
                    src="FinleyLogo.svg"
                    alt="Profile"
                    className="w-32 h-32 mx-auto mb-6 z-5"
                />
                <motion.h1
                initial={{
                    opacity: 0,
                    y: 50
                }}
                animate={mainControls}
                transition={{duration: 0.5, delay: .5}}
                className="text-3xl font-bold text-grey-300 mb-4">About Me</motion.h1>
                <motion.p ref={ref} 
                initial={{
                    opacity: 0,
                    y: 50
                }}
                animate={mainControls}
                transition={{duration: 0.5, delay: 1}}
                className="text-gray-300 text-lg ml-7 mr-7 mb-5">
                    I’m a Computer Science student at the University of Waterloo, with a strong interest in problem-solving and the intersection of math and technology. Outside of academics, I’m passionate about 3D modeling and graphics, exploring how computational techniques can bring creative visions to life.
                </motion.p>
                <motion.p 
                initial={{
                    opacity: 0,
                    y: 50
                }}
                animate={mainControls}
                transition={{duration: 0.5, delay: 1.2}}
                className="text-gray-300 text-lg ml-7 mr-7">
                    I thrive on learning and collaboration, always eager to connect with others, exchange ideas, and take on new challenges. Whether it’s diving into a new project or brainstorming innovative solutions, I’m excited to contribute and grow. Let’s connect and create something amazing together!
                </motion.p>
                <motion.div
                initial={{
                    opacity: 0,
                    y: 50
                }}
                animate={mainControls}
                transition={{duration: 0.5, delay: 1.4}}>
                    <Link 
                        href='#contact' 
                        to="contact"
                        spy={true} 
                        smooth={true} 
                        duration={500}
                        className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white mt-5"
                    >
                        Lets Chat!
                    </Link>
                </motion.div>
                
            </div>
        </motion.div>
    );
}

export default About
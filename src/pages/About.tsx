import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        console.log(isInView)
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
            <div className="max-w-4xl mx-auto text-center justify-normal mt-10 mb-10">
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
                className="text-3xl font-bold text-grey-100 mb-4">About Me</motion.h1>
                <motion.p ref={ref} 
                initial={{
                    opacity: 0,
                    y: 50
                 }}
                animate={mainControls}
                transition={{duration: 0.5, delay: 1}}
                className="text-gray-300 text-lg">
                    I'm Finley, a student at University of Waterloo with experience in web development, problem solving, and communication.
                </motion.p>
            </div>
        </motion.div>
    );
}

export default About
import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react";

const PastExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
        mainControls.start({
            opacity: 100,
            x: 0,
            y: 0,
            scale: 1
        })
    }
  }, [isInView])  

  const experiences = [
    {
      // id: "bcs",
      title: "Full Stack Developer", 
      company: "BCS Automation ltd.", 
      duration: "May 2025 - Aug 2025", 
      description: "Developed and maintained web applications using React, ASP .NET, and Azure. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      // details:"Telemetry ingestion with EventHub + ADX. Integrated anomaly detection. Made an internal chatbot with Python + Ollama."
    },
    {
      title: "Service Desk Specialist",
      company: "University of Waterloo IST",
      duration: "May 2024 - Aug 2024",
      description: "Optimized IT support workflows, enhancing user experience and system efficiency through expert troubleshooting and technical assistance.",
      delay: 0.4
    },
    {
      title: "3D Generalist",
      company: "Nettwerk Music Group",
      duration: "Jan 2021 - Jan 2024",
      description: "Designed and animated high-quality 3D visuals for over 50 songs, leveraging Blender to create immersive music experiences.",
      delay: 1
    },
    {
      title: "Lifeguard/Swim Instructor",
      company: "City of Waterloo",
      duration: "Jun 2023 - Sep 2023",
      description: "Ensured public safety through vigilant lifeguarding and emergency response, while delivering personalized swim instruction to students of all ages and skill levels.",
      delay: 1.6
    },
];

  return (
    <div id="experience" className="flex flex-col items-center justify-center h-auto bg-blue-900">
      <motion.h1 
      initial={{
        y: -50
      }}
      animate={mainControls}
      transition={{duration: 0.5, delay: 0.1}}
      ref={ref} className="text-4xl text-center font-bold text-white mb-8 mt-24">Work Experience</motion.h1>
      <motion.div 
      initial={{
        y: 100
      }}
      animate={mainControls}
      transition={{duration: 0.5, delay: 0.1}}
      className=" max-w-2xl relative border-l border-gray-300 m-4">
        {experiences.map((exp, index) => (
          <div 
          key={index} className="mb-8 ml-6">
            <motion.div 
            initial={{
              opacity: 1,
              scale: 0
            }}
            animate={mainControls}
            transition={{duration: 0.5, delay: exp.delay}}
            className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border border-white"></motion.div>
            <motion.div 
              initial={{
                opacity: 0,
                y: 100
              }}
              animate={mainControls}
              transition={{duration: 0.5, delay: exp.delay}}
              className="p-4 bg-blue-800 shadow-md rounded-lg hover:bg-blue-900">
              <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-300">{exp.duration}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default PastExperience
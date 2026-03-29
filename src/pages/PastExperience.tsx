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
    {      title: "Software Developer Intern", 
      company: "Rocscience Inc.", 
      duration: "January 2026 - April 2026",
      description: "Developed and integrated core features for RSLog’s Laboratory Information Management System, building responsive ASP.NET-based interfaces and backend data pipelines to support sample tracking, test processing, automated reporting, and reliable geotechnical data validation in an Agile environment."
    },
    {
      title: "Full Stack Developer", 
      company: "BCS Automation ltd.", 
      duration: "May 2025 - Aug 2025", 
      description: "Developed and maintained web applications using React, ASP .NET, and Azure. Collaborated with cross-functional teams to deliver high-quality software solutions.",
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
        <div key={index} className="mb-12 ml-8 relative">
            <div className="absolute -left-[41px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]" />
            
            <motion.div 
                whileHover={{ x: 10 }}
                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors"
            >
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{exp.duration}</span>
                <h2 className="text-2xl font-bold text-white mt-1">{exp.title}</h2>
                <p className="text-blue-200/70 font-medium mb-3">{exp.company}</p>
                <p className="text-slate-400 leading-relaxed">{exp.description}</p>
            </motion.div>
        </div>
    ))}
      </motion.div>
    </div>
  );
}

export default PastExperience
import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react";

const PastExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
        mainControls.start({
            opacity: 1, // Corrected from 100 to 1 for standard opacity values
            x: 0,
            y: 0,
            scale: 1
        })
    }
  }, [isInView, mainControls])  

  const experiences = [
    {      
      title: "Software Engineer Intern", 
      company: "Rocscience Inc.", 
      url: "https://www.rocscience.com/",
      duration: "January 2026 - April 2026",
      // Updated with metrics from Resume [cite: 20, 21, 22]
      description: "Engineered an ASP.NET Core Audit Dashboard for system-critical log transactions and deployed batch cleanup processes that reduced database size by 30%. Optimized legacy C# methods to achieve 5x speedups in critical code paths."
    },
    {
      title: "Software Engineer Intern", 
      company: "BCS Automation ltd.", 
      url: "https://bcsautomation.ca/",
      duration: "May 2025 - Aug 2025", 
      // Updated with metrics from Resume [cite: 28, 30, 31]
      description: "Architected a real-time data pipeline using Azure EventHub to ingest 2GB/hr of telemetry data and implemented a RAG-based chatbot that reduced info retrieval time by 60%. Cut API response times from 3.2s to 120ms via Redis caching.",
    },
    {
      title: "Service Desk Specialist",
      company: "University of Waterloo IST",
      url: "https://uwaterloo.ca/information-systems-technology/",
      duration: "May 2024 - Aug 2024",
      // Updated with metrics from Resume [cite: 35, 36]
      description: "Spearheaded an AI chatbot that drove a 20% decrease in support requests and engineered automated Windows configuration scripts, saving the team over 3 hours of manual work weekly.",
      delay: 0.4
    },
    {
      title: "3D Generalist",
      company: "Nettwerk Music Group",
      url: "https://www.nettwerk.com/",
      duration: "Jan 2021 - Jan 2024",
      description: "Designed and animated high-quality 3D visuals for over 50 songs, leveraging Blender to create immersive music experiences.",
      delay: 1
    },
    {
      title: "Lifeguard/Swim Instructor",
      company: "City of Waterloo",
      url: "https://www.waterloo.ca/",
      duration: "Jun 2023 - Sep 2023",
      description: "Ensured public safety through vigilant lifeguarding and emergency response, while delivering personalized swim instruction to students of all ages and skill levels.",
      delay: 1.6
    },
];

  return (
    <div id="experience" className="flex flex-col items-center justify-center h-auto bg-blue-900 pb-24">
      <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      animate={mainControls}
      transition={{duration: 0.5, delay: 0.1}}
      ref={ref} className="text-4xl text-center font-bold text-white mb-8 mt-24">Work Experience</motion.h1>
      
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={mainControls}
      transition={{duration: 0.5, delay: 0.1}}
      className="max-w-2xl relative border-l border-gray-300/30 m-4">
      
      {experiences.map((exp, index) => (
        <div key={index} className="mb-12 ml-8 relative">
            <div className="absolute -left-[41px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]" />
            
            <motion.div 
                whileHover={{ x: 10 }}
                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors"
            >
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{exp.duration}</span>
                <h2 className="text-2xl font-bold text-white mt-1">{exp.title}</h2>
                
                {/* Updated Company Link */}
                <a 
                  href={exp.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block text-blue-200/70 font-medium mb-3 hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
                >
                  {exp.company}
                </a>
                
                <p className="text-slate-400 leading-relaxed">{exp.description}</p>
            </motion.div>
        </div>
    ))}
      </motion.div>
    </div>
  );
}

export default PastExperience;
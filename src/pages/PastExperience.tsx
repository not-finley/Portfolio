import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  title: string;
  company: string;
  url: string;
  domain: string;
  duration: string;
  description: string;
  tags: string[];
  isIncoming?: boolean; // Added flag to style future roles differently
}

const PastExperience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer Intern",
      company: "Carta",
      url: "https://carta.com/",
      domain: "carta.com",
      duration: "Fall 2026",
      description: "Incoming Software Engineer Intern for the Fall 2026 co-op term.",
      tags: ["FinTech", "Backend", "Full Stack"],
      isIncoming: true
    },
    {      
      title: "Software Engineer Intern", 
      company: "Rocscience Inc.", 
      url: "https://www.rocscience.com/",
      domain: "rocscience.com",
      duration: "Winter 2026",
      description: "Engineered an ASP.NET Core Audit Dashboard for system-critical log transactions and deployed batch cleanup processes that reduced database size by 30%. Optimized legacy C# methods to achieve 5x speedups in critical code paths.",
      tags: ["ASP.NET Core", "C#", "SQL Server", "Backend Dev"]
    },
    {
      title: "Software Engineer Intern", 
      company: "BCS Automation Ltd.", 
      url: "https://bcsautomation.ca/",
      domain: "bcsautomation.ca",
      duration: "Summer 2025", 
      description: "Architected a real-time data pipeline using Azure EventHub to ingest 2GB/hr of telemetry data and implemented a RAG-based chatbot that reduced info retrieval time by 60%. Cut API response times from 3.2s to 120ms via Redis caching.",
      tags: ["Azure", "Redis", "Python", "RAG / AI", "EventHub"]
    },
    {
      title: "Service Desk Specialist",
      company: "University of Waterloo IST",
      url: "https://uwaterloo.ca/information-systems-technology/",
      domain: "uwaterloo.ca",
      duration: "Summer 2024",
      description: "Spearheaded an AI chatbot that drove a 20% decrease in support requests and engineered automated Windows configuration scripts, saving the team over 3 hours of manual work weekly.",
      tags: ["Automation", "Powershell", "ITSM", "Scripting"]
    },
    {
      title: "3D Generalist",
      company: "Nettwerk Music Group",
      url: "https://www.nettwerk.com/",
      domain: "nettwerk.com",
      duration: "Jan 2021 - Jan 2024",
      description: "Designed and animated high-quality 3D visuals for over 50 songs, leveraging Blender to create immersive music experiences.",
      tags: ["Blender 3D", "Animation", "Creative Direction", "VFX"]
    },
    {
      title: "Lifeguard/Swim Instructor",
      company: "City of Waterloo",
      url: "https://www.waterloo.ca/",
      domain: "waterloo.ca",
      duration: "Jun 2023 - Sep 2023",
      description: "Ensured public safety through vigilant lifeguarding and emergency response, while delivering personalized swim instruction to students of all ages and skill levels.",
      tags: ["First Aid / CPR", "Leadership", "Crisis Management"]
    },
  ];

  return (
    <div id="experience" className="bg-blue-950 h-auto py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mt-11 mb-10">
        <h1 className="text-4xl font-bold text-white m-10">Work Experience</h1>
        
        {/* Timeline Container */}
        <div className="relative w-full flex flex-col items-center justify-center pl-6 ml-2 md:ml-0 md:pl-0">
          
          {/* Centering Spine line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-500/20" />
          
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    rootMargin: "-40% 0px",
    threshold: 0,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      whileHover={{ 
          y: -5,
          rotateX: 2,
          rotateY: isEven ? -2 : 2,
          transition: { duration: 0.2 }
      }}
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative w-full flex mb-12 md:mb-8 group ${
        isEven ? 'md:justify-start md:text-left' : 'md:justify-end md:text-left'
      }`}
    >
      {/* Brand Favicon Box */}
      <div 
        className={`absolute top-4 w-[36px] h-[36px] rounded-full bg-white border-2 overflow-hidden flex items-center justify-center p-1.5 shadow-md group-hover:scale-110 transition-all duration-300 z-10 
        -left-[43px] md:left-1/2 md:-translate-x-1/2 ${
          exp.isIncoming 
            ? 'border-yellow-500 shadow-yellow-500/20 group-hover:border-yellow-400' 
            : 'border-blue-500/40 shadow-blue-500/10 group-hover:border-blue-400'
        }`}
      >
        <img 
          src={`https://www.google.com/s2/favicons?domain=${exp.domain}&sz=64`}
          alt={`${exp.company} Logo`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://icons.duckduckgo.com/ip3/${exp.domain}.ico`;
          }}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Card Component Box */}
      <div 
        className={`w-full md:w-[calc(50%-2rem)] text-left p-6 bg-slate-900 border rounded-2xl shadow-2xl transition-all duration-300 ${
          exp.isIncoming 
            ? 'border-yellow-500/30 group-hover:border-yellow-500/50 shadow-yellow-500/5' 
            : 'border-white/5 group-hover:border-blue-500/20'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <div className="flex items-center gap-2">
                <a 
                  href={exp.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight inline-flex items-center gap-1 group/link"
                >
                  {exp.company}
                  <span className="text-slate-500 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 transition-all text-xl font-normal">→</span>
                </a>
                
                {/* Visual "Incoming" Badge */}
                {exp.isIncoming && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 tracking-wider uppercase">
                    Incoming
                  </span>
                )}
            </div>
            <span className={`text-xs font-mono uppercase tracking-widest ${
              exp.isIncoming ? 'text-yellow-400/90' : 'text-blue-400/80'
            }`}>{exp.duration}</span>
        </div>

        <h3 className="text-xs md:text-sm font-semibold text-slate-300 font-mono tracking-wider uppercase mb-4">{exp.title}</h3>
        <p className="text-gray-300 leading-relaxed text-sm md:text-[15px] mb-5">{exp.description}</p>

        {/* Tech Badges Container */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className={`text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-md border tracking-wide ${
                exp.isIncoming
                  ? 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20'
                  : 'bg-blue-500/10 text-blue-300 border-blue-400/30'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PastExperience;
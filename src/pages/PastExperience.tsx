import { motion, useAnimation, useInView, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react";

const PastExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  const mainControls = useAnimation();
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
    <div className="relative min-h-screen bg-blue-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-12">Work Experience</h1>

      <div className="max-w-2xl mx-auto space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            layoutId={exp.id}
            onClick={() => setSelectedId(exp.id)}
            className="p-4 bg-blue-800 rounded-lg shadow-md hover:bg-blue-700" // cursor="pointer"
          >
            <h2 className="text-xl font-semibold">{exp.title}</h2>
            <p>{exp.company}</p>
            <p className="text-sm">{exp.duration}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed top-0 left-0 w-full h-full bg-blue-950 z-50 p-10 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">{experiences.find(e => e.id === selectedId)?.title}</h2>
              <p className="text-lg mb-2">{experiences.find(e => e.id === selectedId)?.company}</p>
              <p className="text-sm mb-4">{experiences.find(e => e.id === selectedId)?.duration}</p>
              <p className="mb-4 text-gray-300">{experiences.find(e => e.id === selectedId)?.details}</p>
              {/* {experiences.find(e => e.id === selectedId)?.image && (
                <img
                  src={experiences.find(e => e.id === selectedId)?.image}
                  alt="screenshot"
                  className="rounded-lg mt-4"
                />
              )} */}
              <p className="mt-6 text-sm text-gray-400">Click anywhere to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PastExperience
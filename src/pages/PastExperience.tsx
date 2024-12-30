const PastExperience = () => {
  
  const experiences = [
    {
      title: "Service Desk Specialist",
      company: "University of Waterloo IST",
      duration: "May 2024 - Aug 2024",
      description: "Streamlined workflows and improved user experience through technical support excellence.",
    },
    {
      title: "3D Generalist",
      company: "Nettwerk Music Group",
      duration: "2021 - 2024",
      description: "Created captivating 3d animations for over 50 songs using blender",
    },
    {
      title: "Lifeguard/Swim Instructor",
      company: "City of Waterloo",
      duration: "Jun 2023 - Sep 2023",
      description: "Worked as a team to maintain safety, held a high level of responsibility. Taught students of all ages and abilities how to swim.",
    },
  ];
  return (
    <div id="experience" className="flex flex-col items-center justify-center h-auto bg-blue-900">
      <h1 className="text-4xl text-center font-bold text-white mb-8 mt-24">Work Experience</h1>
      <div className=" max-w-2xl relative border-l border-gray-300 m-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 ml-6">
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border border-white"></div>
            <div className="p-4 bg-blue-800 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">{exp.title}</h2>
              <p className="text-gray-200">{exp.company}</p>
              <p className="text-sm text-gray-300">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastExperience
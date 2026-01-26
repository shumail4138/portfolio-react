"use client";

function Skills() {
  const technicalSkills = [
    { name: "HTML", percent: 65 },
    { name: "CSS", percent: 60 },
    { name: "JavaScript", percent: 50 },
    { name: "React", percent: 60 },
    { name: "Next.js", percent: 65 },
    { name: "DSA", percent: 50 },
  ];

  const professionalSkills = [
    { name: "Team Work", percent: 90 },
    { name: "Creativity", percent: 85 },
    { name: "Communication", percent: 75 },
    { name: "Project Management", percent: 75 },
  ];

  return (
    <section className="px-6 py-12 bg-background text-foreground transition-colors duration-300">
  <div className="text-center mb-10">
  <h2 className="relative inline-block text-3xl font-bold " >
    My Skills
    <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#b74b4b] dark:bg-indigo-400"></span>
  </h2>
</div>



      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Technical Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#b74b4b]">
            Technical Skills
          </h3>

          {technicalSkills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <p className="font-medium">{skill.name}</p>
                <p className="font-medium">{skill.percent}%</p>
              </div>
              <div className="w-full bg-card dark:bg-gray-800 rounded-full h-4">
                <div
                  className="bg-indigo-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#b74b4b]">
            Professional Skills
          </h3>

          {professionalSkills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <p className="font-medium">{skill.name}</p>
                <p className="font-medium">{skill.percent}%</p>
              </div>
              <div className="w-full bg-card dark:bg-gray-800 rounded-full h-4">
                <div
                  className="bg-indigo-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

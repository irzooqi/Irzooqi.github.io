export default function Skills() {
  const skills = {
    "Backend Development": [
      { name: "JavaScript", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 }
    ],
    "Frontend Development": [
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 80 }
    ],
    "Technical Skills": [
      { name: "Git/GitHub", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
      { name: "SQL", level: 70 },
      { name: "Test Driven Development", level: 70 }
    ],
    "Additional Skills": [
      { name: "Technical Support", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "System Administration", level: 85 },
      { name: "Cloud Computing", level: 65 }
    ]
  };

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Arabic", level: "Native" },
    { name: "Turkish", level: "Basic" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Abilities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and skills I've developed through my bootcamp, 
              projects, and professional experience.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Languages
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((language) => (
                <div key={language.name} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">
                      {language.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800">{language.name}</h4>
                  <p className="text-gray-600 text-sm">{language.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

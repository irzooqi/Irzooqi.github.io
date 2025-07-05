export default function Experience() {
  const experiences = [
    {
      title: "Backend Web Developer Apprentice",
      company: "Re:Coded",
      location: "Remote",
      period: "March 2023 – August 2023",
      description: [
        "Completed a five-month intensive coding bootcamp, attending 120+ hours of live classes, solving 61 project-based assignments.",
        "Collaborated with multinational teams on creating different projects throughout the bootcamp.",
        "Topics include JavaScript, Node.js, TypeScript, Database Technologies, CRUD and Data Models, Authentication and Security, Testing, Architecture, and Cloud Computing.",
        "Building a capstone e-commerce project with a multinational team of bootcamp peers."
      ],
      skills: ["JavaScript", "Node.js", "TypeScript", "MongoDB", "Express.js", "Authentication", "Testing"]
    },
    {
      title: "Online Technical Support Associate",
      company: "Self Employed",
      location: "Remote",
      period: "January 2014 – March 2021",
      description: [
        "Provide on-demand remote technical support to users, offering assistance through phone calls, WhatsApp, Zoom and IP-remote software like TeamViewer.",
        "Helped the blind community in Iraq utilizing technology throughout on-demand online helpdesk sessions.",
        "Addressing user-related and technical problems, ensuring that software and systems function optimally."
      ],
      skills: ["Technical Support", "Remote Assistance", "Problem Solving", "Customer Service"]
    },
    {
      title: "Technical Support Associate",
      company: "Al-Afrah Store",
      location: "Iraq",
      period: "January 2016 – September 2017",
      description: [
        "Provided technical support for over 500 devices, resolving hardware and software issues with a 90% first-contact resolution rate.",
        "Assisted with device setup, configuration, and troubleshooting, delivering tailored solutions to enhance user experience.",
        "Recognized for problem-solving skills and excellent service, consistently receiving positive customer feedback."
      ],
      skills: ["Hardware Support", "Software Troubleshooting", "Device Configuration", "Customer Service"]
    }
  ];

  const education = [
    {
      degree: "Backend Web Development Bootcamp",
      institution: "Re:Coded",
      period: "March 2023 – August 2023",
      description: "Intensive 5-month program focusing on backend technologies and full-stack development."
    },
    {
      degree: "BS Computer Science",
      institution: "University of The People",
      period: "January 2023 – August 2024",
      description: "Comprehensive computer science program with focus on algorithms, data structures, and software engineering principles."
    },
    {
      degree: "BS Software Engineering",
      institution: "Altinbas University",
      period: "March 2021 – Present",
      description: "Software engineering program covering software development lifecycle, project management, and modern development practices."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience & Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">💼</span>
                </span>
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location} | {exp.period}</p>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-600 text-sm leading-relaxed flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🎓</span>
                </span>
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-green-200">
                    <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 top-0"></div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                      <p className="text-green-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h4>
                <div className="space-y-3">
                  {[
                    "ConsenSys Academy - Blockchain: Foundations and Use Cases",
                    "IBM & Kodluyoruz – CyberStart: Cybersecurity, Soft Skills and AI",
                    "Re:Coded & Flatiron School - Backend Web Development Bootcamp",
                    "XAMK University - Introduction to Video Games Creation"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-600 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

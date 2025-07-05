export default function Projects() {
  const projects = [
    {
      title: "Capstone E-Commerce Project",
      description: "A comprehensive e-commerce platform built with a multinational team during the Re:Coded bootcamp. Features include user authentication, product management, shopping cart, and order processing.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "Git"],
      features: [
        "Database Design & Implementation with MongoDB",
        "Robust backend server with Node.js and Express.js",
        "Secure authentication and full CRUD operations",
        "Version control with Git and GitHub",
        "Collaborative development with international team"
      ],
      status: "Completed",
      type: "Full-Stack"
    },
    {
      title: "URL Shortener Service",
      description: "A URL shortening service similar to bit.ly, allowing users to convert long URLs into short, manageable links with click tracking and analytics.",
      technologies: ["Node.js", "Express.js", "MongoDB", "shortid", "RESTful API"],
      features: [
        "Generate unique short URLs using shortid package",
        "Redirect users from short URL to original long URL",
        "MongoDB integration for URL mappings and data persistence",
        "RESTful API design for URL shortening requests",
        "Click tracking and basic analytics"
      ],
      status: "Completed",
      type: "Backend"
    },
    {
      title: "Bookmarks Management System",
      description: "An intelligent bookmarks management system with AI-powered classification and natural language retrieval. Built with modern web technologies and preparing for vector database integration.",
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB", "AI Integration"],
      features: [
        "AI-powered bookmark classification and tagging",
        "Natural language search and retrieval",
        "Browser bookmark synchronization",
        "Clean, responsive UI with Tailwind CSS",
        "Preparing vector database integration for semantic search"
      ],
      status: "In Development",
      type: "Full-Stack"
    },
    {
      title: "Python Interactive Chatbot",
      description: "A simple interactive chatbot developed in Python for practicing language skills and exploring conversational AI concepts.",
      technologies: ["Python", "Natural Language Processing", "CLI"],
      features: [
        "Interactive command-line interface",
        "Basic natural language understanding",
        "Conversation flow management",
        "Educational project for Python skill development"
      ],
      status: "Completed",
      type: "Python"
    },
    {
      title: "Music Composition in Python",
      description: "Completed a Coursera guided project to create music compositions using Python and Earsketch, exploring the intersection of coding and creativity.",
      technologies: ["Python", "Earsketch", "Audio Processing"],
      features: [
        "Music composition using Python programming",
        "Audio manipulation and effects",
        "Creative coding exploration",
        "Coursera guided project completion"
      ],
      status: "Completed",
      type: "Creative"
    }
  ];

  const getStatusColor = (status) => {
    return status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  const getTypeColor = (type) => {
    const colors = {
      "Full-Stack": "bg-purple-100 text-purple-800",
      "Backend": "bg-blue-100 text-blue-800",
      "Python": "bg-yellow-100 text-yellow-800",
      "Creative": "bg-pink-100 text-pink-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve built to demonstrate my skills and explore new technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Project Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-gray-500 text-xs italic">
                          +{project.features.length - 3} more features...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {project.features.length} features implemented
                    </span>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
                      </button>
                      {project.status === "Completed" && (
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Live Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to see more of my work?</p>
            <a
              href="https://github.com/yasirirzooqi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

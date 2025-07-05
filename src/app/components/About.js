export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Personal info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Hello there! 👋
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm Yasir Irzooqi, a passionate and enthusiastic backend developer who recently 
                graduated from a rigorous coding bootcamp at Re:Coded. I am on an exciting journey 
                to explore the world of software development and turn my ideas into functional, 
                efficient, and scalable solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With 8+ years of experience in technical support and assistive technology 
                implementation, I demonstrate dedication to using technology for meaningful impact, 
                particularly through volunteering to assist the blind community with screen reader 
                software integration and technical support.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-20">Location:</span>
                  <span className="text-gray-600">Bagcilar, Istanbul</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-20">Email:</span>
                  <a href="mailto:yasirirzooqi@gmail.com" className="text-blue-600 hover:underline">
                    yasirirzooqi@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-20">Phone:</span>
                  <a href="tel:+905350362038" className="text-blue-600 hover:underline">
                    +90 535 036 20 38
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Highlights */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">What I Focus On</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
                    <p className="text-gray-600 text-sm">
                      My primary focus is on backend development, where I love diving into 
                      server-side logic, databases, and API integrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Lifelong Learning</h4>
                    <p className="text-gray-600 text-sm">
                      I believe in continuous learning and constantly seek to expand my 
                      knowledge and improve my coding skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Team Collaboration</h4>
                    <p className="text-gray-600 text-sm">
                      Collaborating and working as part of a team is something I value, 
                      and I'm always open to new challenges and learning from others.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Community Impact</h4>
                    <p className="text-gray-600 text-sm">
                      Committed to using technology for meaningful impact, especially 
                      helping the blind community with assistive technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

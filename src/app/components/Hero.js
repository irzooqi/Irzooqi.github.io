export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-yellow-300">Yasir Irzooqi</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 text-blue-100">
              Software Engineer
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-blue-50 leading-relaxed">
              Passionate backend developer specializing in Node.js, Express.js, and MongoDB. 
              I build scalable solutions and empower communities through technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right side - Profile image placeholder */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-72 h-72 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-800">YI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

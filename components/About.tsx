import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary-100">
              <Image
                src="/images/miracle-photo.png"
                alt="Miracle Ezeh - Professional Photo"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am an organized and proactive Business Manager and Administrator with extensive experience in 
              administrative, operational, and strategic support. My career has been built on a foundation of 
              excellence in managing complex tasks and enhancing efficiency in dynamic, fast-paced environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I excel in tech-driven environments, managing complex tasks independently while contributing to 
              organizational success. My expertise spans recruitment, document management, marketing, and 
              comprehensive administrative functions across various industries including retail, healthcare, 
              and service sectors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently seeking high-profile opportunities where I can leverage my diverse skill set and 
              proven track record to drive growth and operational excellence in leading organizations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Strengths</h3>
            <ul className="space-y-4">
              {[
                "Organizational & Multitasking Excellence",
                "Administrative & Operational Support",
                "Recruitment & Team Development",
                "Document Management & Compliance",
                "Customer Service & Communication",
                "Tech Proficiency & Adaptability",
              ].map((strength, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

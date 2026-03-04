export default function Skills() {
  const skillCategories = [
    {
      category: "Core Competencies",
      skills: [
        "Exceptional Organizational & Multitasking Skills",
        "Customer Service",
        "Communication Skills",
        "Administrative Experience",
        "Adaptability & Problem Solving",
        "Organizational Skills",
      ],
    },
    {
      category: "Administrative & Operations",
      skills: [
        "Document Management (Google Drive; Google Docs)",
        "Recruiting & Hiring Support (Greenhouse)",
        "Cash Handling",
        "Maintenance",
        "Strong Written & Verbal Communication",
        "Administrative & Operational Support",
      ],
    },
    {
      category: "Technical Proficiency",
      skills: [
        "Microsoft Office",
        "Google Workspace",
        "Asana",
        "Slack",
        "Zoom",
        "Project Management Tools",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center bg-white rounded-lg p-3 shadow-sm"
                  >
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

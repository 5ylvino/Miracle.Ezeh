export default function Education() {
  const education = [
    {
      degree: "BSc Botany",
      institution: "Joseph Sarwuan Tarka University Makurdi",
      location: "Makurdi",
      period: "Graduated 04/2023",
      description: "Bachelor of Science degree in Botany, providing a strong foundation in scientific methodology, research, and analytical thinking.",
    },
    {
      degree: "Diploma in Desktop Publishing",
      institution: "Professional Training",
      period: "Completed",
      description: "Comprehensive training on Microsoft Office Suite (Word, Excel, PowerPoint, Outlook) for individuals and groups, enhancing productivity and digital proficiency.",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Qualifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-xl text-primary-600 font-semibold mb-1">
                  {edu.institution}
                </p>
                {edu.location && (
                  <p className="text-gray-600 font-medium mb-2">
                    {edu.location}
                  </p>
                )}
                <span className="text-gray-600 font-medium">{edu.period}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

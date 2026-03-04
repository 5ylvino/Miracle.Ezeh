export default function Experience() {
  const experiences = [
    {
      title: "Front Desk Officer",
      company: "Lash and body cave",
      location: "Abuja, Nigeria",
      period: "08/2023 – 01/2026",
      description: [
        "Used Microsoft Office to track information, update records and write correspondence",
        "Greeted visitors, managed enquiries, and provided detailed information on services for enhanced guest satisfaction",
        "Maintained a tidy and welcoming reception area to uphold company image and ensure visitor comfort",
        "Responded promptly to incoming phone calls and emails for prompt, professional correspondence",
        "Coordinated front desk operations, including mail distribution and answering telephone calls, to maintain efficient workflow",
        "Scheduled and confirmed appointments for clients, minimising wait times and enhancing customer experience",
        "Trained and helped less experienced staff manage workloads and assignments, facilitating fulfilment of organisational objectives",
        "Developed strong relationships with customers, vendors, and staff, fostering a positive and collaborative work environment",
        "Handled cash transactions, processed payments, and issued receipts with accuracy to support financial integrity",
        "Compiled and prepared reports, presentations, and correspondence to support management and team members",
      ],
    },
    {
      title: "Quality Control Officer",
      company: "House of Zicheal",
      location: "Abuja",
      period: "08/2024 – 06/2025",
      description: [
        "Streamlined daily operations by managing schedules, coordinating meetings, and overseeing communication between departments",
        "Collaborated with leadership teams to execute strategic initiatives, ensuring alignment with company goals",
        "Implemented efficient filing systems, maintained records, and supported document preparation for audits and compliance",
        "Assisted in recruitment processes, from candidate screening to onboarding, enhancing team integration and productivity",
        "Provided support in creating marketing materials and coordinating promotional activities, contributing to brand visibility",
        "Handled expense reports, travel arrangements, and correspondence, maintaining a high standard of organization and efficiency",
        "Acted as a liaison between leadership and diverse teams, facilitating smooth information flow and task execution",
      ],
    },
    {
      title: "Administrative & Executive Support",
      company: "National Youth Services Corps",
      location: "Abuja",
      period: "07/2023 – 06/2024",
      description: [
        "Provided administrative assistance to leadership by managing schedules, organizing meetings, and preparing documentation",
        "Assisted in executing community development projects, ensuring effective resource allocation and task management within set timelines",
        "Maintained accurate records of project activities, reports, and communications, showcasing attention to detail and data management proficiency",
        "Supported the recruitment of volunteers and facilitated training sessions, contributing to team development and operational efficiency",
        "Acted as a liaison between NYSC officials, community leaders, and project stakeholders, ensuring seamless information flow and collaboration",
        "Managed correspondence, organized events, and handled clerical duties, demonstrating versatility and proactive problem-solving",
        "Coordinated logistics for events and community outreach programs, enhancing engagement and promoting organizational objectives",
      ],
    },
    {
      title: "Pharmacy Assistant",
      company: "JNF Pharmacy",
      location: "Abuja",
      period: "01/2021 – 07/2023",
      description: [
        "Managed front-desk operations, including scheduling appointments, answering inquiries, and maintaining smooth communication with healthcare professionals and patients",
        "Organized pharmaceutical stock, monitored inventory levels, and coordinated orders to ensure the availability of necessary supplies",
        "Maintained accurate records of prescriptions, patient information, and billing, demonstrating strong organizational and data management skills",
        "Assisted in onboarding new staff members and providing guidance on operational protocols, contributing to team efficiency",
        "Collaborated with pharmacists and staff to optimize workflow and improve service delivery in a fast-paced environment",
        "Handled clerical duties such as filing, data entry, and coordinating schedules, showcasing strong multitasking and prioritization abilities",
        "Acted as a point of contact between pharmacy teams and external partners, facilitating clear and effective communication",
      ],
    },
    {
      title: "Store Manager",
      company: "Maytosteve Store",
      location: "Abuja",
      period: "05/2015 - 10/2016",
      description: [
        "Managed daily store operations, including staff scheduling, meeting coordination, and executive reporting, demonstrating strong organizational and multitasking abilities",
        "Oversaw inventory control, budget management, and vendor communications, ensuring smooth and efficient store operations",
        "Handled administrative tasks such as preparing reports, managing documentation, and maintaining accurate records of sales and staff performance",
        "Contributed to promotional strategies and assisted in implementing marketing campaigns to boost store visibility and sales",
        "Acted as the primary point of contact for customer inquiries and resolved issues with professionalism and efficiency",
        "Managed expense reports, organized travel arrangements, and supported leadership in executing business strategies",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-primary-600 font-semibold mb-1">
                    {exp.company}
                  </p>
                  {exp.location && (
                    <p className="text-gray-600 font-medium mb-2">
                      {exp.location}
                    </p>
                  )}
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3 mt-6">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

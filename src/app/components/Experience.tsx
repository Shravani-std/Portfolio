import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experienceData = [
  {
    role: "Frontend Devloper",
    company: "SaniSoft InfoTech ",
    location: "Kolhapur",
    period: "Nov 2024 - March 2025",
    type: "Internship",
    responsibilities: [
      "Built an Entrance Exam Platform with student registration and admin panels.",
 "Developed an Academic Management System with profiles, attendance, and task tracking using ReactJS.",
 "Responsibilities included requirement gathering, frontend development, database design, and API integration.",

    ],
    technologies: ["ReactJS"," Tailwind ", "MS SQL Server"],
  },
  {
    role: "Python FullStack Developer ",
    company: "AICT EduSkills",
    period: "Oct 2024 - Dec 2024",
    type: "Virtual Internship",
    responsibilities: [
      "Learned Python programming with backend development using Flask/Django and database integration (MySQL).",
"Covered frontend technologies like HTML, CSS, Bootstrap, and JavaScript for responsive web apps.",
"Built full-stack projects, worked with APIs, Git/GitHub, and learned basics of deployment."
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript","Python", "Flask" , "Django","MySQL","Git", "GitHub", "REST APIs"],
  },
  {
    role: "Virtual AI Trainee",
    company: "Pantech Solutions",
    period: "Dec 2024 - Jan 2025",
    type: "Virtual Internship",
    responsibilities: [
"Learning AI concepts – Artificial Intelligence, Machine Learning, Deep Learning, NLP, Computer Vision, and Reinforcement Learning.",
"Implementing hands-on projects – chatbots, face recognition, object detection, emotion analysis, fake news detection, OCR, etc.",
"Practicing tools & libraries – Python, OpenCV, TensorFlow/Keras, NLP libraries, Dialogflow, ML algorithms, and deployment basics."
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Scikit-learn", "NLP (NLTK)", "ML & DL" , "Dialogflow"," OCR (Tesseract)"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-purple-500/20" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-background z-10" />

                {/* Content card */}
                <div className="md:w-[calc(50%-2rem)] w-full">
                  <div className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl text-white">{exp.role}</h3>
                          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 whitespace-nowrap">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-purple-300 mb-2">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{resp}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

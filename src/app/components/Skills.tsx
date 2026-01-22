import { motion } from "motion/react";
import { Brain, Code2, Database, Cpu, Wrench,Terminal } from "lucide-react";

const skillsSections = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Web & Frontend Technologies",
    icon: Wrench,
    skills: ["HTML5", "CSS", "Tailwind CSS", "ReactJS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Oracle"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "Embeddings",
      "Vector Search",
    ],
  },
  {
    title: "Tools & Development",
    icon: Cpu,
    skills: ["Git", "GitHub", "Docker", "Postman", "Flask"],
  },
  {
    title: "Computer Science Fundamentals",
    icon: Code2,
    skills: [
      "OOP",
      "Data Structures",
      "Databases",
      "Operating Systems",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-3">
            Technical Skill Set
          </h2>
          <p className="text-gray-400">
            Technologies, tools, and core computer science knowledge
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsSections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-purple-500/20 rounded-xl p-6
                           hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg text-white">{section.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full
                                 bg-purple-500/10 text-purple-300
                                 border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* LeetCode Profile
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mt-12 bg-white/5 border border-purple-500/20 rounded-xl p-6
             hover:border-purple-500/40 transition-all duration-300"
>
  <div className="flex items-center gap-3 mb-3">
    <Terminal className="w-6 h-6 text-purple-400" />
    <h3 className="text-lg text-white">Problem Solving</h3>
  </div>

  <p className="text-gray-400 mb-4 text-sm">
    Actively practicing Data Structures and Algorithms on LeetCode to improve
    problem-solving and coding efficiency.
  </p>

  <a
    href="https://leetcode.com/u/Shravani-std/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
               bg-purple-500/20 text-purple-300 text-sm
               hover:bg-purple-500/30 hover:text-white
               transition-all duration-300"
  >
    Visit LeetCode Profile
  </a>
</motion.div> */}

      </div>
    </section>
  );
}

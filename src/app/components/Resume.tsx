import { motion } from "motion/react";
import { FileText, Download, Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "May 2024",
    credentialId: "Cisco Verified Badge",
    description:
      "Gained foundational knowledge of cybersecurity concepts including online safety, cyber threats, vulnerabilities, and organizational security practices.",
    certificate: "/certificates/Introduction_to_Cybersecurity_Badge20240516-8-m6lmlk.pdf",
  },
  {
    name: "AI Master Class Using Python (Internship)",
    issuer: "Pantech Prolabs India Pvt. Ltd.",
    date: "Jan 2025",
    credentialId: "CERT-J47S0CM8",
    description:
      "Completed a 30-day hands-on AI internship focusing on Python, machine learning fundamentals, and practical AI applications.",
    certificate: "/certificates/certificate-of-completion-for-ai-master-class-using-python-1.png",
  },
{
  name: "Deep Learning",
  issuer: "NPTEL – IIT Ropar (SWAYAM)",
  date: "Jul–Oct 2025",
  credentialId: "NPTEL25CS106S460701083",
  description:
    "Completed a 12-week NPTEL-certified Deep Learning course offered by IIT Ropar with Elite status. Covered neural networks, backpropagation, CNNs, RNNs, optimization techniques, and real-world deep learning applications. Successfully cleared a proctored exam with a consolidated score of 68%.",
  certificate: "/certificates/NPTL Deep Learning.jpg",
}

];


export function Resume() {
  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Resume & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resume Download Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-purple-500/30 flex items-center justify-center">
                <FileText className="w-8 h-8 text-purple-300" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-1">My Resume</h3>
                <p className="text-purple-300 text-sm">Download my complete CV</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Get a comprehensive overview of my skills, experience, education, and achievements. 
              Available in PDF format for easy viewing and printing.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>Complete work experience & projects</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>Technical skills & competencies</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>Education & certifications</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>Achievements & awards</span>
              </div>
            </div>
 <a
  href="/resume/Shravani_Tingare_Resume.pdf"
  download
  className="w-full flex items-center justify-center gap-3 px-6 py-3 
             bg-purple-500 hover:bg-purple-600 text-white rounded-lg
             transition-all duration-300 hover:shadow-lg 
             hover:shadow-purple-500/50 hover:-translate-y-1"
>
  <Download className="w-5 h-5" />
  Download Resume (PDF)
</a>


          </motion.div>

          {/* Certifications List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl text-white">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg text-white pr-4">{cert.name}</h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                <p className="text-purple-300 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-400">ID: {cert.credentialId}</p>
                {cert.certificate && (
  <a
    href={cert.certificate}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-4 px-3 py-2 
               text-sm rounded-lg bg-purple-500/20 text-purple-300
               hover:bg-purple-500/30 hover:text-white
               transition-all duration-300"
  >
    <FileText className="w-4 h-4" />
    View Certificate
  </a>
)}

              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center"
            >
              <p className="text-gray-300">
                🎓 Continuously learning and earning new certifications in AI/ML
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

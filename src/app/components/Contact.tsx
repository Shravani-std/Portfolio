import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-3">Contact</h2>
          <p className="text-gray-400">
            Feel free to reach out for collaborations, opportunities, or queries.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-purple-500/20 rounded-lg">
            <Mail className="w-6 h-6 text-purple-400" />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:shravanitingare333@gmail.com"
                className="text-white hover:text-purple-400 transition"
              >
                shravanitingare333@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-purple-500/20 rounded-lg">
            <MapPin className="w-6 h-6 text-purple-400" />
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white">Maharashtra, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/Shravani-std"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shravani-tingare-327850257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/ShravaniT84"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-purple-500/20 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Shravani Tingare
          </p>
        </div>
      </div>
    </section>
  );
}

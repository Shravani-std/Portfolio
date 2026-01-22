import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(167, 139, 250, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">AI & ML Enthusiast</span>
        </motion.div>
        
{/*Name */}
 <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="
    text-5xl md:text-7xl 
    mb-6 
    text-center
    leading-[1.2] md:leading-[1.15]
    pb-2
    bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500
    bg-clip-text text-transparent
  "
>
  Hello, I'm
  <span className="block mt-3 font-semibold">
    Shravani Tingare
  </span>
</motion.h1>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          A passionate developer crafting intelligent solutions with{" "}
          <span className="text-purple-400">Machine Learning</span> and{" "}
          <span className="text-purple-400">Artificial Intelligence</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-lg transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

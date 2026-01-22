import { motion } from "motion/react";
import { Code, Heart, User } from "lucide-react";
import profileImg from "../../assets/picture.jpg";


export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-6 bg-black"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl mb-4 text-white font-semibold">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          {/* Profile Image */}
<div className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
  
  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 p-[2px] shadow-md shadow-purple-500/40">
    <img
      src={profileImg}
      alt="Profile"
      className="w-full h-full rounded-full object-cover bg-black"
    />
  </div>

  <h3 className="text-2xl text-center text-white mb-2">
    AI / ML Developer
  </h3>
  <p className="text-purple-300 text-center">
    Building the future with data
  </p>
</div>

          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate{" "}
              <span className="text-purple-400">
                AI & Machine Learning enthusiast
              </span>{" "}
              dedicated to leveraging cutting-edge technology to solve
              real-world problems. With a strong foundation in computer science
              and a keen interest in data-driven solutions, I thrive on
              transforming complex challenges into innovative applications.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My journey in tech has been driven by curiosity and continuous
              learning. From building intelligent systems to participating in
              hackathons, I’m always eager to explore new technologies and push
              boundaries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <Stat icon={Code} value="10+" label="Projects" />
              <Stat icon={Heart} value="3" label="Hackathons" />
              <Stat icon={User} value="2+" label="Years Exp" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Stat Component ---------- */
function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center hover:border-purple-500/40 transition-all duration-300">
      <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
      <div className="text-2xl text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

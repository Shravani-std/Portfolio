import { motion } from "motion/react";
import { ExternalLink, Github, Star } from "lucide-react";

const projectsData = [
  {
    title: "AI-Powered Healthcare Diagnostic System",
    description:
      "Deep learning model for early disease detection using medical imaging. Achieved 94% accuracy on test dataset.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Smart Agriculture IoT Platform",
    description:
      "IoT-based system with ML algorithms for crop yield prediction and automated irrigation management.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
    technologies: ["Python", "Scikit-learn", "Arduino", "React", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Real-Time Sentiment Analysis Dashboard",
    description:
      "NLP-based platform for monitoring social media sentiment with live visualization and trend analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    technologies: ["Python", "BERT", "React", "Node.js", "WebSocket"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Object Detection for Autonomous Vehicles",
    description:
      "Computer vision system for real-time object detection and tracking using YOLO and transfer learning.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop",
    technologies: ["Python", "PyTorch", "YOLO", "OpenCV", "ROS"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Chatbot with Natural Language Understanding",
    description:
      "Intelligent conversational AI with context awareness and multi-language support using transformer models.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
    technologies: ["Python", "Transformers", "FastAPI", "React", "Redis"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Stock Price Prediction Model",
    description:
      "Time-series forecasting using LSTM networks for predicting stock market trends with technical indicators.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
    technologies: ["Python", "Keras", "Pandas", "Plotly", "Streamlit"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my work in AI, Machine Learning, and Full-Stack Development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500 text-white text-xs">
                    <Star className="w-3 h-3 fill-white" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 rounded-lg transition-all duration-300 text-sm text-gray-300 hover:text-white flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-all duration-300 text-sm text-white flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

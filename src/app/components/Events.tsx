import { motion } from "motion/react";
import { Trophy, Users, Zap, Award, Lightbulb } from "lucide-react";

const eventsData = [
  {
    name: "Internal Hackathon for Smart India Hackathon 2024",
    organizer: "DKTE’s Textile and Engineering Institute, Ichalkaranji",
    date: "Sep 2024",
    achievement: "Internal Hackathon Participant (SIH 2024)",
    description:
    "Actively participated in the Internal Hackathon conducted as part of Smart India Hackathon 2024, focusing on innovative problem-solving and solution design aligned with national-level challenges.",
    highlights: [
      "Official internal selection round for Smart India Hackathon 2024",
      "Organized by YUKTI, Innovation & Start-up Cell, IIC and AICTE IDEA Lab",
      "Collaborated in a team-based innovation environment",
      "Evaluated by institutional experts and coordinators"
    ],
    icon: Lightbulb,
    color: "from-blue-400 to-indigo-600",
    certificate: "./src/assets/E-Certificate for Internal Hackathon for Smart India Hackathon 2024_page-0001.jpg"
  },
{
  name: "InnovateYou Techathon 2.0",
  organizer: "Innovation Foundation, Pune",
  date: "Feb 2025",
  achievement: "National-Level Hackathon Participant",
  description:
    "Developed an AI-based Agritech solution to analyze and predict the impact of climate change and seasonal variations on agriculture. The system focused on data-driven insights to support sustainable farming decisions.",
  highlights: [
    "24-hour national-level hackathon",
    "Built an agriculture-focused climate analysis system",
    "Worked on real-world agritech problem statements",
    "Evaluated by academic and industry experts"
  ],
  icon: Trophy,
  color: "from-green-400 to-emerald-600",
  certificate: "./src/assets/Pune hackethon.jpg"
},
{
  name: "21st E-Summit @ IIT Bombay",
  organizer: "E-Cell, IIT Bombay",
  date: "Dec 2024",
  achievement: "Attended Entrepreneurship & Innovation Summit",
  description:
    "Attended the 21st E-Summit at IIT Bombay — one of Asia’s largest entrepreneurship and innovation summits. Gained valuable insights from visionary leaders and industry experts, participated in interactive sessions, explored startup pitches, and experienced networking opportunities across founders, investors, and innovators.",
  highlights: [
    "Learned from global industry leaders and entrepreneurs",
    "Explored startup pitch events and networking arena",
    "Engaged with internship & job fair opportunities",
    "Attended workshops on AI, entrepreneurship, and innovation"
  ],
  icon: Award,
  color: "from-yellow-400 to-yellow-600",
  link: "https://www.linkedin.com/posts/shravani-tingare-327850257_esummit-iitbombay-entrepreneurship-activity-7405895337112023040-poXd"
},



  // {
  //   name: "HackTheVerse 2023",
  //   organizer: "University Tech Fest",
  //   date: "Mar 2023",
  //   achievement: "2nd Place",
  //   description:
  //     "Created a real-time sentiment analysis platform for social media monitoring using NLP and cloud computing.",
  //   highlights: ["500+ participants", "Built in 24 hours", "Live deployment"],
  //   icon: Zap,
  //   color: "from-blue-400 to-cyan-500",
  // },
  // {
  //   name: "MLH Local Hack Day",
  //   organizer: "Major League Hacking",
  //   date: "Dec 2022",
  //   achievement: "Best ML Project",
  //   description:
  //     "Developed an image classification model for waste segregation to promote environmental sustainability.",
  //   highlights: ["Community favorite", "Open-source contribution", "Industry mentorship"],
  //   icon: Users,
  //   color: "from-green-400 to-emerald-500",
  // },
  // {
  //   name: "Code for Cause Hackathon",
  //   organizer: "Non-Profit Tech Org",
  //   date: "Sep 2022",
  //   achievement: "Participant",
  //   description:
  //     "Worked on accessibility features for web applications to help people with disabilities navigate the internet.",
  //   highlights: ["Social impact focus", "Team of 4 developers", "24-hour sprint"],
  //   icon: Trophy,
  //   color: "from-purple-400 to-indigo-500",
  // },
];

export function Events() {
  return (
    <section id="events" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Events & Hackathons</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Competing, learning, and building innovative solutions at premier tech events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {eventsData.map((event, index) => {
            const Icon = event.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-1">{event.name}</h3>
                    <p className="text-sm text-gray-400">{event.organizer} • {event.date}</p>
                  </div>
                </div>

                {/* Achievement badge */}
                <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm mb-4">
                  🏆 {event.achievement}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {event.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-400 text-sm">{highlight}</p>
                    </div>


                  ))}

                </div>

                {/* Certificate Button */}
{event.certificate && (
  <a
    href={event.certificate}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg 
               bg-purple-500/20 text-purple-300 text-sm
               hover:bg-purple-500/30 hover:text-white
               transition-all duration-300"
  >
    <Award className="w-4 h-4" />
    View Certificate
  </a>
)}
{event.link && (
  <a
    href={event.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-3 py-2 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
  >
    View LinkedIn Post
  </a>
)}

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

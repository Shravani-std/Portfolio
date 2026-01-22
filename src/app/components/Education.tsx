// import { motion } from "motion/react";
// import { GraduationCap, Award, Calendar } from "lucide-react";

// const educationData = [
//   {
//     degree: "Bachelor of Technology in Computer Science",
//     institution: "DKTE Society's Textile & Engineering Institute (An Empowered Autonomous Institute)",
//     location: "Ichalkaranji, Maharashtra",
//     period: "2022 - 2026",
//     gpa: "7.9/10",
//     achievements: [
//       "Technical Lead Cybersecurity Association Club",
//     ],
//   },
//   {
//     degree: "Higher Secondary Education",
//     institution: "Manere Highschool and Junior College ",
//     location: "Ichalkaranji, Maharashtra",
//     period: "2021 - 2022",
//     gpa: "80%",
//     achievements: [
      
//     ],
//   },
// ];

// export function Education() {
//   return (
//     <section id="education" className="py-20 px-6 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl mb-4 text-white">Education</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full" />
//         </motion.div>

//         <div className="space-y-8">
//           {educationData.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
//             >
//               <div className="flex flex-col md:flex-row gap-6">
//                 {/* Icon */}
//                 <div className="flex-shrink-0">
//                   <div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center">
//                     <GraduationCap className="w-8 h-8 text-purple-400" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
//                     <div>
//                       <h3 className="text-2xl text-white mb-2">{edu.degree}</h3>
//                       <p className="text-purple-300 mb-1">{edu.institution}</p>
//                       <p className="text-gray-400 text-sm">{edu.location}</p>
//                     </div>
//                     <div className="flex flex-col items-start md:items-end gap-2 mt-3 md:mt-0">
//                       <div className="flex items-center gap-2 text-purple-400">
//                         <Calendar className="w-4 h-4" />
//                         <span>{edu.period}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-purple-400">
//                         <Award className="w-4 h-4" />
//                         <span>{edu.gpa}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Achievements */}
//                   <div className="mt-4 space-y-2">
//                     {edu.achievements.map((achievement, i) => (
//                       <div key={i} className="flex items-start gap-2">
//                         <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
//                         <p className="text-gray-300">{achievement}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

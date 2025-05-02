// import { Microscope, Megaphone, Shield, Network, BookOpen } from 'lucide-react';

// export default function ResearchAdvocacy() {
//   return (
//     <section className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Research & Advocacy
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Pioneering cybersecurity research and driving policy changes through evidence-based advocacy
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Research Focus */}
//           <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
//             <div className="flex items-center mb-6">
//               <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
//                 <Microscope className="w-8 h-8 text-green-600 dark:text-green-400" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Research Focus Areas</h3>
//             </div>
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0" />
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cyber Threat Intelligence</h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Advanced analysis of emerging cyber threats and attack patterns
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <Network className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0" />
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Digital Forensics</h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Developing cutting-edge tools for digital evidence collection and analysis
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0" />
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Policy Framework</h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Researching legal and regulatory frameworks for cyber governance
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Advocacy Focus */}
//           <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
//             <div className="flex items-center mb-6">
//               <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
//                 <Megaphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Advocacy Initiatives</h3>
//             </div>
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full mr-4 flex items-center justify-center">1</div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Law Enforcement Training</h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Capacity building programs for cybercrime investigation units
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full mr-4 flex items-center justify-center">2</div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Public Awareness</h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Nationwide campaigns on cyber hygiene and digital safety
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full mr-4 flex items-center justify-center">3</div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Policy Reform</h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Advocating for stronger cyber legislation and international cooperation
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//           <div className="bg-green-100 dark:bg-green-900 p-6 rounded-xl">
//             <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
//             <div className="text-gray-600 dark:text-gray-300">Published Papers</div>
//           </div>
//           <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl">
//             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
//             <div className="text-gray-600 dark:text-gray-300">Trained Agencies</div>
//           </div>
//           <div className="bg-green-100 dark:bg-green-900 p-6 rounded-xl">
//             <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
//             <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
//           </div>
//           <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl">
//             <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
//             <div className="text-gray-600 dark:text-gray-300">Professionals Trained</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import { Microscope, Megaphone, Shield, Network, BookOpen, Fingerprint, Code, Lock, Globe, Currency, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResearchAdvocacy() {
  const researchAreas = [
    {
      icon: <Fingerprint className="w-6 h-6 text-blue-600 dark:text-blue-400"/>,
      title: "Investigative Challenges",
      items: [
        "New Age Cyber Crimes",
        "Anti-Forensic Techniques",
        "VoIP Call Crimes",
        "Deep & Darknet Offences"
      ]
    },
    {
      icon: <Code className="w-6 h-6 text-green-600 dark:text-green-400"/>,
      title: "Digital Forensics",
      items: [
        "Recent Trends & Methodologies",
        "SoPs for Digital Evidence",
        "CDR-IPDR Analysis",
        "APTs Investigation"
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-600 dark:text-purple-400"/>,
      title: "Cyber Security",
      items: [
        "Crypto-Currency Crimes",
        "CSAM Monitoring Techniques",
        "Threat Intelligence & IOCs",
        "HUMINT + OSINT Integration"
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400"/>,
      title: "Policy & Compliance",
      items: [
        "Cyber Law Amendments",
        "Data Privacy Regulations",
        "Government Initiatives",
        "International Cooperation"
      ]
    }
  ];

  const advocacyInitiatives = [
    {
      icon: <Microscope className="w-6 h-6 text-blue-600 dark:text-blue-400"/>,
      title: "Technical Training",
      content: "Advanced programs in digital evidence acquisition and analysis"
    },
    {
      icon: <Megaphone className="w-6 h-6 text-green-600 dark:text-green-400"/>,
      title: "Public Awareness",
      content: "Nationwide campaigns on cyber hygiene and digital citizenship"
    },
    {
      icon: <Scale className="w-6 h-6 text-purple-600 dark:text-purple-400"/>,
      title: "Policy Advocacy",
      content: "Pushing for stronger cyber legislation and global standards"
    },
    {
      icon: <Currency className="w-6 h-6 text-orange-600 dark:text-orange-400"/>,
      title: "Financial Security",
      content: "Combating crypto-related financial cyber crimes"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Research & Advocacy
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pioneering solutions for modern cyber challenges through innovative research and strategic policy advocacy
          </p>
        </div>

        {/* Research Focus Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {researchAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg mr-3">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {area.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {area.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-blue-500 mr-2">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Advocacy Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advocacyInitiatives.map((initiative, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {initiative.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {initiative.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { value: "50+", label: "Published Papers", color: "green" },
            { value: "100+", label: "Trained Agencies", color: "blue" },
            { value: "15+", label: "Years Experience", color: "purple" },
            { value: "10K+", label: "Professionals Trained", color: "orange" }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl bg-${stat.color}-100 dark:bg-${stat.color}-900`}
            >
              <div className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
// export default function VisionMission() {
//     return (
//       <section className="py-20 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Vision & Mission
//             </h2>
//           </div>
  
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Vision Card */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
//               <div className="flex items-center mb-6">
//                 <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
//                   <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                 To develop the efficiency and expertise of law enforcement agencies in handling cybercrime investigations with 
//                 <span className="font-semibold text-green-600 dark:text-green-400"> predictive</span>, 
//                 <span className="font-semibold text-green-600 dark:text-green-400"> proactive</span>, and 
//                 <span className="font-semibold text-green-600 dark:text-green-400"> reactive</span> approaches.
//               </p>
//             </div>
  
//             {/* Mission Card */}
//             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
//               <div className="flex items-center mb-6">
//                 <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
//                   <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
//                 To enable law enforcement agencies and government bodies to build homegrown cyber-crime & security technology platforms through:
//               </p>
//               <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
//                 <li>Comprehensive gap analysis studies</li>
//                 <li>Development of customized solutions</li>
//                 <li>Collaborative technology development</li>
//                 <li>Broad-spectrum cyber security initiatives</li>
//               </ul>
//             </div>
//           </div>
  
//           {/* Additional Info */}
//           <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
//             <p>Established: August 1, 2015 | ARTIZO Framework | ICG: 0</p>
//           </div>
//         </div>
//       </section>
//     );
//   }




import visionImage from '../../assets/images/vision-mission.jpeg';
import { motion } from "framer-motion";


export default function VisionMission() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driving excellence in cybersecurity through innovative research and strategic solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To develop the efficiency and expertise of law enforcement agencies in handling cybercrime investigations with {' '}
              <span className="font-semibold text-green-600 dark:text-green-400">predictive</span>, {' '}
              <span className="font-semibold text-green-600 dark:text-green-400">proactive</span>, and {' '}
              <span className="font-semibold text-green-600 dark:text-green-400">reactive</span> approaches, 
              ensuring comprehensive digital security solutions for modern challenges.
            </p>
          </div>

          {/* Mission Image */}
          <motion.div 
            className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={visionImage} 
              alt="Cyber Security Analysis" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80"></div>
          </motion.div>

          {/* Full Width Mission Card */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  To enable law enforcement agencies and government bodies to build homegrown cyber-crime & security 
                  technology platforms through comprehensive research and development.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We conduct in-depth studies on operational gaps and challenges faced by government entities, 
                  focusing on three core domains:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Cybersecurity infrastructure</li>
                  <li>Cybercrime investigation protocols</li>
                  <li>Digital forensics methodologies</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Our approach addresses the full spectrum of digital security implications, developing advanced 
                  tools and strategies to combat:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Large-scale cyber attacks</li>
                  <li>Sophisticated threat actors</li>
                  <li>Emerging digital vulnerabilities</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  Through collaborative innovation, we empower agencies with cutting-edge solutions tailored to 
                  modern security demands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Established: August 1, 2015 | ARTIZO Framework | ICG: 0</p>
        </div>
      </div>
    </section>
  );
}
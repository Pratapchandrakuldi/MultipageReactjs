// components/sections/HeroSection.jsx
// export default function HeroSection() {
//     return (
//       <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
//         <div className="z-10 text-center px-4">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//             Cybersecurity Excellence
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
//             Advanced digital forensics and threat intelligence solutions for modern security challenges
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg">
//               Get Started
//             </button>
//             <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 text-lg">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }




// import crcidfLogo from '../../assets/images/logo.png';

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-green-100 to-blue-200">
//       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}></div>
//       <div className="relative z-10 flex items-center max-w-6xl mx-auto px-4">
//         {/* Logo Section */}
//         <div className="flex-shrink-0 mr-8">
//           <img src={crcidfLogo} alt="CRCIDF Logo" className="h-24 md:h-32" />
//         </div>
//         {/* Text Content */}
//         <div className="text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Centre for Research on Cyber Intelligence and Digital Forensics
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
//             Advancing cybersecurity through innovative research, education, and collaboration. Join us in shaping the future of digital forensics and cyber intelligence.
//           </p>
//           <div className="flex space-x-4">
//             <a href="/get-started" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 text-lg">
//               Get Started
//             </a>
//             <a href="/learn-more" className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white text-lg">
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import crcidfLogo from '../../assets/images/logo.png';

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 py-12">
//         {/* Logo Section - Increased size */}
//         <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
//           <img 
//             src={crcidfLogo} 
//             alt="CRCIDF Logo" 
//             className="h-32 md:h-48 w-auto transition-all duration-300 hover:scale-105"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="text-center md:text-left">
//           <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
//             Centre for Research on<br className="hidden md:block" />
//             <span className="text-green-400">Cyber Intelligence</span> and<br className="hidden md:block" />
//             <span className="text-blue-400">Digital Forensics</span>
//           </h1>
          
//           <div className="max-w-2xl mx-auto md:mx-0">
//             <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
//               The Centre for Research on Cyber Intelligence and Digital Forensics is a research body 
//               formed by industry specialists with decades of experience and expertise in Cyber Forensics, 
//               Digital Intelligence, and Security.
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
//             <a 
//               href="/research" 
//               className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg 
//                          transition-all duration-300 text-lg font-semibold"
//             >
//               Explore Research
//             </a>
//             <a 
//               href="/about" 
//               className="border-2 border-green-600 text-green-500 hover:bg-green-600 hover:text-white 
//                          px-8 py-3 rounded-lg transition-all duration-300 text-lg font-semibold"
//             >
//               About Our Work
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import crcidfLogo from '../../assets/images/logo.png';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 py-16 space-y-12 lg:space-y-0 lg:space-x-16">
        {/* Logo Section with Animation */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={crcidfLogo} 
            alt="CRCIDF Logo" 
            className="h-48 md:h-64 w-auto transform transition-all duration-500 hover:scale-105 hover:rotate-3"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <span className="block mb-4">Centre for Research on</span>
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Cyber Intelligence & Digital Forensics
            </span>
          </h1>

          <div className="max-w-3xl mx-auto lg:mx-0">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Pioneering cybersecurity research through cutting-edge innovation in digital forensics 
              and intelligence gathering. Our team of industry experts brings decades of specialized 
              experience to global security challenges.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/research"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-xl
                       transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Explore Innovations
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/about"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl bg-transparent
                       hover:bg-white/10 transition-all duration-300 text-lg font-semibold"
            >
              Our Methodology
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
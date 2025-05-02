// // components/sections/FeaturesSection.jsx
// import { Shield, Lock, Activity, Globe } from 'lucide-react';

// const features = [
//   {
//     icon: <Shield size={40} className="text-blue-600" />,
//     title: "Advanced Protection",
//     description: "Enterprise-grade security solutions for all network layers"
//   },
//   {
//     icon: <Lock size={40} className="text-blue-600" />,
//     title: "Data Encryption",
//     description: "End-to-end encryption for all sensitive communications"
//   },
//   {
//     icon: <Activity size={40} className="text-blue-600" />,
//     title: "Real-time Monitoring",
//     description: "24/7 surveillance with AI-powered threat detection"
//   },
//   {
//     icon: <Globe size={40} className="text-blue-600" />,
//     title: "Global Coverage",
//     description: "Worldwide network of security operations centers"
//   }
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Features</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive security solutions tailored to your needs</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// components/sections/FeaturesSection.jsx
import { Microscope, Network, ShieldCheck, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <Microscope size={40} className="text-blue-600 dark:text-blue-400" />,
    title: "Cyber Forensics Solutions",
    description: "Advanced digital forensic tools and methodologies for evidence collection and analysis"
  },
  {
    icon: <Network size={40} className="text-blue-600 dark:text-blue-400" />,
    title: "Threat Intelligence",
    description: "Predictive analysis of emerging cyber threats and attack patterns"
  },
  {
    icon: <ShieldCheck size={40} className="text-blue-600 dark:text-blue-400" />,
    title: "LEA Capacity Building",
    description: "Specialized training programs for law enforcement agencies"
  },
  {
    icon: <BookOpen size={40} className="text-blue-600 dark:text-blue-400" />,
    title: "Policy Framework Development",
    description: "Creating robust cyber governance models and compliance standards"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Competencies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering cybersecurity through innovative research and capacity development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
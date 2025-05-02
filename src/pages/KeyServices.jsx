// import { useEffect } from "react";

// export default function KeyServices() {
//   useEffect(() => {
//     document.title = "Key Services | CRCIDF";
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white mt-16">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Header Section */}
//         <header className="text-center">
//           <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">Our Key Services</h1>
//           <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//             Delivering high-quality services to empower communities and organizations.
//           </p>
//         </header>

//         {/* Services Section */}
//         <section className="mt-12">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">What We Offer</h2>
//           <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Consulting & Advisory</h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 Expert guidance on strategy, policy, and project implementation.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Research & Analysis</h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 Data-driven insights to support informed decision-making.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Capacity Building</h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 Training programs to enhance skills and institutional capabilities.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Technology Solutions</h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 Innovative IT solutions for digital transformation and efficiency.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Advocacy & Awareness</h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 Promoting social change through campaigns and policy advocacy.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Monitoring & Evaluation</h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-400">
//                 Assessing project impact to ensure effectiveness and sustainability.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className="mt-12 text-center">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Work with Us</h2>
//           <p className="mt-2 text-gray-600 dark:text-gray-400">
//             Partner with us to leverage our expertise in delivering impactful services.
//           </p>
//           <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition">
//             Contact Us
//           </button>
//         </section>
//       </div>
//     </div>
//   );
// }




// import { useEffect } from "react";
// import { Microscope, Shield, BookOpen, Laptop, Users, Tool, Network, ClipboardList, Lock, Megaphone } from 'lucide-react';

// export default function KeyServices() {
//   useEffect(() => {
//     document.title = "Key Services | CRCIDF";
//   }, []);

//    const services = [
//     {
//       icon: <Microscope className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
//       title: "Cyber Research & Development",
//       description: "Pioneering innovative solutions in cybersecurity through cutting-edge research"
//     },
//     {
//       icon: <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />,
//       title: "Cyber Capacity Building",
//       description: "Developing SOPs, training programs, and e-learning content for skill enhancement"
//     },
//     {
//       icon: <Tool className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
//       title: "Cyber Tool Development",
//       description: "Designing and implementing custom cybersecurity tools and intern programs"
//     },
//     {
//       icon: <BookOpen className="w-8 h-8 text-red-600 dark:text-red-400" />,
//       title: "Forensic Investigation Support",
//       description: "Providing OSINT, digital forensic assistance, and investigative advocacy"
//     },
//     {
//       icon: <ClipboardList className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
//       title: "Policy Documentation",
//       description: "DPR, RFP/EoI preparation, and visionary document design/implementation"
//     },
//     {
//       icon: <Laptop className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
//       title: "Cyber Lab Integration",
//       description: "End-to-end setup and integration of advanced cybersecurity laboratories"
//     },
//     {
//       icon: <Network className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
//       title: "Advanced Training Programs",
//       description: "Organizing workshops/webinars on emerging cyber domains"
//     },
//     {
//       icon: <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
//       title: "Human Capital Deployment",
//       description: "Specialized cybersecurity workforce allocation and management"
//     },
//     {
//       icon: <Lock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
//       title: "Security Audits & Response",
//       description: "Comprehensive VAPT, security audits, and incident response services"
//     },
//     {
//       icon: <Megaphone className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
//       title: "Cyber Hygiene Advocacy",
//       description: "Public awareness programs on digital safety and online wellbeing"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white mt-16">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Header Section */}
//         <header className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">Our Key Services</h1>
//           <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//             Empowering academia, corporations, and law enforcement with comprehensive cybersecurity solutions
//           </p>
//         </header>

//         {/* Services Grid */}
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="flex items-center mb-4">
//                 <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   {service.title}
//                 </h3>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </section>

//         {/* CTA Section */}
//         <section className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl">
//             <h2 className="text-2xl font-bold text-white mb-4">
//               Ready to Enhance Your Cybersecurity?
//             </h2>
//             <p className="text-gray-200 mb-6">
//               Partner with CRCIDF for tailored security solutions and expert guidance
//             </p>
//             <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//               Schedule Consultation
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }






import { useEffect } from "react";
import { 
  Microscope, 
  Shield, 
  BookOpen, 
  Laptop, 
  Users, 
  Wrench,  // Changed from Tool
  Network, 
  ClipboardList, 
  Lock, 
  Megaphone 
} from 'lucide-react';

export default function KeyServices() {
  useEffect(() => {
    document.title = "Key Services | CRCIDF";
  }, []);

  const services = [
    {
      icon: <Microscope className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Cyber Research & Development",
      description: "Pioneering innovative solutions in cybersecurity through cutting-edge research"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />,
      title: "Cyber Capacity Building",
      description: "Developing SOPs, training programs, and e-learning content for skill enhancement"
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-600 dark:text-purple-400" />, // Changed to Wrench
      title: "Cyber Tool Development",
      description: "Designing and implementing custom cybersecurity tools and intern programs"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-red-600 dark:text-red-400" />,
      title: "Forensic Investigation Support",
      description: "Providing OSINT, digital forensic assistance, and investigative advocacy"
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
      title: "Policy Documentation",
      description: "DPR, RFP/EoI preparation, and visionary document design/implementation"
    },
    {
      icon: <Laptop className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
      title: "Cyber Lab Integration",
      description: "End-to-end setup and integration of advanced cybersecurity laboratories"
    },
    {
      icon: <Network className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Advanced Training Programs",
      description: "Organizing workshops/webinars on emerging cyber domains"
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      title: "Human Capital Deployment",
      description: "Specialized cybersecurity workforce allocation and management"
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Security Audits & Response",
      description: "Comprehensive VAPT, security audits, and incident response services"
    },
    {
      icon: <Megaphone className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
      title: "Cyber Hygiene Advocacy",
      description: "Public awareness programs on digital safety and online wellbeing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">Our Key Services</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Empowering academia, corporations, and law enforcement with comprehensive cybersecurity solutions
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Enhance Your Cybersecurity?
            </h2>
            <p className="text-gray-200 mb-6">
              Partner with CRCIDF for tailored security solutions and expert guidance
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
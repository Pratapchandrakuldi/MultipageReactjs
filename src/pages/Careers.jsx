import { Briefcase, GraduationCap, UserPlus, Code2, ShieldCheck, Mail } from 'lucide-react';

export default function Careers() {
  const internshipBenefits = [
    "Mentorship from experienced professionals",
    "Exposure to cutting-edge technologies and research",
    "Participation in live projects and events",
    "Collaboration with law enforcement agencies",
    "Certificate of completion"
  ];

  const careerAreas = [
    "Cybersecurity Research",
    "Digital Forensics",
    "Project Management",
    "Threat Analysis",
    "Policy Development",
    "Training & Capacity Building"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center justify-center gap-2">
            <Briefcase className="w-10 h-10" />
            Careers & Internships
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join the Fight Against Cybercrime
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Internship Section */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <h2 className="text-2xl font-bold">Internship Opportunities</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We welcome students and recent graduates to apply for internships in various domains including 
              cyber R&D, digital forensics, OSINT, and security audits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {internshipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <UserPlus className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Career Opportunities */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-blue-500" />
              <h2 className="text-2xl font-bold">Career Opportunities</h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're seeking professionals in various cybersecurity domains to join our mission-driven team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careerAreas.map((area, index) => (
                <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                  <span className="text-gray-700 dark:text-gray-300">{area}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How to Apply */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-500" />
              <h2 className="text-2xl font-bold">How to Apply</h2>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Submit your application materials to our HR team:</p>
              
              <a 
                href="mailto:hr@crcidf.org" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                hr@crcidf.org
              </a>

              <p className="mt-4">Include in your application:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Updated resume/CV</li>
                <li>Cover letter specifying your interests</li>
                <li>Relevant certifications (if any)</li>
                <li>Academic transcripts (for internships)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
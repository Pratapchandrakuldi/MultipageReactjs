// components/sections/ResearchAreas.jsx
export default function ResearchAreas() {
    const researchTopics = [
      "AI-Powered Threat Detection",
      "Blockchain Security",
      "IoT Device Protection",
      "Cloud Security Architecture",
      "Quantum Cryptography",
      "Cyber Threat Intelligence"
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Pioneering research in emerging cybersecurity domains</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchTopics.map((topic, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="text-lg font-semibold text-blue-800">{topic}</h3>
                <p className="text-gray-600 mt-2">Ongoing research · Latest papers</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
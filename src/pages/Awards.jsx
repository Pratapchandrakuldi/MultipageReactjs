import { Award, Download } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      title: "Lifetime Achievement Award",
      link: "https://forms.gle/4aHDuZs2inYYadEg8"
    },
    {
      title: "Cyber Star Award",
      link: "https://forms.gle/PVzomuBDwt4RPj1V8"
    },
    {
      title: "Best Cybercrime Investigator Award",
      link: "https://forms.gle/r7AQkVFaqUeEM7ya9"
    },
    {
      title: "Best Cyber Police Station Award",
      link: "https://forms.gle/ia1BLKWMiq6j4s9A8"
    },
    {
      title: "Cyber Champion Award",
      link: "https://forms.gle/LVzZcgTHmTwoQccE8"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center justify-center gap-2">
            <Award className="w-10 h-10" />
            Cyber Policing Awards 2021
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Recognizing Excellence in Cyber Crime Investigation & Prevention
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Objective Section */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Objective</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
              <li>Recognize Indian Law Enforcement officials from Constabulary to DG rank</li>
              <li>Honor excellence in complaint handling & fast disposal mechanisms</li>
              <li>Acknowledge outstanding cybercrime investigation & incident response</li>
              <li>Recognize policy formulation & modernization implementation</li>
              <li>Appreciate innovative technology solutions for cyber crime prevention</li>
              <li>Highlight capacity building and training initiatives</li>
            </ul>
          </section>

          {/* Award Categories */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Award Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <a
                  key={index}
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                    {award.title}
                  </h3>
                </a>
              ))}
            </div>
          </section>

          {/* Organizers */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Organized & Powered By</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "CRCIDF",
                "ISEA (CDAC-Hyd.)",
                "Cyber Peace Foundation",
                "International Justice Mission (IJM)",
                "Prodiscover",
                "MSAB"
              ].map((org, index) => (
                <div key={index} className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{org}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Download Section */}
          <div className="text-center mt-8">
            <a
              href="src/assets/Awards/CONCLAVE 3.0 awards.pdf"  // Update with actual PDF path
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Calendar, Clock, Download, Video } from 'lucide-react';

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            CRCIDF Events
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            National Level Conclaves on Cyber Policing Best Practices
          </p>
        </header>

        {/* Events Container */}
        <div className="space-y-20">
          {/* 2021 Conclave */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Event Details */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  National Level Conclave 3.0 (2021)
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                    <span>3rd, 4th & 5th December 2021</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-blue-500" />
                    <span>10:00 AM onwards (IST)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Collaborators
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>C-DAC – ISEA</li>
                    <li>Cyber Peace Foundation (CPF)</li>
                    <li>International Justice Mission (IJM)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Registration Links
                  </h3>
                  <div className="space-y-2">
                    <a href="https://forms.gle/mbRJn3HmSanqLMXKA" 
                       className="block bg-green-100 dark:bg-green-900 p-4 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition">
                      <span className="text-green-600 dark:text-green-400 font-medium">For LEA's</span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">(Free Registration)</span>
                    </a>
                    <a href="https://www.meraevents.com/event/crcidf-national-level-conclave-3-0" 
                       className="block bg-blue-100 dark:bg-blue-900 p-4 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">For Non-LEA's</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <a href="src/assets/Events/Conclave 3.0.pdf" 
                     className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </a>
                </div>
              </div>

              {/* Video Placeholder */}
              <div className="w-full md:w-1/3 bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
          </section>

          {/* 2020 Conclave */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Event Details */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  National Level Conclave 2.0 (2020)
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                    <span>15th – 17th October 2020</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-blue-500" />
                    <span>10:00 AM onwards (IST)</span>
                  </div>
                </div>

                {/* ... Similar structure as 2021 event ... */}
                
                {/* Additional OSINT CTF Section */}
                <div className="space-y-2">
                  <a href="https://forms.gle/fQBvnLXMw64YKh5S7" 
                     className="block bg-purple-100 dark:bg-purple-900 p-4 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition">
                    <span className="text-purple-600 dark:text-purple-400 font-medium">OSINT – CTF 2020 Registration</span>
                  </a>
                </div>

                <div className="pt-4">
                  <a href="src/assets/Events/National Level Virtual Conclave 2.0.pdf" 
                     className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </a>
                </div>
              </div>

              {/* Video Placeholder */}
              <div className="w-full md:w-1/3 bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* General Information */}
        <div className="mt-16 text-center text-gray-600 dark:text-gray-300">
          <p className="mb-4">All participants receive e-certificates from CRCIDF-ISEA-CPF-IJM</p>
          <p>For queries: events@crcidf.org | Follow us on social media for updates</p>
        </div>
      </div>
    </div>
  );
}
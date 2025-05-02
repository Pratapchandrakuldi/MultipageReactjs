// components/sections/Publications.jsx
export default function Publications() {
    const publications = [
      {
        title: "AI in Cybersecurity: Trends and Challenges",
        authors: "Dr. Smith, Dr. Johnson",
        journal: "Journal of Cyber Defense",
        year: 2024
      },
      {
        title: "Blockchain-Based Security Protocols",
        authors: "Prof. Lee, Dr. Chen",
        journal: "IEEE Security Transactions",
        year: 2023
      }
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Publications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Leading research in cybersecurity academia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-2">{pub.authors}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{pub.journal}</span>
                  <span>{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              View All Publications →
            </button>
          </div>
        </div>
      </section>
    );
  }
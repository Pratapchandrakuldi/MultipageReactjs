// components/sections/GlobalImpact.jsx
export default function GlobalImpact() {
    const stats = [
      { number: "150+", label: "Countries Protected" },
      { number: "1M+", label: "Threats Neutralized" },
      { number: "500+", label: "Enterprise Partners" },
      { number: "24/7", label: "Support Coverage" }
    ];
  
    return (
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Global Impact</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Protecting digital infrastructure worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-blue-200 max-w-3xl mx-auto">
              Our global network of security experts and AI-driven systems provide comprehensive protection 
              for organizations across all industries and regions.
            </p>
          </div>
        </div>
      </section>
    );
  }
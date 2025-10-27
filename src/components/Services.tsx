import { Video, Target, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

const icons = [Video, Target, Users];

export function Services() {
  const { content } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-16 text-center">
          {content.services.headline}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {content.services.items.map((service, index) => {
            const Icon = icons[index];
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="text-green-700 font-semibold hover:text-green-800 transition-colors"
                  >
                    {isExpanded ? '− Show Less' : '+ Learn More'}
                  </button>

                  {isExpanded && (
                    <ul className="mt-6 space-y-3 text-left text-sm text-gray-700">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

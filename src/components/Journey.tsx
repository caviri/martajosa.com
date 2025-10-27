import { Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export function Journey() {
  const { content } = useLanguage();
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['experience']));

  const toggleSection = (section: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-16 text-center">
          {content.journey.headline}
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('experience')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{content.journey.experience.title}</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  openSections.has('experience') ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openSections.has('experience') ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6 space-y-4">
                {content.journey.experience.items.map((item, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-4 py-2">
                    <p className="text-sm text-green-700 font-semibold">{item.period}</p>
                    <p className="text-lg font-bold text-gray-800">{item.role}</p>
                    <p className="text-gray-600">{item.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('education')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{content.journey.education.title}</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  openSections.has('education') ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openSections.has('education') ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6 space-y-4">
                {content.journey.education.items.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <p className="text-lg font-bold text-gray-800">{item.degree}</p>
                    <p className="text-gray-600">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('publications')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{content.journey.publications.title}</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  openSections.has('publications') ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openSections.has('publications') ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6 space-y-3">
                {content.journey.publications.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 py-2">
                    <span className="text-amber-600 mt-1">★</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

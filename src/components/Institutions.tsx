import { useLanguage } from '../context/LanguageContext';

export function Institutions() {
  const { content } = useLanguage();

  const institutions = [
    {
      name: 'CREAF',
      logo: 'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
      url: '#'
    },
    {
      name: 'Pompeu Fabra University',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
      url: '#'
    },
    {
      name: 'Autonomous University of Barcelona',
      logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
      url: '#'
    },
    {
      name: 'University of Barcelona',
      logo: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
      url: '#'
    },
    {
      name: 'GEPEC-EdC',
      logo: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
      url: '#'
    },
    {
      name: 'Oikos MSP',
      logo: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=300&h=200',
      url: '#'
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          {content.institutions.headline}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {content.institutions.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
                <img
                  src={institution.logo}
                  alt={`${institution.name} logo`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

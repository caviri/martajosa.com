import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VideoBackground } from './VideoBackground';
import { calculateParallax } from '../hooks/useParallax';

interface PortfolioProps {
  scrollY: number;
}

export function Portfolio({ scrollY }: PortfolioProps) {
  const { content } = useLanguage();

  const placeholderImages = [
    'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <VideoBackground
        fallbackImage="https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=1920"
        fallbackColor="#3d5a2c"
        parallaxOffset={calculateParallax(scrollY, -0.2)}
      />

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center drop-shadow-lg">
          {content.portfolio.headline}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {content.portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={placeholderImages[index]}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-sm text-green-700 font-semibold mb-3">{project.role}</p>
                <p className="text-gray-600 mb-4">{project.summary}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

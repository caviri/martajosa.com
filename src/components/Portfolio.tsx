import { ExternalLink, FileText, Image } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VideoBackground } from './VideoBackground';
import { calculateParallax } from '../hooks/useParallax';

interface PortfolioProps {
  scrollY: number;
}

export function Portfolio({ scrollY }: PortfolioProps) {
  const { content } = useLanguage();

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

        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href={content.portfolio.portfolioLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 w-full md:w-80 h-64"
          >
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              {content.portfolio.portfolioButton}
            </h3>
            <ExternalLink className="w-5 h-5 text-green-600 mt-2" />
          </a>

          <a
            href={content.portfolio.infographicsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 w-full md:w-80 h-64"
          >
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Image className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              {content.portfolio.infographicsButton}
            </h3>
            <ExternalLink className="w-5 h-5 text-green-600 mt-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

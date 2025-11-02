import { useLanguage } from '../context/LanguageContext';
import { VideoBackground } from './VideoBackground';
import { calculateParallax } from '../hooks/useParallax';

interface AboutProps {
  scrollY: number;
}

export function About({ scrollY }: AboutProps) {
  const { content } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground
        fallbackImage="https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1920"
        fallbackColor="#2d5016"
        parallaxOffset={calculateParallax(scrollY, -0.3)}
      />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 shadow-xl ring-4 ring-green-200">
              <img
                src="/1757320188537.jpeg"
                alt="Marta Josa"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 text-center">
              {content.about.headline}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
            {content.about.body}
          </p>
        </div>
      </div>
    </section>
  );
}

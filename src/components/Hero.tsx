import { ArrowDown, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VideoBackground } from './VideoBackground';
import { calculateParallax } from '../hooks/useParallax';

interface HeroProps {
  scrollY: number;
}

export function Hero({ scrollY }: HeroProps) {
  const { content } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground
        fallbackImage="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1920"
        fallbackColor="#87CEEB"
        parallaxOffset={calculateParallax(scrollY, -0.5)}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-black/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <p className="text-3xl md:text-5xl font-bold mb-8 drop-shadow-lg animate-fade-in tracking-wide">
          Marta Josa
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          {content.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-md animate-fade-in-delay">
          {content.hero.tagline}
        </p>
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 drop-shadow-md leading-relaxed animate-fade-in-delay-2">
          {content.hero.intro}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            {content.hero.cta_primary}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white/90 hover:bg-white text-green-800 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {content.hero.cta_secondary}
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white drop-shadow-lg" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/20 pointer-events-none" />
    </section>
  );
}

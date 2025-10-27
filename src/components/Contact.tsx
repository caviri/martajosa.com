import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VideoBackground } from './VideoBackground';
import { calculateParallax } from '../hooks/useParallax';

interface ContactProps {
  scrollY: number;
}

export function Contact({ scrollY }: ContactProps) {
  const { content } = useLanguage();

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <VideoBackground
        fallbackImage="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920"
        fallbackColor="#2d1810"
        parallaxOffset={calculateParallax(scrollY, -0.1)}
      />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            {content.contact.headline}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 drop-shadow-md leading-relaxed">
            {content.contact.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={`mailto:${content.contact.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-800 rounded-full font-semibold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <Mail className="w-6 h-6" />
              {content.contact.emailLabel}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://linkedin.com/in/martajosabordell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              {content.contact.linkedinLabel}
            </a>
            <a
              href="https://www.instagram.com/lovellaverda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@lovellaverda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
}

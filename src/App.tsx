import { LanguageProvider } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Institutions } from './components/Institutions';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useParallax } from './hooks/useParallax';

function AppContent() {
  const scrollY = useParallax();

  return (
    <>
      <LanguageSwitcher />
      <Hero scrollY={scrollY} />
      <About scrollY={scrollY} />
      {/* <Institutions /> */}
      <Services />
      <Portfolio scrollY={scrollY} />
      {/* <Journey /> */}
      <Contact scrollY={scrollY} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <AppContent />
      </div>
    </LanguageProvider>
  );
}

export default App;

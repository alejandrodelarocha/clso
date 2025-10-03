import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './sections/Navbar/Navbar';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import './App.css';
import './index.css';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const handleLanguageChange = (lang: 'es' | 'en') => {
    console.log('App: Language changed to', lang);
    setLanguage(lang);
  };

  return (
    <LanguageProvider defaultLanguage={language} onLanguageChange={handleLanguageChange}>
      <div className="app">
        <Navbar />
        <main>
          <Header />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;

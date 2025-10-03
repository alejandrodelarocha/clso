import React, { useState, useContext } from "react";
import { useLanguage } from '../../context/LanguageContext';
import "./Navbar.css";

const Navbar: React.FC = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  console.log('Current language in Navbar:', language); // Debug log

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { key: 'nav_about', href: "#about" },
    { key: 'nav_services', href: "#services" },
    { key: 'nav_portfolio', href: "#portfolio" },
    { key: 'nav_contact', href: "#contact" },
  ];
  
  const handleLanguageChange = (lang: 'es' | 'en') => {
    console.log('Changing language to:', lang);
    changeLanguage(lang);
  };

  return (
    <nav className="fixed w-full bg-[#499f92] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#page-top" className="flex-shrink-0 brightness-300" style={{marginLeft: "20px"}}>
            <img
              src="assets/img/logo.png"
              alt="CLSO Ingeniería Eléctrica"
              className="h-10 w-[100px] ml-20 pl-2 filter brightness-150"
              style={{
                filter: "brightness(3000%) !important",
              }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                style={{color: "white", fontSize: "16px", fontWeight: "bold", margin: "10px"}}
              >
                {t(item.key)}
              </a>
            ))}

            <div className="flex space-x-4 ml-4">
              <button 
                onClick={() => handleLanguageChange('es')}
                className={`h-5 w-5 cursor-pointer hover:opacity-80 ${language === 'es' ? 'ring-2 ring-white rounded-full' : ''}`}
                aria-label="Cambiar a español"
                style={{color: "white", fontSize: "16px", fontWeight: "bold", margin: "10px", borderRadius: "50%", boxShadow: "0 0 15px #fff, 0 0 35px #00eaff, 0 0 50px #00aaff"}}
              >
                <img
                  src="/assets/img/mx.svg"
                  alt="Español"
                  className="h-full w-full"
                />
              </button>
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`h-5 w-5 cursor-pointer hover:opacity-80 ${language === 'en' ? 'ring-2 ring-white rounded-full' : ''}`}
                aria-label="Switch to English"
                style={{color: "white", fontSize: "16px", fontWeight: "bold", margin: "10px", borderRadius: "50%", boxShadow: "0 0 15px #fff, 0 0 35px #00eaff, 0 0 50px #00aaff"}}
              >
                <img
                  src="/assets/img/us.svg"
                  alt="English"
                  className="h-full w-full"
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#3b7e72] px-4 pt-2 pb-4 space-y-2 shadow-lg rounded-b-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-white font-semibold hover:text-gray-200 transition"
              onClick={() => setIsOpen(false)}
              style={{color: "white", fontSize: "16px", fontWeight: "bold", padding: "10px"}}
            >
              {t(item.key)}
            </a>
          ))}

          <div className="flex space-x-4 mt-2">
            <button 
              onClick={() => handleLanguageChange('es')}
              className={`h-5 w-5 cursor-pointer hover:opacity-80 ${language === 'es' ? 'ring-2 ring-white rounded-full' : ''}`}
              aria-label="Cambiar a español"
              style={{color: "white", fontSize: "16px", fontWeight: "bold", margin: "10px"}}
            >
              <img
                src="/assets/img/mx.svg"
                alt="Español"
                className="h-full w-full"
              />
            </button>
            <button 
              onClick={() => handleLanguageChange('en')}
              className={`h-5 w-5 cursor-pointer hover:opacity-80 ${language === 'en' ? 'ring-2 ring-white rounded-full' : ''}`}
              aria-label="Switch to English"
              style={{color: "white", fontSize: "16px", fontWeight: "bold", margin: "10px"}}
            >
              <img
                src="/assets/img/us.svg"
                alt="English"
                className="h-full w-full"
              />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

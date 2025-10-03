import React from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('footer_home'), to: 'intro' },
    { name: t('footer_about'), to: 'about' },
    { name: t('footer_services'), to: 'services' },
    { name: t('footer_portfolio'), to: 'portfolio' },
    { name: t('footer_contact'), to: 'contact' },
  ];

  const services = [
    t('footer_service_1'),
    t('footer_service_2'),
    t('footer_service_3'),
    t('footer_service_4'),
    t('footer_service_5'),
  ];

  const contactInfo = [
    { 
      icon: 'fas fa-map-marker-alt',
      text: t('footer_address')
    },
    { 
      icon: 'fas fa-phone-alt',
      text: t('footer_phone'),
      link: 'tel:+5215512345678'
    },
    { 
      icon: 'fas fa-envelope',
      text: t('footer_email'),
      link: 'mailto:contacto@clso.com.mx'
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo mb-3">
                  <img 
                    src="/assets/img/logo.png" 
                    alt="CLSO Ingeniería Eléctrica" 
                    className="img-fluid"
                    style={{ maxWidth: '180px' }}
                  />
                </div>
                <p className="footer-about">
                  {t('footer_about_text')}
                </p>
                <div className="social-links mt-4">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">{t('footer_quick_links')}</h3>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.to} 
                        smooth={true} 
                        duration={500}
                        className="footer-link"
                      >
                        <i className="fas fa-chevron-right"></i> {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">{t('footer_services')}</h3>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a href="#services" className="footer-link">
                        <i className="fas fa-chevron-right"></i> {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">{t('footer_contact')}</h3>
                <ul className="footer-contact">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="d-flex align-items-start">
                      <div className="contact-icon">
                        <i className={item.icon}></i>
                      </div>
                      {item.link ? (
                        <a href={item.link} className="contact-link">
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="copyright-text mb-3 mb-md-0">
                &copy; {currentYear} {t('footer_copyright')}
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-legal-links">
                <a href="#" className="legal-link">
                  {t('footer_privacy')}
                </a>
                <a href="#" className="legal-link">
                  {t('footer_terms')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

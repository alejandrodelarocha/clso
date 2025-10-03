import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Services.css';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: 'fas fa-bolt',
      title: t('services_1_title'),
      description: t('services_1_desc'),
      delay: '100'
    },
    {
      icon: 'fas fa-solar-panel',
      title: t('services_2_title'),
      description: t('services_2_desc'),
      delay: '200'
    },
    {
      icon: 'fas fa-tools',
      title: t('services_3_title'),
      description: t('services_3_desc'),
      delay: '300'
    },
    {
      icon: 'fas fa-chart-line',
      title: t('services_4_title'),
      description: t('services_4_desc'),
      delay: '400'
    },
    {
      icon: 'fas fa-lightbulb',
      title: t('services_5_title'),
      description: t('services_5_desc'),
      delay: '100'
    },
    {
      icon: 'fas fa-shield-alt',
      title: t('services_6_title'),
      description: t('services_6_desc'),
      delay: '200'
    }
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="display-5 fw-bold">{t('services_title')}</h2>
          <div className="divider">
            <span className="line"></span>
            <span className="icon"><i className="fas fa-bolt"></i></span>
            <span className="line"></span>
          </div>
          <p className="lead">{t('services_subtitle')}</p>
        </div>

        <div className="row g-4">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card p-6 bg-white rounded-lg shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="service-icon text-4xl mb-4 text-yellow-500">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>


        </div>

      </div>
    </section>
  );
};

export default Services;

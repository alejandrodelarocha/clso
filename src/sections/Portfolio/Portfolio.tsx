import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: {
    client: string;
    date: string;
    description: string;
    technologies: string[];
    gallery: string[];
  };
}

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Industrial Automation',
      description: 'Automated control systems for factories and warehouses.',
      image: '/assets/img/portfolio/01.jpg',
      details: {
        client: t('portfolio_project_1_client'),
        date: '2023',
        description: t('portfolio_project_1_desc'),
        technologies: ['Automatización', 'Control Industrial', 'SCADA'],
        gallery: ['/assets/img/portfolio/industrial-1.jpg']
      }
    },
    {
      id: 2,
      title: 'Commercial Lighting',
      description: 'LED solutions for energy-efficient commercial spaces.',
      image: '/assets/img/portfolio/02.jpg',
      details: {
        client: t('portfolio_project_2_client'),
        date: '2023',
        description: t('portfolio_project_2_desc'),
        technologies: ['Iluminación LED', 'Ahorro de energía', 'Diseño'],
        gallery: ['/assets/img/portfolio/commercial-1.jpg']
      }
    },
    {
      id: 3,
      title: 'Residential Renovation',
      description: 'Complete home electrical installations with modern design.',
      image: '/assets/img/portfolio/03.jpg',
      details: {
        client: t('portfolio_project_3_client'),
        date: '2023',
        description: t('portfolio_project_3_desc'),
        technologies: ['Instalación eléctrica', 'Diseño', 'Automatización'],
        gallery: ['/assets/img/portfolio/03.jpg']
      }
    },
    {
      id: 4,
      title: 'Solar Energy',
      description: 'Sustainable photovoltaic solutions for residential and commercial.',
      image: '/assets/img/portfolio/04.jpg',
      details: {
        client: t('portfolio_project_4_client'),
        date: '2023',
        description: t('portfolio_project_4_desc'),
        technologies: ['Energía solar', 'Paneles fotovoltaicos', 'Sostenibilidad'],
        gallery: ['/assets/img/portfolio/04.jpg']
      }
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t('portfolio_title')}</h2>
          <div className="flex items-center justify-center gap-2 my-4">
            <span className="h-[2px] w-12 bg-yellow-400"></span>
            <i className="fas fa-bolt text-yellow-400"></i>
            <span className="h-[2px] w-12 bg-yellow-400"></span>
          </div>
          <p className="text-lg text-gray-600">{t('portfolio_subtitle')}</p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-md hover:bg-yellow-400 hover:text-black transition"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Current project */}
          {projects.length > 0 && (
            <div
              className="relative w-full max-w-3xl mx-auto cursor-pointer rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-96 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white p-4">
                <h4 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h4>
                <p className="text-sm">{projects[currentIndex].description}</p>
              </div>
            </div>
          )}

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-md hover:bg-yellow-400 hover:text-black transition"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} t={t} />
      )}
    </section>
  );
};

export default Portfolio;

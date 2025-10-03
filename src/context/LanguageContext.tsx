import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of our translation strings
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

// Define the context type
type LanguageContextType = {
  language: 'es' | 'en';
  changeLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => string;
};

// Default translations
const translations: Translations = {
  en: {
    // Navbar
    'nav_about': 'About',
    'nav_services': 'Services',
    'nav_portfolio': 'Portfolio',
    'nav_contact': 'Contact',
    
    // Header
    'header_title': 'Electrical Engineering Solutions',
    'header_subtitle': 'Innovative and reliable electrical solutions for your business',
    'header_cta': 'Learn More',
    
    // About
    'about_title': 'About Us',
    'about_image_alt': 'Our Team',
    'about_years_experience': 'Years Experience',
    'about_subtitle': 'Your Trusted Electrical Engineering Partner',
    'about_description_1': 'CLSO Ingeniería Eléctrica is a leading provider of electrical engineering solutions with over 15 years of experience in the industry. We specialize in delivering high-quality electrical systems design, installation, and maintenance services.',
    'about_description_2': 'Our team of certified professionals is committed to excellence, safety, and innovation in every project we undertake. We work closely with our clients to understand their unique needs and deliver customized solutions that exceed expectations.',
    'about_feature_1_title': 'Expert Team',
    'about_feature_1_desc': 'Certified professionals with extensive experience',
    'about_feature_2_title': 'Quality Service',
    'about_feature_2_desc': 'Commitment to excellence in every project',
    'about_feature_3_title': 'Innovation',
    'about_feature_3_desc': 'Cutting-edge solutions for modern challenges',
    'about_feature_4_title': 'Customer Focus',
    'about_feature_4_desc': 'Personalized service tailored to your needs',
    'about_cta_contact': 'Contact Us',
    'about_cta_portfolio': 'View Our Work',
    
    // Services
    'services_title': 'Our Services',
    'services_subtitle': 'Comprehensive electrical engineering solutions',
    'services_1_title': 'Electrical Design',
    'services_1_desc': 'Custom electrical system designs for residential, commercial, and industrial applications.',
    'services_2_title': 'Solar Energy',
    'services_2_desc': 'Sustainable solar power solutions to reduce energy costs and carbon footprint.',
    'services_3_title': 'Maintenance',
    'services_3_desc': 'Preventive and corrective maintenance services to ensure optimal performance.',
    'services_4_title': 'Energy Efficiency',
    'services_4_desc': 'Audits and solutions to improve energy efficiency and reduce consumption.',
    'services_5_title': 'Lighting Design',
    'services_5_desc': 'Innovative lighting solutions for aesthetics and functionality.',
    'services_6_title': 'Safety Systems',
    'services_6_desc': 'Installation and maintenance of electrical safety systems.',
    'services_cta': 'Get a Free Quote',
    
    // Portfolio
    'portfolio_title': 'Our Portfolio',
    'portfolio_subtitle': 'Explore our recent projects',
    'portfolio_filter_all': 'All',
    'portfolio_filter_industrial': 'Industrial',
    'portfolio_filter_commercial': 'Commercial',
    'portfolio_filter_residential': 'Residential',
    'portfolio_filter_solar': 'Solar',
    'portfolio_modal_client': 'Client',
    'portfolio_modal_date': 'Date',
    'portfolio_modal_category': 'Category',
    'portfolio_modal_description': 'Project Description',
    'portfolio_modal_technologies': 'Technologies Used',
    
    // Contact
    'contact_title': 'Get In Touch',
    'contact_subtitle': 'Have questions? We\'d love to hear from you.',
    'contact_info_title': 'Contact Information',
    'contact_address_title': 'Address',
    'contact_address': '1234 Electric Ave, Suite 100, Monterrey, NL, Mexico',
    'contact_email_title': 'Email Us',
    'contact_phone_title': 'Call Us',
    'contact_hours_title': 'Working Hours',
    'contact_hours': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact_follow_us': 'Follow Us',
    'contact_send_message': 'Send Us a Message',
    'contact_form_name': 'Your Name',
    'contact_form_email': 'Your Email',
    'contact_form_phone': 'Your Phone',
    'contact_form_subject': 'Subject',
    'contact_form_select': 'Select a subject',
    'contact_form_consultation': 'Consultation',
    'contact_form_quote': 'Request a Quote',
    'contact_form_service': 'Service Inquiry',
    'contact_form_other': 'Other',
    'contact_form_message': 'Your Message',
    'contact_form_sending': 'Sending',
    'contact_form_submit': 'Send Message',
    'contact_success_message': 'Your message has been sent successfully! We\'ll get back to you soon.',
    'contact_error_message': 'There was an error sending your message. Please try again later.',
    
    // Footer
    'footer_home': 'Home',
    'footer_about': 'About Us',
    'footer_services': 'Services',
    'footer_portfolio': 'Portfolio',
    'footer_contact': 'Contact',
    'footer_quick_links': 'Quick Links',
    'footer_service_1': 'Electrical Design',
    'footer_service_2': 'Solar Energy',
    'footer_service_3': 'Maintenance',
    'footer_service_4': 'Energy Efficiency',
    'footer_service_5': 'Lighting Design',
    'footer_address': '1234 Electric Ave, Suite 100, Monterrey, NL, Mexico',
    'footer_phone': '+52 1 55 1234 5678',
    'footer_email': 'contacto@clso.com.mx',
    'footer_about_text': 'CLSO Ingeniería Eléctrica is a leading provider of electrical engineering solutions with over 15 years of experience in the industry.',
    'footer_copyright': 'CLSO Ingeniería Eléctrica. All rights reserved.',
    'footer_privacy': 'Privacy Policy',
    'footer_terms': 'Terms of Service'
  },
  es: {
    // Navbar
    'nav_about': 'Nosotros',
    'nav_services': 'Servicios',
    'nav_portfolio': 'Portafolio',
    'nav_contact': 'Contacto',
    
    // Header
    'header_title': 'Soluciones en Ingeniería Eléctrica',
    'header_subtitle': 'Soluciones eléctricas innovadoras y confiables para tu negocio',
    'header_cta': 'Conoce Más',
    
    // About
    'about_title': 'Sobre Nosotros',
    'about_image_alt': 'Nuestro Equipo',
    'about_years_experience': 'Años de Experiencia',
    'about_subtitle': 'Tu Socio de Confianza en Ingeniería Eléctrica',
    'about_description_1': 'CLSO Ingeniería Eléctrica es un proveedor líder de soluciones de ingeniería eléctrica con más de 15 años de experiencia en la industria. Nos especializamos en ofrecer servicios de diseño, instalación y mantenimiento de sistemas eléctricos de alta calidad.',
    'about_description_2': 'Nuestro equipo de profesionales certificados está comprometido con la excelencia, la seguridad y la innovación en cada proyecto que emprendemos. Trabajamos estrechamente con nuestros clientes para comprender sus necesidades únicas y ofrecer soluciones personalizadas que superen sus expectativas.',
    'about_feature_1_title': 'Equipo Experto',
    'about_feature_1_desc': 'Profesionales certificados con amplia experiencia',
    'about_feature_2_title': 'Servicio de Calidad',
    'about_feature_2_desc': 'Comprometidos con la excelencia en cada proyecto',
    'about_feature_3_title': 'Innovación',
    'about_feature_3_desc': 'Soluciones de vanguardia para desafíos modernos',
    'about_feature_4_title': 'Enfoque al Cliente',
    'about_feature_4_desc': 'Servicio personalizado adaptado a tus necesidades',
    'about_cta_contact': 'Contáctanos',
    'about_cta_portfolio': 'Ver Nuestro Trabajo',
    
    // Services
    'services_title': 'Nuestros Servicios',
    'services_subtitle': 'Soluciones integrales de ingeniería eléctrica',
    'services_1_title': 'Diseño Eléctrico',
    'services_1_desc': 'Diseños personalizados de sistemas eléctricos para aplicaciones residenciales, comerciales e industriales.',
    'services_2_title': 'Energía Solar',
    'services_2_desc': 'Soluciones sostenibles de energía solar para reducir costos y huella de carbono.',
    'services_3_title': 'Mantenimiento',
    'services_3_desc': 'Servicios de mantenimiento preventivo y correctivo para garantizar un rendimiento óptimo.',
    'services_4_title': 'Eficiencia Energética',
    'services_4_desc': 'Auditorías y soluciones para mejorar la eficiencia energética y reducir el consumo.',
    'services_5_title': 'Diseño de Iluminación',
    'services_5_desc': 'Soluciones innovadoras de iluminación para estética y funcionalidad.',
    'services_6_title': 'Sistemas de Seguridad',
    'services_6_desc': 'Instalación y mantenimiento de sistemas de seguridad eléctrica.',
    'services_cta': 'Obtén una Cotización',
    
    // Portfolio
    'portfolio_title': 'Nuestro Portafolio',
    'portfolio_subtitle': 'Explora nuestros proyectos recientes',
    'portfolio_filter_all': 'Todos',
    'portfolio_filter_industrial': 'Industrial',
    'portfolio_filter_commercial': 'Comercial',
    'portfolio_filter_residential': 'Residencial',
    'portfolio_filter_solar': 'Solar',
    'portfolio_modal_client': 'Cliente',
    'portfolio_modal_date': 'Fecha',
    'portfolio_modal_category': 'Categoría',
    'portfolio_modal_description': 'Descripción del Proyecto',
    'portfolio_modal_technologies': 'Tecnologías Utilizadas',
    'portfolio_project_1_title': 'Sistema Eléctrico Industrial',
    'portfolio_project_1_client': 'Empresa Industrial Monterrey',
    'portfolio_project_1_desc': 'Diseño e implementación de un sistema eléctrico completo para una planta industrial, incluyendo tableros de distribución y sistemas de control.',
    'portfolio_project_2_title': 'Iluminación Comercial',
    'portfolio_project_2_client': 'Centro Comercial Las Américas',
    'portfolio_project_2_desc': 'Diseño e instalación de un sistema de iluminación LED de bajo consumo para un centro comercial, mejorando la eficiencia energética en un 60%.',
    'portfolio_project_3_title': 'Instalación Residencial',
    'portfolio_project_3_client': 'Casa Habitación San Pedro',
    'portfolio_project_3_desc': 'Instalación eléctrica completa para una residencia de lujo, incluyendo domótica y sistemas de seguridad.',
    'portfolio_project_4_title': 'Granja Solar',
    'portfolio_project_4_client': 'Energía Renovable S.A.',
    'portfolio_project_4_desc': 'Diseño e instalación de una granja solar de 100kW para generación de energía limpia y renovable.',
    'portfolio_project_5_title': 'Mantenimiento Industrial',
    'portfolio_project_5_client': 'Manufacturas del Norte',
    'portfolio_project_5_desc': 'Servicio de mantenimiento preventivo y correctivo para la planta de manufactura, asegurando operaciones sin interrupciones.',
    'portfolio_project_6_title': 'Oficinas Corporativas',
    'portfolio_project_6_client': 'Corporativo Financiero',
    'portfolio_project_6_desc': 'Diseño e instalación del sistema eléctrico para un edificio corporativo de 20 pisos, incluyendo sistemas de respaldo de energía.',
    'portfolio_category_industrial': 'Industrial',
    'portfolio_category_commercial': 'Comercial',
    'portfolio_category_residential': 'Residencial',
    'portfolio_category_solar': 'Solar',
    
    // Contact
    'contact_title': 'Contáctanos',
    'contact_subtitle': '¿Tienes preguntas? Nos encantaría saber de ti.',
    'contact_info_title': 'Información de Contacto',
    'contact_address_title': 'Dirección',
    'contact_address': 'Av. Eléctrica 1234, Col. Centro, Monterrey, NL, México',
    'contact_email_title': 'Correo Electrónico',
    'contact_phone_title': 'Teléfono',
    'contact_hours_title': 'Horario de Atención',
    'contact_hours': 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    'contact_follow_us': 'Síguenos',
    'contact_send_message': 'Envíanos un Mensaje',
    'contact_form_name': 'Tu Nombre',
    'contact_form_email': 'Tu Correo Electrónico',
    'contact_form_phone': 'Tu Teléfono',
    'contact_form_subject': 'Asunto',
    'contact_form_select': 'Selecciona un asunto',
    'contact_form_consultation': 'Consulta',
    'contact_form_quote': 'Solicitar Cotización',
    'contact_form_service': 'Consulta de Servicio',
    'contact_form_other': 'Otro',
    'contact_form_message': 'Tu Mensaje',
    'contact_form_sending': 'Enviando',
    'contact_form_submit': 'Enviar Mensaje',
    'contact_success_message': '¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo pronto.',
    'contact_error_message': 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
    
    // Footer
    'footer_home': 'Inicio',
    'footer_about': 'Nosotros',
    'footer_services': 'Servicios',
    'footer_portfolio': 'Portafolio',
    'footer_contact': 'Contacto',
    'footer_quick_links': 'Enlaces Rápidos',
    'footer_service_1': 'Diseño Eléctrico',
    'footer_service_2': 'Energía Solar',
    'footer_service_3': 'Mantenimiento',
    'footer_service_4': 'Eficiencia Energética',
    'footer_service_5': 'Diseño de Iluminación',
    'footer_address': 'Av. Eléctrica 1234, Col. Centro, Monterrey, NL, México',
    'footer_phone': '+52 1 55 1234 5678',
    'footer_email': 'contacto@clso.com.mx',
    'footer_about_text': 'CLSO Ingeniería Eléctrica es un proveedor líder de soluciones de ingeniería eléctrica con más de 15 años de experiencia en la industria.',
    'footer_copyright': 'CLSO Ingeniería Eléctrica. Todos los derechos reservados.',
    'footer_privacy': 'Política de Privacidad',
    'footer_terms': 'Términos de Servicio'
  }
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
  defaultLanguage?: 'es' | 'en';
  onLanguageChange?: (lang: 'es' | 'en') => void;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLanguage = 'es',
  onLanguageChange
}) => {
  const [language, setLanguage] = useState<'es' | 'en'>(defaultLanguage);

  // Function to change the language
  const changeLanguage = (lang: 'es' | 'en') => {
    console.log('Language changed to:', lang);
    setLanguage(lang);
    localStorage.setItem('language', lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  // Check for saved language preference or browser language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'es' | 'en' | null;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // Default to browser language if available, otherwise use the provided default
      const browserLanguage = navigator.language.split('-')[0] as 'es' | 'en';
      if (browserLanguage === 'es' || browserLanguage === 'en') {
        setLanguage(browserLanguage);
      }
    }
  }, []);

  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(() => ({
    language,
    changeLanguage,
    t,
  }), [language]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

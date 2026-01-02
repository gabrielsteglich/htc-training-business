import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Download, FileText, Settings, Briefcase, Award } from 'lucide-react';
import { Button } from '../components/Button';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { services_page } = t;

  useEffect(() => {
    document.title = language === 'pt' ? "Serviços | HTC Training" : "Services | HTC Training";
  }, [language]);

  // Split services list into Training (first 8) and Consulting (rest)
  const trainingServices = t.services_list.slice(0, 8);
  const consultingServices = t.services_list.slice(8);

  // Image Mapping for Consulting Services
  const CONSULTING_IMAGES: Record<string, string> = {
    'certification': "/images/service-certification.png",
    'manuals': "/images/service-manuals.png",
    'audits-quality': "/images/service-audit.png",
    'psychology-selection': "/images/service-psychology.png"
  };

  return (
    <div className="w-full pt-20 bg-slate-50">
      {/* Hero Header - Compact Version */}
      <div className="bg-aviation-navy py-16 text-center text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/header-services.png"
            alt="Sky texture"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/50 via-aviation-navy/80 to-aviation-navy"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1 mb-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-aviation-red font-bold text-xs tracking-widest uppercase">{language === 'pt' ? 'Portfólio Completo' : 'Full Portfolio'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{services_page.title}</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
            {services_page.subtitle}
          </p>
        </div>
      </div>

      {/* SECTION 1: OPERATIONAL TRAINING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="mb-12 flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-2 h-10 bg-aviation-red rounded-full"></div>
          <h2 className="text-3xl font-bold text-aviation-navy">{services_page.operationalTitle}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {trainingServices.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-aviation-navy group-hover:bg-aviation-red transition-colors duration-300"></div>

              <div className="p-6 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-aviation-navy transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-aviation-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-aviation-navy group-hover:text-aviation-blue transition-colors">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{services_page.includes}</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3 h-3 text-aviation-red mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
                <NavLink
                  to={
                    service.id === 'crm-full' ? '/training#crm' :
                      service.id === 'avsec-full' ? '/training#avsec' :
                        service.id === 'dgr-full' ? '/training#dgr' :
                          '/contact'
                  }
                  className="flex items-center justify-between text-aviation-navy font-bold text-xs uppercase tracking-wider hover:text-aviation-red transition-colors"
                >
                  {t.buttons.details} <ArrowRight className="w-3.5 h-3.5" />
                </NavLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SECTION 2: TAILORED SOLUTIONS (FEATURE STRIP) */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2067&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hangar" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-block px-3 py-1 border border-aviation-red/50 rounded-full bg-aviation-red/10 mb-4">
              <span className="text-aviation-red text-xs font-bold uppercase tracking-widest">{services_page.tailoredTitle}</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white leading-tight">{services_page.tailoredDesc1}</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">{services_page.tailoredDesc2}</p>
            <NavLink to="/corporate">
              <Button variant="primary" className="shadow-lg shadow-aviation-red/20">{t.buttons.learnMore}</Button>
            </NavLink>
          </motion.div>
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Settings className="w-16 h-16 text-aviation-red mb-4" />
              <h3 className="text-xl font-bold mb-2">{services_page.tailoredBoxTitle}</h3>
              <p className="text-sm text-slate-300">{services_page.tailoredBoxDesc}</p>
            </div>
          </motion.div>
        </div>
      </div>


      {/* SECTION 3: CONSULTING & ADVISORY */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 flex items-center gap-4 justify-end md:justify-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-aviation-navy">{services_page.consultingTitle}</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {consultingServices.map((service) => (
              <motion.div
                key={service.id}
                className="group flex flex-col sm:flex-row bg-slate-50 hover:bg-white rounded-xl border border-slate-100 hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <div className="sm:w-1/3 relative min-h-[250px] sm:min-h-0">
                  <img
                    src={CONSULTING_IMAGES[service.id]}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-aviation-navy/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                <div className="md:w-2/3 p-8">
                  <h3 className="text-xl font-bold text-aviation-navy mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/contact" className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors inline-flex items-center">
                    {t.buttons.schedule} <ArrowRight className="w-4 h-4 ml-1" />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Catalog Download / Additional Info */}
      <div className="bg-aviation-gray py-20 border-t border-slate-200">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-aviation-navy mb-4">{services_page.catalogTitle}</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {services_page.catalogDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/contact">
              <Button variant="primary" className="px-8 shadow-lg shadow-aviation-red/20">{t.buttons.contact}</Button>
            </NavLink>
            <NavLink to="/contact">
              <Button variant="white" className="border border-slate-200 text-slate-700 hover:text-aviation-navy">
                <Download className="w-4 h-4 mr-2 inline" />
                {t.buttons.catalog}
              </Button>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
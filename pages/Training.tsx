import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Check, Clock, Globe, Award, FileCheck, BookOpen, ChevronRight } from 'lucide-react';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { getAssetPath } from '../utils/assetPath';

import { useLocation } from 'react-router-dom';

export const Training: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const location = useLocation();

  useEffect(() => {
    document.title = language === 'pt' ? "Treinamentos | HTC Training" : "Training | HTC Training";
  }, [language]);

  // Handle Hash Scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          // Account for fixed navbar height (approx 80-100px)
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Image Mapping with High-Availability URLs
  const TRAINING_IMAGES: Record<string, string> = {
    'crm': getAssetPath("/images/crm-training.jpg"),
    'avsec': getAssetPath("/images/avsec-training.jpg"),
    'dgr': "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    'safety-culture': "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    'qsms': "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
  };

  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1483450389192-3d3a06dfef00?q=80&w=1200";

  return (
    <div className="w-full pt-20 bg-slate-50/50">
      {/* Hero Header - Compact Version */}
      <div className="bg-aviation-navy py-16 text-center text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath("/images/header-training.png")}
            alt="Sky texture"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/50 via-aviation-navy/80 to-aviation-navy"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1 mb-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-aviation-red font-bold text-xs tracking-widest uppercase">{language === 'pt' ? 'Qualificação Profissional' : 'Professional Qualification'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{t.training_page.title}</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">{t.training_page.subtitle}</p>
        </div>
      </div>

      {/* Courses List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="space-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {t.courses_list.map((course) => (
            <motion.div
              id={course.id}
              key={course.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row hover:shadow-2xl transition-shadow duration-300 group"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >

              {/* Image Side */}
              <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                <img
                  src={TRAINING_IMAGES[course.id] || FALLBACK_IMAGE}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = FALLBACK_IMAGE;
                  }}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aviation-navy/90 via-transparent to-transparent"></div>

                {/* Image Overlay Content */}
                <div className="absolute top-6 left-6">
                  <span className="bg-aviation-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {course.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold text-sm">{course.certification}</span>
                  </div>
                  {course.requirements && (
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <FileCheck className="w-4 h-4 mt-0.5" />
                      <span>{language === 'pt' ? 'Pré-req: ' : 'Prereq: '}{course.requirements}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-aviation-navy mb-3 leading-tight">{course.title}</h2>

                  {/* Key Specs Row */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-md">
                      <Clock className="w-4 h-4 mr-2 text-aviation-red" />
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-md">
                      <Globe className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{course.delivery.join(' / ')}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Target Audience Badge */}
                  <div className="inline-block bg-slate-50 border border-slate-100 rounded-lg px-4 py-2 mb-6">
                    <span className="text-xs font-bold text-aviation-navy uppercase tracking-wide block mb-1">{t.training_page.targetAudience}</span>
                    <span className="text-sm text-slate-600">{course.audience}</span>
                  </div>

                  {/* Syllabus Grid */}
                  {course.syllabus && (
                    <div className="mb-8">
                      <h4 className="flex items-center text-sm font-bold text-aviation-navy uppercase tracking-widest mb-4">
                        <BookOpen className="w-4 h-4 mr-2 text-aviation-red" />
                        {language === 'pt' ? 'Conteúdo Programático' : 'Course Syllabus'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {course.syllabus.map((topic, idx) => (
                          <div key={idx} className="flex items-start text-sm text-slate-700">
                            <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  {/* Logic to link specifically to Landing Pages or Standard Contact */}
                  <NavLink to={
                    course.id === 'crm' ? "/lp-crm" :
                      course.id === 'dgr' ? "/lp-dgr" :
                        course.id === 'avsec' ? "/lp-avsec" :
                          "/contact"
                  } className="flex-1">
                    <Button fullWidth className="flex justify-center items-center group">
                      {(course.id === 'crm' || course.id === 'dgr' || course.id === 'avsec')
                        ? (language === 'pt' ? 'Página do Curso' : 'View Course Page')
                        : t.buttons.syllabus}
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </NavLink>
                  <NavLink to="/contact" className="flex-1">
                    <Button variant="outline" fullWidth>
                      {t.buttons.schedule}
                    </Button>
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Methodology Section */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aviation-blue/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-aviation-red font-bold uppercase tracking-widest text-sm mb-3 block">
              {language === 'pt' ? 'Diferencial HTC' : 'The HTC Difference'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.training_page.methodology?.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {t.training_page.methodology?.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {t.training_page.methodology?.items.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-aviation-red/50 transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-aviation-red to-red-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/30 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* NEW SECTION: Corporate Differentials (B2B Focus) */}
      {t.training_page.differentials && (
        <div className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-aviation-navy mb-4">{t.training_page.differentials.title}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">{t.training_page.differentials.subtitle}</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {t.training_page.differentials.items.map((diff, idx) => (
                <motion.div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg hover:border-aviation-blue/30 transition-all duration-300 group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:bg-aviation-navy transition-colors duration-300">
                    <diff.icon className="w-7 h-7 text-aviation-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-aviation-navy mb-2">{diff.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{diff.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Banner */}
      <div className="bg-slate-50 py-16 text-center border-t border-slate-200">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-aviation-navy">{t.training_page.bannerTitle}</h2>
          <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto">{t.training_page.bannerDesc}</p>
          <NavLink to="/corporate">
            <button className="bg-aviation-red text-white px-8 py-4 rounded-md font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t.training_page.btnCorporate}
            </button>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};
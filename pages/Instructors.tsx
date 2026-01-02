import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Award, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { getAssetPath } from '../utils/assetPath';

export const Instructors: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { instructors_page } = t;

  useEffect(() => {
    document.title = language === 'pt' ? "Instrutores | HTC Training" : "Instructors | HTC Training";
  }, [language]);

  return (
    <div className="w-full pt-20 bg-slate-50 min-h-screen">
      {/* Hero Header - Compact Version */}
      <div className="bg-aviation-navy py-16 text-center text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath("/images/header-instructors.png")}
            alt="Sky texture"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/50 via-aviation-navy/80 to-aviation-navy"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1 mb-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-aviation-red font-bold text-xs tracking-widest uppercase">{language === 'pt' ? 'Nossos Especialistas' : 'Our Experts'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{instructors_page.title}</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-md font-medium">
            {instructors_page.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {instructors_page.list.map((instructor, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              {/* Image Column */}
              <div className="lg:w-1/3 bg-slate-200 relative min-h-[400px]">
                <img
                  src={instructor.avatar ? getAssetPath(instructor.avatar) : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop"}
                  alt={instructor.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aviation-navy/80 to-transparent lg:hidden"></div>
                <div className="absolute bottom-6 left-6 text-white lg:hidden">
                  <h2 className="text-3xl font-bold">{instructor.name}</h2>
                  <p className="text-slate-300 font-medium">{instructor.role}</p>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:w-2/3 p-8 md:p-12">
                <div className="hidden lg:block mb-8">
                  <h2 className="text-4xl font-bold text-aviation-navy mb-2">{instructor.name}</h2>
                  <p className="text-xl text-aviation-red font-medium">{instructor.role}</p>
                </div>

                <div className="mb-8">
                  <h3 className="flex items-center text-lg font-bold text-aviation-navy mb-6">
                    <Award className="w-5 h-5 text-aviation-red mr-2" />
                    {language === 'pt' ? 'Qualificações & Certificações' : 'Qualifications & Certifications'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {instructor.qualifications.map((qual, idx) => (
                      <div key={idx} className="flex items-start p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 hover:border-slate-200">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm font-medium leading-relaxed">{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                  <a href={`mailto:${instructor.email}`}>
                    <Button className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      {instructor.email}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, ShieldCheck, CheckCircle, Users, Trophy, History } from 'lucide-react';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { about_page } = t;

  useEffect(() => {
    document.title = language === 'pt' ? "Sobre Nós | HTC Training" : "About Us | HTC Training";
  }, [language]);

  return (
    <div className="w-full pt-20">
      {/* Hero Header - Compact Version */}
      <div className="bg-aviation-navy py-16 text-center text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/header-about.png"
            alt="Aviation Runway"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/50 via-aviation-navy/80 to-aviation-navy"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1 mb-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-aviation-red font-bold text-xs tracking-widest uppercase">{language === 'pt' ? 'Desde 2004' : 'Since 2004'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{about_page.title}</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
            {about_page.subtitle}
          </p>
        </div>
      </div>

      {/* Intro & Legacy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-aviation-red"></div>
              <h2 className="text-sm font-bold text-aviation-navy uppercase tracking-widest">{language === 'pt' ? 'Nossa História' : 'Our History'}</h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy mb-6 leading-tight">{about_page.introTitle}</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
              <p>{about_page.introText}</p>

              {/* Feature Highlights within text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <History className="w-8 h-8 text-aviation-red" />
                  <div>
                    <span className="block font-bold text-aviation-navy text-lg">20+ {language === 'pt' ? 'Anos' : 'Years'}</span>
                    <span className="text-xs uppercase text-slate-500 font-semibold">{language === 'pt' ? 'Experiência' : 'Experience'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Users className="w-8 h-8 text-aviation-blue" />
                  <div>
                    <span className="block font-bold text-aviation-navy text-lg">15k+</span>
                    <span className="text-xs uppercase text-slate-500 font-semibold">{language === 'pt' ? 'Alunos' : 'Students'}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main Image with Styling */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
              <img
                src="/images/about-instructor.jpg"
                alt="Instructor in classroom"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-aviation-navy/10 hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-aviation-dots opacity-20 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-aviation-red/5 rounded-full blur-3xl z-0"></div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-aviation-red text-white p-3 rounded-lg">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">{language === 'pt' ? 'Melhor Avaliado' : 'Top Rated'}</p>
                <p className="text-aviation-navy font-bold">{language === 'pt' ? 'Treinamento Aviação' : 'Aviation Training'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wall of Trust (Clients) - Redesigned Grid */}
      <div className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-aviation-red font-bold uppercase tracking-widest text-xs mb-2 block">{language === 'pt' ? 'Confiança Corporativa' : 'Corporate Trust'}</span>
            <h2 className="text-3xl font-bold text-aviation-navy">{about_page.clientsTitle}</h2>
            <div className="w-24 h-1 bg-aviation-red mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            {about_page.clientsList?.map((client, idx) => (
              <motion.div
                key={idx}
                className="bg-white px-6 py-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-lg hover:border-aviation-red/30 hover:-translate-y-1 transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                }}
              >
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wide text-center group-hover:text-aviation-navy transition-colors duration-300">
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-slate-500 mt-10 italic max-w-3xl mx-auto px-4">
            "{about_page.clientsText}"
          </p>
        </div>
      </div>

      {/* Mission Vision Values - Interactive Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
          {/* Mission */}
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-lg border-b-4 border-aviation-red hover:-translate-y-2 transition-transform duration-300 group"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-aviation-red transition-colors duration-300">
              <Target className="w-8 h-8 text-aviation-red group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-aviation-navy mb-4">{about_page.missionTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{about_page.missionDesc}</p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-lg border-b-4 border-aviation-blue hover:-translate-y-2 transition-transform duration-300 group"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-aviation-blue transition-colors duration-300">
              <Eye className="w-8 h-8 text-aviation-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-aviation-navy mb-4">{about_page.visionTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{about_page.visionDesc}</p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-lg border-b-4 border-aviation-navy hover:-translate-y-2 transition-transform duration-300 group"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-aviation-navy transition-colors duration-300">
              <Heart className="w-8 h-8 text-aviation-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-aviation-navy mb-4">{about_page.valuesTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{about_page.valuesDesc}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Deep Dive Sections (Sectors & Cases) */}
      <div className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Sectors */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-aviation-navy mb-6">{about_page.expertiseTitle}</h2>
              <p className="text-slate-600 mb-8">{about_page.expertiseText}</p>
              <div className="grid grid-cols-2 gap-4">
                {about_page.sectors?.map((sector, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <sector.icon className="w-5 h-5 text-aviation-red" />
                    <span className="font-semibold text-slate-800 text-sm">{sector.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cases */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-aviation-navy mb-6">{about_page.casesTitle}</h2>
              <div className="space-y-6">
                {about_page.cases?.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-aviation-red/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-aviation-red border-4 border-slate-50"></div>
                    <h3 className="text-lg font-bold text-aviation-navy mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Aviation Authority Section */}
      <div className="bg-aviation-navy text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="inline-block px-3 py-1 bg-aviation-red rounded-sm text-xs font-bold uppercase tracking-widest mb-6">Liderança</div>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">{about_page.aviationTitle}</h2>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg font-light">
                {about_page.aviationText}
              </p>
              <p className="text-slate-400 mb-8 text-sm italic border-l-2 border-slate-600 pl-4">
                "{about_page.auditText}"
              </p>
              <div className="flex flex-wrap gap-4">
                {['ICAO Compliant', 'IATA Standards', 'ANAC Regulated'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-aviation-red" />
                {about_page.certificationsTitle}
              </h2>
              <ul className="space-y-4">
                {about_page.certificationsList?.map((cert, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Safety Culture Strip - Final visual reinforcement */}
      <div className="bg-slate-100 py-20 text-center">
        <motion.div
          className="max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ShieldCheck className="w-20 h-20 text-aviation-navy/20 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-aviation-navy mb-6">{about_page.cultureTitle}</h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            {about_page.cultureDesc}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Users, Calendar, MapPin, Globe, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { IntroAnimation } from '../components/IntroAnimation';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2070&auto=format&fit=crop", // Slide 1: Dark Blue Cockpit
  "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop", // Slide 2: Pilots/Human Factors
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop",  // Slide 3: Tarmac/Ground Ops
  "/images/dgr_slider_bg.png"   // Slide 4: DGR / Cargo Logistics
];

export const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  // Set Page Title & Scroll to Top on Mount
  useEffect(() => {
    document.title = "HTC Training | Aviation Excellence";
    window.scrollTo(0, 0);
  }, []);

  // Auto-advance slides with pause check
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused && !showIntro) {
        setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, showIntro]);

  // Touch and Mouse Event Handlers for Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStart) {
      setTouchEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) {
      setTouchStart(null);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const slideContent = t.home.heroSlides || [
    { tag: t.home.heroTag, title: t.home.heroTitle, desc: t.home.heroDesc }
  ];

  const currentContent = slideContent[currentSlide] || slideContent[0];

  return (
    <div className="flex flex-col w-full">
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* Hero Section with Slider */}
      <section
        className="relative h-screen min-h-[650px] flex items-center overflow-hidden group cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setTouchStart(null); }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Background Images with Transition */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-out ${currentSlide === index ? 'scale-105' : 'scale-100'
                }`}
            />
            {/* Improved Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-aviation-navy/95 via-aviation-navy/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-aviation-navy/90 via-transparent to-transparent"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="max-w-4xl">
            {/* Animated Content */}
            <div key={currentSlide} className="animate-fade-in-up">
              <div className="inline-block px-5 py-2 mb-8 border border-white/20 rounded-full bg-white/10 backdrop-blur-md shadow-lg">
                <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-aviation-red animate-pulse"></div>
                  {currentContent.tag}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-xl tracking-tight">
                {currentContent.title.includes('&') || currentContent.title.includes(':') ? (
                  <>
                    {currentContent.title.split(/[:&]/)[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200">
                      {currentContent.title.match(/[:&]/)}
                      {currentContent.title.split(/[:&]/)[1]}
                    </span>
                  </>
                ) : (
                  currentContent.title
                )}
              </h1>
              <p className="text-xl text-slate-200 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md border-l-4 border-aviation-red pl-6">
                {currentContent.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <NavLink to="/training">
                  <Button variant="primary" className="w-full sm:w-auto text-lg px-10 py-4 shadow-aviation-red/20 hover:scale-105 transition-transform">
                    {t.buttons.explore}
                  </Button>
                </NavLink>
                <NavLink to="/contact">
                  <Button variant="outline-white" className="w-full sm:w-auto text-lg px-10 py-4 backdrop-blur-sm">
                    {t.buttons.contact}
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'bg-aviation-red w-12' : 'bg-white/40 w-4 hover:bg-white'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Grid - Clean & Corporate */}
      <section className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-sm font-bold text-aviation-red uppercase tracking-[0.2em] mb-3">{t.home.whyChoose}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-aviation-navy tracking-tight">{t.home.excellence}</h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {t.features.map((feature, index) => {
              const FeatureContent = (
                <div className={`bg-white p-8 rounded-2xl border shadow-lg hover:-translate-y-2 transition-all duration-300 group h-full relative overflow-hidden ${index === 1 ? 'cursor-pointer border-aviation-red/60 shadow-aviation-red/20 ring-4 ring-aviation-red/5 bg-slate-50/50' : 'border-slate-100 shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/60'}`}>
                  {/* Subtle accent line on top */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aviation-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-aviation-navy transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-aviation-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-aviation-navy mb-3">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              );

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  {index === 1 ? (
                    <NavLink to="/instructors">{FeatureContent}</NavLink>
                  ) : (
                    FeatureContent
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Background - Adding Depth */}
      <section className="relative py-24 bg-aviation-navy overflow-hidden">
        {/* Texture Background */}
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Global connections" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy via-aviation-navy/90 to-aviation-navy"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {t.home.stats?.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center px-4 group"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
              >
                <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.value}</p>
                <p className="text-sm md:text-base text-aviation-red font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Programs Preview - Premium Cards */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h2 className="text-sm font-bold text-aviation-red uppercase tracking-[0.2em] mb-3">HTC Expertise</h2>
              <h3 className="text-4xl font-bold text-aviation-navy">{t.home.programsTitle}</h3>
            </div>
            <NavLink to="/training" className="hidden md:flex items-center text-aviation-navy font-bold hover:text-aviation-red transition-colors group">
              {t.buttons.viewAll} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {t.courses_list.slice(0, 3).map((course) => (
              <motion.div
                key={course.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <NavLink
                  to={
                    course.id === 'crm' ? '/training#crm' :
                      course.id === 'avsec' ? '/training#avsec' :
                        course.id === 'dgr' ? '/training#dgr' :
                          '/training'
                  }
                  className="group block h-full"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-300 border border-slate-100 h-full flex flex-col relative">
                    {/* Top Color Bar */}
                    <div className="h-2 w-full bg-aviation-navy group-hover:bg-aviation-red transition-colors duration-300"></div>

                    <div className="p-8 flex-grow">
                      <div className="flex items-center justify-between mb-8">
                        <span className="px-4 py-1.5 bg-slate-100 text-aviation-navy text-xs font-black uppercase rounded-full tracking-wider group-hover:bg-aviation-navy group-hover:text-white transition-colors duration-300">
                          {course.category}
                        </span>
                        <course.icon className="w-8 h-8 text-slate-300 group-hover:text-aviation-red transition-colors duration-300" />
                      </div>

                      <h4 className="text-2xl font-bold text-aviation-navy mb-4 group-hover:text-aviation-blue transition-colors duration-300">{course.title}</h4>
                      <p className="text-slate-600 mb-8 line-clamp-3 text-sm leading-relaxed">{course.description}</p>

                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-slate-500">
                          <CheckCircle className="w-4 h-4 text-aviation-red mr-3" />
                          {course.delivery.join(' / ')}
                        </li>
                        <li className="flex items-center text-sm text-slate-500">
                          <Users className="w-4 h-4 text-blue-600 mr-3" />
                          {course.audience}
                        </li>
                      </ul>
                    </div>

                    <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-aviation-navy transition-colors duration-300">
                      <span className="text-sm font-bold text-slate-600 group-hover:text-white transition-colors">{t.buttons.learnMore}</span>
                      <ChevronRight className="w-5 h-5 text-aviation-red group-hover:text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center md:hidden">
            <NavLink to="/training" className="inline-flex items-center text-aviation-navy font-bold hover:text-aviation-red transition-colors">
              {t.buttons.viewAll} <ArrowRight className="ml-2 w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Trust/Certifications Strip - Clean & Modern */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-aviation-navy inline-block relative">
              {t.home.trust}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-aviation-red rounded-full opacity-30"></div>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {/* Simple, clean logo representations */}
            <motion.div
              className="flex flex-col items-center gap-2 group cursor-default"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <Globe className="w-12 h-12 text-blue-600 mb-1 transform group-hover:-translate-y-1 transition-transform" />
              <span className="font-black text-xl text-slate-800">ICAO</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-2 group cursor-default"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <Award className="w-12 h-12 text-aviation-red mb-1 transform group-hover:-translate-y-1 transition-transform" />
              <span className="font-black text-xl text-slate-800">IATA</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-2 group cursor-default"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <ShieldCheck className="w-12 h-12 text-yellow-500 mb-1 transform group-hover:-translate-y-1 transition-transform" />
              <span className="font-black text-xl text-slate-800">ANAC</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-2 group cursor-default"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              <Award className="w-12 h-12 text-slate-700 mb-1 transform group-hover:-translate-y-1 transition-transform" />
              <span className="font-black text-xl text-slate-800">FAA</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Immersive Full-Width CTA Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home_cta_bg_ai.png"
            alt="Airport runway at sunset - HTC Training and Business"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-aviation-navy/90 backdrop-blur-[2px]"></div>
          {/* Diagonal Cut Effect */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-xl tracking-tight">{t.home.ctaTitle}</h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {t.home.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <NavLink to="/contact">
              <Button variant="primary" className="px-10 py-4 text-lg font-bold shadow-2xl shadow-aviation-red/30 hover:shadow-aviation-red/50 hover:scale-105 transition-all">
                {t.buttons.requestProposal}
              </Button>
            </NavLink>
            <NavLink to="/training">
              <Button variant="outline-white" className="px-10 py-4 text-lg font-bold border-white text-white hover:bg-white hover:text-aviation-navy">
                {t.buttons.explore}
              </Button>
            </NavLink>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
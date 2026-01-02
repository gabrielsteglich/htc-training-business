import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, FileText, CheckCircle2, Plane, Globe, ShieldCheck, Loader2, Award, Siren, UserX, Scan, Eye } from 'lucide-react';
import { Button } from '../components/Button';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const AVSECLanding: React.FC = () => {
   const { language } = useLanguage();
   const t = CONTENT[language];
   const lp = t.avsec_lp;
   const [isSubmitting, setIsSubmitting] = useState(false);

   useEffect(() => {
      document.title = language === 'pt' ? "AVSEC - Segurança da Aviação | Homologado ANAC" : "AVSEC - Aviation Security | ANAC Approved";
   }, [language]);

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      studentCount: '1-10',
      message: ''
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      setTimeout(() => {
         const recipient = "gabrielvaz@htc-brasil.com.br";
         const subject = encodeURIComponent(`[LEAD AVSEC LANDING PAGE] - ${formData.company}`);
         const body = encodeURIComponent(`
Origem: Landing Page AVSEC (Tráfego Pago)
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}
Nº de Alunos: ${formData.studentCount}

Mensagem Adicional:
${formData.message}
      `);

         window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
         setIsSubmitting(false);
      }, 1000);
   };

   return (
      <div className="w-full bg-slate-50 font-sans">

         {/* 1. HERO SECTION WITH EMBEDDED FORM */}
         <div className="relative bg-aviation-navy pt-28 pb-20 overflow-hidden">
            {/* Background Image - Airport Security/Scanner Theme */}
            <div className="absolute inset-0 z-0">
               <img
                  src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop"
                  alt="Airport Security"
                  className="w-full h-full object-cover opacity-20 grayscale"
               />
               {/* Blue tint overlay for Security theme */}
               <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/90 to-blue-900/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="flex flex-col lg:flex-row gap-12 items-center">

                  {/* Left: Value Proposition */}
                  <motion.div
                     className="lg:w-1/2 text-white"
                     initial={{ opacity: 0, x: -40 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                  >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                        <Shield className="w-4 h-4" /> {lp.hero.badge}
                     </div>
                     <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {lp.hero.title}
                     </h1>
                     <p className="text-lg text-slate-300 mb-8 leading-relaxed border-l-4 border-blue-600 pl-4">
                        {lp.hero.subtitle}
                     </p>

                     {/* Quick Trust Indicators */}
                     <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-300">
                        <div className="flex items-center gap-2">
                           <Award className="w-5 h-5 text-blue-400" />
                           <span>Homologado ANAC</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <FileText className="w-5 h-5 text-blue-400" />
                           <span>RBAC 107/108</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Globe className="w-5 h-5 text-blue-400" />
                           <span>ICAO Annex 17</span>
                        </div>
                     </div>
                  </motion.div>

                  {/* Right: High Conversion Form */}
                  <motion.div
                     className="lg:w-1/2 w-full max-w-md"
                     initial={{ opacity: 0, x: 40 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.15 }}
                  >
                     <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-t-4 border-blue-600">
                        <h3 className="text-2xl font-bold text-aviation-navy mb-2">{lp.hero.formTitle}</h3>
                        <p className="text-slate-500 text-sm mb-6">{lp.hero.formSubtitle}</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.name}</label>
                              <input
                                 type="text" name="name" required
                                 className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                                 placeholder={lp.hero.form?.placeholders.name}
                                 value={formData.name} onChange={handleChange}
                              />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.email}</label>
                              <input
                                 type="email" name="email" required
                                 className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                                 placeholder={lp.hero.form?.placeholders.email}
                                 value={formData.email} onChange={handleChange}
                              />
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.phone}</label>
                                 <input
                                    type="tel" name="phone" required
                                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                                    placeholder={lp.hero.form?.placeholders.phone}
                                    value={formData.phone} onChange={handleChange}
                                 />
                              </div>
                              <div>
                                 <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.studentCount}</label>
                                 <select
                                    name="studentCount"
                                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                                    value={formData.studentCount} onChange={handleChange}
                                 >
                                    <option value="1-10">1-10</option>
                                    <option value="11-50">11-50</option>
                                    <option value="50+">50+</option>
                                 </select>
                              </div>
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.company}</label>
                              <input
                                 type="text" name="company" required
                                 className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                                 placeholder={lp.hero.form?.placeholders.company}
                                 value={formData.company} onChange={handleChange}
                              />
                           </div>

                           <Button
                              type="submit" fullWidth disabled={isSubmitting}
                              className="mt-4 font-bold text-lg shadow-lg hover:shadow-xl transition-all !bg-blue-700 hover:!bg-blue-800 focus:!ring-blue-600"
                           >
                              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : t.buttons.quoteNow}
                           </Button>
                           <p className="text-[10px] text-center text-slate-400 mt-2">
                              {lp.hero.form?.privacy}
                           </p>
                        </form>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>

         <div className="bg-white py-8 border-b border-slate-200">
            <motion.div
               className="max-w-7xl mx-auto px-4 flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
               }}
            >
               <motion.div
                  className="flex items-center gap-2"
                  variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
               >
                  <Award className="w-6 h-6" /> <span className="font-bold text-slate-700">{language === 'pt' ? 'ANAC Homologado' : 'ANAC Authorized'}</span>
               </motion.div>
               <motion.div
                  className="flex items-center gap-2"
                  variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
               >
                  <ShieldCheck className="w-6 h-6" /> <span className="font-bold text-slate-700">{language === 'pt' ? 'PF Homologado' : 'PF Compliant'}</span>
               </motion.div>
               <motion.div
                  className="flex items-center gap-2"
                  variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
               >
                  <Globe className="w-6 h-6" /> <span className="font-bold text-slate-700">{language === 'pt' ? 'Padrão ICAO' : 'ICAO Standard'}</span>
               </motion.div>
            </motion.div>
         </div>

         {/* NEW SECTION: ABOUT THE COURSE (Mirroring CRM Layout) */}
         <div className="bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col lg:flex-row items-center gap-16">
                  {/* Left: Content */}
                  <motion.div
                     className="lg:w-1/2"
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                     viewport={{ once: true, amount: 0.3 }}
                  >
                     <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                        {lp.aboutCourse.badge}
                     </div>
                     <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy mb-6 leading-tight">
                        {lp.aboutCourse.title}
                     </h2>
                     <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {lp.aboutCourse.description}
                     </p>

                     <div className="grid grid-cols-2 gap-6">
                        {lp.aboutCourse.stats.map((stat: any, idx: number) => (
                           <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                              <p className="text-2xl font-bold text-aviation-navy mb-1">{stat.value}</p>
                              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                           </div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Right: Image */}
                  <motion.div
                     className="lg:w-1/2 relative"
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                     viewport={{ once: true, amount: 0.3 }}
                  >
                     <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                        <img
                           src={lp.aboutCourse.image}
                           alt={lp.aboutCourse.title}
                           className="w-full h-auto object-cover"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-fade-in-up">
                           <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                              <ShieldCheck className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                 {language === 'pt' ? 'Certificado' : 'Certified'}
                              </p>
                              <p className="text-sm font-bold text-aviation-navy leading-tight">
                                 ANAC & PF
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Decorative elements */}
                     <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
                  </motion.div>
               </div>
            </div>
         </div>

         {/* 3. PAIN POINTS */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <h2 className="text-3xl font-bold text-aviation-navy">{lp.painPoints.title}</h2>
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
               {lp.painPoints.items.map((item, idx) => (
                  <motion.div
                     key={idx}
                     className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                     variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                     }}
                  >
                     <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                        {idx === 0 && <UserX className="w-6 h-6" />}
                        {idx === 1 && <AlertTriangle className="w-6 h-6" />}
                        {idx === 2 && <Lock className="w-6 h-6" />}
                     </div>
                     <h3 className="text-xl font-bold text-aviation-navy mb-2">{item.title}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </motion.div>
         </div>

         {/* 4. SYLLABUS DETAIL */}
         <div className="bg-slate-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
               >
                  <h2 className="text-3xl font-bold text-aviation-navy mb-2">{lp.syllabus.title}</h2>
                  <p className="text-slate-600">{lp.syllabus.subtitle}</p>
               </motion.div>

               <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                     hidden: {},
                     visible: { transition: { staggerChildren: 0.2 } }
                  }}
               >
                  {/* Ground Ops */}
                  <motion.div
                     className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600"
                     variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                     }}
                  >
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-600 text-white p-2 rounded">
                           <Scan className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-aviation-navy">Operações de Solo</h3>
                     </div>
                     <ul className="space-y-3">
                        {lp.syllabus.ground.map((topic, i) => (
                           <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                              {topic}
                           </li>
                        ))}
                     </ul>
                  </motion.div>

                  {/* Flight Ops */}
                  <motion.div
                     className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-aviation-navy"
                     variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                     }}
                  >
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-aviation-navy text-white p-2 rounded">
                           <Plane className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-aviation-navy">Segurança em Voo</h3>
                     </div>
                     <ul className="space-y-3">
                        {lp.syllabus.flight.map((topic, i) => (
                           <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                              {topic}
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               </motion.div>
            </div>
         </div>

         {/* 5. WHY HTC */}
         <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.h2
                  className="text-3xl font-bold text-center text-aviation-navy mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
               >
                  {lp.whyUs.title}
               </motion.h2>
               <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                     hidden: {},
                     visible: { transition: { staggerChildren: 0.15 } }
                  }}
               >
                  {lp.whyUs.items.map((item, idx) => (
                     <motion.div
                        key={idx}
                        className="flex flex-col items-center text-center"
                        variants={{
                           hidden: { opacity: 0, y: 30 },
                           visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                     >
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-200">
                           {idx === 0 && <Shield className="w-8 h-8 text-blue-700" />}
                           {idx === 1 && <Eye className="w-8 h-8 text-aviation-navy" />}
                           {idx === 2 && <ShieldCheck className="w-8 h-8 text-aviation-red" />}
                        </div>
                        <h4 className="text-lg font-bold text-aviation-navy mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-sm max-w-xs">{item.desc}</p>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* 6. BOTTOM CTA */}
         <div className="bg-aviation-navy py-16 text-center text-white">
            <motion.div
               className="max-w-4xl mx-auto px-4"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <h2 className="text-3xl font-bold mb-4">{lp.cta.title}</h2>
               <p className="text-slate-300 mb-8">{lp.cta.desc}</p>
               <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  variant="primary"
                  className="px-12 py-4 text-lg shadow-xl shadow-blue-500/20 !bg-blue-600 hover:!bg-blue-700"
               >
                  {t.buttons.quoteNow}
               </Button>
            </motion.div>
         </div>

      </div>
   );
};
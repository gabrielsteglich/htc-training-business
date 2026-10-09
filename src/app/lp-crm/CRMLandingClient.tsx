"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Users, FileText, AlertCircle, Building2, Plane, Clock, Send, Loader2, Award, Globe } from 'lucide-react';
import { Button } from '@/components/Button';
import { CONTENT } from '@/constants';
import { useLanguage } from '@/context/LanguageContext';
import { ContactRequestError, sendContact } from '@/lib/contact-client';
export function CRMLandingClient() {
   const { language, ui } = useLanguage();
   const t = CONTENT[language];
   const lp = t.crm_lp;
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      crewSize: '1-10',
      message: '',
      website: ''
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setFormStatus(null);

      try {
         await sendContact({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            subject: `Lead CRM — ${formData.company}`,
            message: formData.message || 'Solicitação de proposta para treinamento CRM.',
            source: 'Landing page CRM',
            audienceSize: formData.crewSize,
            website: formData.website,
         }, language);
         setFormStatus({
            type: 'success',
            message: ui.requestSent,
         });
         setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            crewSize: '1-10',
            message: '',
            website: '',
         });
      } catch (error) {
         setFormStatus({
            type: 'error',
            message: error instanceof ContactRequestError
               ? error.message
               : ui.sendError,
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="w-full bg-slate-50 font-sans">

         {/* 1. HERO SECTION WITH EMBEDDED FORM (ABOVE THE FOLD) */}
         <div className="relative bg-aviation-navy pt-28 pb-20 overflow-hidden">
            {/* Background Cockpit Image */}
            <div className="absolute inset-0 z-0">
               <Image
                  src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2400&auto=format&fit=crop"
                  alt={ui.images.cockpit}
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover opacity-20"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-aviation-navy via-aviation-navy/90 to-aviation-navy/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="flex flex-col lg:flex-row gap-12 items-center">

                  {/* Left: Value Proposition */}
                  <motion.div
                     className="lg:w-1/2 text-white"
                     initial={{ opacity: 0, y: 24 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}
                  >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aviation-red/20 border border-aviation-red/50 text-aviation-red text-xs font-bold uppercase tracking-widest mb-6">
                        <AlertCircle className="w-4 h-4" /> {lp.hero.badge}
                     </div>
                     <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {lp.hero.title}
                     </h1>
                     <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        {lp.hero.subtitle}
                     </p>

                     {/* Quick Trust Indicators */}
                     <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-300">
                        <div className="flex items-center gap-2">
                           <ShieldCheck className="w-5 h-5 text-aviation-red" />
                           <span>RBAC 135/121</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <FileText className="w-5 h-5 text-aviation-red" />
                           <span>{ui.isCompliant}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Users className="w-5 h-5 text-aviation-red" />
                           <span>{ui.online}</span>
                        </div>
                     </div>
                  </motion.div>

                  {/* Right: High Conversion Form */}
                  <motion.div
                     className="lg:w-1/2 w-full max-w-md"
                     initial={{ opacity: 0, y: 24 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.15 }}
                  >
                     <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-t-4 border-aviation-red">
                        <h3 className="text-2xl font-bold text-aviation-navy mb-2">{lp.hero.formTitle}</h3>
                        <p className="text-slate-500 text-sm mb-6">{lp.hero.formSubtitle}</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                           <div className="sr-only" aria-hidden="true">
                              <label htmlFor="crm-website">Website</label>
                              <input
                                 id="crm-website" name="website" type="text" tabIndex={-1} autoComplete="off"
                                 value={formData.website} onChange={handleChange}
                              />
                           </div>
                           <div>
                              <label htmlFor="crm-name" className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.name}</label>
                              <input
                                 id="crm-name" type="text" name="name" required
                                 className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none"
                                 placeholder={lp.hero.form?.placeholders.name}
                                 value={formData.name} onChange={handleChange}
                              />
                           </div>
                           <div>
                              <label htmlFor="crm-email" className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.email}</label>
                              <input
                                 id="crm-email" type="email" name="email" required
                                 className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none"
                                 placeholder={lp.hero.form?.placeholders.email}
                                 value={formData.email} onChange={handleChange}
                              />
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <label htmlFor="crm-phone" className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.phone}</label>
                                 <input
                                    id="crm-phone" type="tel" name="phone" required
                                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none"
                                    placeholder={lp.hero.form?.placeholders.phone}
                                    value={formData.phone} onChange={handleChange}
                                 />
                              </div>
                              <div>
                                 <label htmlFor="crm-crew-size" className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.crewSize}</label>
                                 <select
                                    id="crm-crew-size" name="crewSize"
                                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none bg-white"
                                    value={formData.crewSize} onChange={handleChange}
                                 >
                                    <option value="1-10">1-10</option>
                                    <option value="11-50">11-50</option>
                                    <option value="50+">50+</option>
                                 </select>
                              </div>
                           </div>
                           <div>
                              <label htmlFor="crm-company" className="block text-xs font-bold text-slate-700 uppercase mb-1">{lp.hero.form?.company}</label>
                              <input
                                 id="crm-company" type="text" name="company" required
                                 className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none"
                                 placeholder={lp.hero.form?.placeholders.company}
                                 value={formData.company} onChange={handleChange}
                              />
                           </div>

                           <Button
                              type="submit" fullWidth disabled={isSubmitting}
                              className="mt-4 font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                                    <span className="sr-only">{ui.sending}</span>
                                 </>
                              ) : t.buttons.quoteNow}
                           </Button>
                           <p className="text-[10px] text-center text-slate-400 mt-2">
                              {lp.hero.form?.privacy}
                           </p>
                           {formStatus && (
                              <p
                                 role="status"
                                 aria-live="polite"
                                 className={`rounded-lg px-3 py-2 text-sm font-medium ${formStatus.type === 'success'
                                    ? 'bg-emerald-50 text-emerald-800'
                                    : 'bg-red-50 text-red-800'
                                    }`}
                              >
                                 {formStatus.message}
                              </p>
                           )}
                        </form>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>

         {/* 2. LOGO STRIP (SOCIAL PROOF) */}
         <div className="bg-white py-8 border-b border-slate-200">
            <motion.div
               className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
               }}
            >
               {/* Using text for simplicity, or ideally replace with SVGs provided in main app */}
               <motion.div
                  className="flex items-center gap-2"
                  variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
               >
                  <Award className="w-6 h-6" /> <span className="font-bold text-slate-700">{ui.anac}</span>
               </motion.div>
               <motion.div
                  className="flex items-center gap-2"
                  variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
               >
                  <Globe className="w-6 h-6" /> <span className="font-bold text-slate-700">{ui.icao}</span>
               </motion.div>
               <motion.div
                  className="flex items-center gap-2"
                  variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
               >
                  <Building2 className="w-6 h-6" /> <span className="font-bold text-slate-700">In-Company</span>
               </motion.div>
            </motion.div>
         </div>

         {/* NEW SECTION: ABOUT THE COURSE - IMAGERY */}
         <div className="bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col lg:flex-row items-center gap-16">
                  {/* Left: Content */}
                  <motion.div
                     className="w-full lg:w-1/2"
                     initial={{ opacity: 0, y: 24 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}
                     viewport={{ once: true, amount: 0.3 }}
                  >
                     <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-aviation-red uppercase bg-red-50 rounded-full">
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
                     className="w-full lg:w-1/2 relative"
                     initial={{ opacity: 0, y: 24 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                     viewport={{ once: true, amount: 0.3 }}
                  >
                     <div className="relative rounded-2xl overflow-hidden shadow-2xl transform sm:rotate-2 hover:rotate-0 transition-all duration-500">
                        <Image
                           src={lp.aboutCourse.image}
                           alt={lp.aboutCourse.title}
                           width={800}
                           height={600}
                           className="w-full h-auto object-cover"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-fade-in-up">
                           <div className="w-12 h-12 bg-aviation-red rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                              <Award className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                 {ui.topRated}
                              </p>
                              <p className="text-sm font-bold text-aviation-navy leading-tight">
                                 {ui.aviationTraining}
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Decorative elements */}
                     <div className="absolute -z-10 top-10 right-0 sm:-right-10 w-24 h-24 bg-aviation-red/10 rounded-full blur-2xl"></div>
                  </motion.div>
               </div>
            </div>
         </div>

         {/* NEW SECTION: CRM-LOS SIMULATOR (IMAGE LEFT) */}
         <div className="bg-slate-50 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col lg:flex-row items-center gap-16">
                  {/* Left: Image (Reversed Order on Desktop) */}
                  <motion.div
                     className="w-full lg:w-1/2 relative order-2 lg:order-1"
                     initial={{ opacity: 0, y: 24 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}
                     viewport={{ once: true, amount: 0.3 }}
                  >
                     <div className="relative rounded-2xl overflow-hidden shadow-2xl transform sm:-rotate-2 hover:rotate-0 transition-all duration-500">
                        <Image
                           src="/images/crm-simulator.jpg"
                           alt={lp.crmSim.title}
                           width={800}
                           height={600}
                           className="w-full h-auto object-cover"
                        />

                        {/* Floating Badge */}
                        <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-fade-in-up delay-100">
                           <div className="w-12 h-12 bg-aviation-navy rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                              <Plane className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                 {ui.fidelity}
                              </p>
                              <p className="text-sm font-bold text-aviation-navy leading-tight">
                              {ui.fullMotion}
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="absolute -z-10 bottom-10 -left-10 w-32 h-32 bg-aviation-navy/10 rounded-full blur-3xl"></div>
                  </motion.div>

                  {/* Right: Content */}
                  <motion.div
                     className="w-full lg:w-1/2 order-1 lg:order-2"
                     initial={{ opacity: 0, y: 24 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                     viewport={{ once: true, amount: 0.3 }}
                  >
                     <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-aviation-navy uppercase bg-slate-200 rounded-full">
                        {lp.crmSim.badge}
                     </div>
                     <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy mb-6 leading-tight">
                        {lp.crmSim.title}
                     </h2>
                     <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {lp.crmSim.description}
                     </p>

                     <ul className="space-y-4">
                        {lp.crmSim.features.map((feature: string, idx: number) => (
                           <li key={idx} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                 <CheckCircle2 className="w-4 h-4 text-green-600" />
                              </div>
                              <span className="text-slate-700 font-medium">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               </div>
            </div>
         </div>

         {/* TESTIMONIALS SECTION */}
         <div className="bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
               >
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-aviation-red uppercase bg-red-50 rounded-full">
                     {lp.testimonials?.badge}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy mb-4">
                     {lp.testimonials?.title}
                  </h2>
                  <div className="w-24 h-1 bg-aviation-red mx-auto rounded-full"></div>
               </motion.div>

               <motion.div
                  className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                     hidden: {},
                     visible: { transition: { staggerChildren: 0.15 } }
                  }}
               >
                  {lp.testimonials?.items.map((testimonial: any, idx: number) => (
                     <motion.div
                        key={idx}
                        className="bg-slate-50 p-8 rounded-2xl shadow-lg border-l-4 border-aviation-red relative"
                        variants={{
                           hidden: { opacity: 0, y: 40 },
                           visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                     >
                        {/* Quote Icon */}
                        <div className="absolute -top-4 left-8 w-10 h-10 bg-aviation-red rounded-full flex items-center justify-center">
                           <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                           </svg>
                        </div>

                        <p className="text-slate-700 text-lg leading-relaxed italic mb-6 pt-4">
                           "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-aviation-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {testimonial.author.charAt(0)}
                           </div>
                           <div>
                              <p className="font-bold text-aviation-navy">{testimonial.author}</p>
                              <p className="text-sm text-slate-500">{testimonial.role}</p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </div>

         {/* 3. PAIN POINTS & BENEFITS - REDESIGNED */}
         <div className="bg-aviation-navy py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute -top-24 -right-24 w-96 h-96 bg-aviation-red rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{lp.painPoints.title}</h2>
                  <div className="w-24 h-1 bg-aviation-red mx-auto rounded-full"></div>
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
                        className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-aviation-red group"
                        variants={{
                           hidden: { opacity: 0, y: 40 },
                           visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                     >
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-aviation-red group-hover:bg-aviation-red group-hover:text-white transition-colors">
                           <AlertCircle className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-aviation-navy mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
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
                  {/* Initial CRM */}
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
                        <h3 className="text-xl font-bold text-aviation-navy">CRM {ui.initial} (16h)</h3>
                     </div>
                     <ul className="space-y-3">
                        {lp.syllabus.initial.map((topic, i) => (
                           <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                              {topic}
                           </li>
                        ))}
                     </ul>
                  </motion.div>

                  {/* Recurrent CRM */}
                  <motion.div
                     className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-aviation-red"
                     variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                     }}
                  >
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-aviation-red text-white p-2 rounded">
                           <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-aviation-navy">CRM {ui.recurrent} (8h)</h3>
                     </div>
                     <ul className="space-y-3">
                        {lp.syllabus.recurrent.map((topic, i) => (
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

         {/* 5. WHY HTC (AUTHORITY) */}
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
                           {idx === 0 && <FileText className="w-8 h-8 text-aviation-blue" />}
                           {idx === 1 && <Users className="w-8 h-8 text-aviation-navy" />}
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
         <div className="bg-aviation-red py-20 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <motion.div
               className="max-w-4xl mx-auto px-4 relative z-10"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">{lp.cta.title}</h2>
               <p className="text-white/90 text-lg mb-8">{lp.cta.desc}</p>
               <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  variant="white"
                  className="px-12 py-4 !text-aviation-red font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform"
               >
                  {t.buttons.quoteNow}
               </Button>
            </motion.div>
         </div>

      </div>
   );
};


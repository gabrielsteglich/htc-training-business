import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, ChevronUp, Clock, Globe, Building2, Loader2 } from 'lucide-react';
import { Button } from '../components/Button';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { getAssetPath } from '../utils/assetPath';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = language === 'pt' ? "Contato | HTC Training" : "Contact | HTC Training";
  }, [language]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: t.contact_page.labels.topics[0],
    message: ''
  });

  // Sync subject when language changes to prevent language mismatch in dropdown
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      subject: t.contact_page.labels.topics[0]
    }));
  }, [language, t.contact_page.labels.topics]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a brief processing delay for better UX
    setTimeout(() => {
      const recipient = "gabrielvaz@htc-brasil.com.br";
      const subject = encodeURIComponent(`[Contato Site HTC] ${formData.subject} - ${formData.company}`);
      const body = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}
Assunto: ${formData.subject}

Mensagem:
${formData.message}
      `);

      // Open email client
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      setIsSubmitting(false);

      // Optional: Reset form or show success message implies email client opened
      // setFormData({ ...formData, message: '' }); 
    }, 1000);
  };

  return (
    <div className="w-full pt-20 bg-slate-50 min-h-screen">
      {/* Hero Header - Compact Version */}
      <div className="bg-aviation-navy py-16 text-center text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath("/images/header-contact.png")}
            alt="Sky texture"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/50 via-aviation-navy/80 to-aviation-navy"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1 mb-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-aviation-red font-bold text-xs tracking-widest uppercase">{language === 'pt' ? 'Atendimento 24/7' : '24/7 Support'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight">{t.contact_page.title}</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">{t.contact_page.subtitle}</p>
        </div>
      </div>

      {/* Main Content - Standard Layout (No Overlap) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-slate-100">

          {/* Left Column: Contact Info (Dark Theme) */}
          <motion.div
            className="lg:w-5/12 bg-aviation-navy text-white p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Abstract Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-aviation-red/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">{t.contact_page.touchTitle}</h2>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                {t.contact_page.touchDesc}
              </p>

              {/* HQ Photo Addition - Adds Harmony and Visual Context */}
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-10 shadow-lg border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                  alt="HTC Headquarters"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aviation-navy/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-wider">
                    <Building2 className="w-4 h-4 text-aviation-red" />
                    {language === 'pt' ? 'Sede Operacional' : 'Headquarters'}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-5 group-hover:bg-aviation-red transition-colors duration-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact_page.headquarters}</h3>
                    <p className="text-slate-300 leading-snug text-sm">
                      Rua Monsenhor Magaldi, 178, Casa 01<br />
                      Jardim Guanabara - Rio de Janeiro / RJ<br />
                      21940-400
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-5 group-hover:bg-aviation-red transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact_page.phone}</h3>
                    <p className="text-slate-300 mb-1 text-sm">+55 (21) 98875-2948</p>
                    <div className="flex items-center text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-white/10 px-2 py-1 rounded inline-block">
                      <Clock className="w-3 h-3 mr-1" /> {t.contact_page.hours}
                    </div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-5 group-hover:bg-aviation-red transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.contact_page.email}</h3>
                    <a href="mailto:training@htc-brasil.com.br" className="block text-slate-300 hover:text-white transition-colors text-sm">training@htc-brasil.com.br</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <Globe className="w-4 h-4" />
                <span>www.htc-brasil.com.br</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form (Light Theme) */}
          <motion.div
            className="lg:w-7/12 bg-white p-10 lg:p-14"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-aviation-navy mb-8">{t.contact_page.formTitle}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-aviation-red transition-colors">{t.contact_page.labels.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none transition-all"
                    placeholder={t.contact_page.placeholders.name}
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-aviation-red transition-colors">{t.contact_page.labels.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none transition-all"
                    placeholder={t.contact_page.placeholders.email}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-aviation-red transition-colors">{t.contact_page.labels.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none transition-all"
                    placeholder={t.contact_page.placeholders.phone}
                  />
                </div>
                <div className="group">
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-aviation-red transition-colors">{t.contact_page.labels.company}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none transition-all"
                    placeholder={t.contact_page.placeholders.company}
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-aviation-red transition-colors">{t.contact_page.labels.topic}</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                  >
                    {t.contact_page.labels.topics.map((topic, index) => (
                      <option key={index} value={topic}>{topic}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" />
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-aviation-red transition-colors">{t.contact_page.labels.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aviation-navy focus:border-transparent outline-none transition-all resize-none"
                  placeholder={t.contact_page.placeholders.message}
                ></textarea>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  className="flex items-center justify-center py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      {language === 'pt' ? 'Processando...' : 'Processing...'}
                      <Loader2 className="ml-2 w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      {t.buttons.sendMessage} <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section - Clean & Modern */}
      <div className="w-full py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full mb-4">
              <HelpCircle className="text-aviation-red w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-aviation-navy">{t.contact_page.faqTitle}</h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {t.contact_page.faqs?.map((faq, index) => (
              <motion.div
                key={index}
                className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-slate-50 border-aviation-red/30 shadow-sm' : 'bg-white hover:border-slate-300'}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <button
                  className="w-full flex justify-between items-center text-left p-6 font-bold text-lg text-aviation-navy focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className={openFaq === index ? 'text-aviation-red' : ''}>{faq.q}</span>
                  {openFaq === index ?
                    <ChevronUp className="w-5 h-5 text-aviation-red flex-shrink-0 ml-4" /> :
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                  }
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50 mt-2">
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
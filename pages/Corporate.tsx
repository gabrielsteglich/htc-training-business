import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Briefcase, BarChart, Settings, Check, ArrowRight, Building2, Laptop, Map } from 'lucide-react';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const Corporate: React.FC = () => {
    const { language } = useLanguage();
    const t = CONTENT[language];
    const { corporate_page } = t;

    useEffect(() => {
        document.title = language === 'pt' ? "Corporativo | HTC Training" : "Corporate | HTC Training";
    }, [language]);

    // Icon mapping helper for the top cards (Solutions)
    const getSolutionIcon = (index: number) => {
        switch (index) {
            case 0: return <Settings className="text-white w-8 h-8" />;
            case 1: return <Check className="text-white w-8 h-8" />;
            case 2: return <BarChart className="text-white w-8 h-8" />;
            default: return <Briefcase className="w-8 h-8" />;
        }
    };

    const getGradient = (index: number) => {
        switch (index) {
            case 0: return "bg-gradient-to-br from-blue-600 to-blue-800";
            case 1: return "bg-gradient-to-br from-aviation-red to-red-800";
            case 2: return "bg-gradient-to-br from-slate-600 to-slate-800";
            default: return "bg-gray-100";
        }
    };

    return (
        <div className="w-full pt-20">
            {/* Hero Header - Compact Version */}
            <div className="bg-aviation-navy py-16 text-center text-white relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/header-corporate.png"
                        alt="Corporate Meeting"
                        className="w-full h-full object-cover opacity-30"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/50 via-aviation-navy/80 to-aviation-navy"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
                    <div className="inline-block px-4 py-1 mb-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-aviation-red font-bold text-xs tracking-widest uppercase">{language === 'pt' ? 'Soluções B2B' : 'B2B Solutions'}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight">{corporate_page.title}</h1>
                    <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
                        {corporate_page.subtitle}
                    </p>
                    <div className="mt-6">
                        <NavLink to="/contact">
                            <Button variant="primary" className="px-8 py-3 text-lg shadow-xl shadow-aviation-red/20">
                                {t.buttons.requestProposal}
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Intro & Cards Section */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        {corporate_page.cards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-transparent hover:border-aviation-red transition-all duration-300 hover:-translate-y-2 group"
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <div className={`w-16 h-16 ${getGradient(index)} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                    {getSolutionIcon(index)}
                                </div>
                                <h3 className="text-2xl font-bold text-aviation-navy mb-4">{card.title}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    {card.desc}
                                </p>
                                <ul className="text-sm text-slate-500 space-y-3 bg-slate-50 p-4 rounded-lg">
                                    {card.list.map((item, idx) => (
                                        <li key={idx} className="font-medium text-slate-700">{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* NEW: Logistics / Delivery Methods Section (Essential for B2B) */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-sm font-bold text-aviation-red uppercase tracking-[0.2em] mb-3">{corporate_page.deliveryTitle}</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-aviation-navy">{corporate_page.deliverySubtitle}</h3>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        {corporate_page.deliveryMethods?.map((method, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center text-center p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                                }}
                            >
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-aviation-red">
                                    <method.icon className="w-10 h-10" />
                                </div>
                                <h4 className="text-xl font-bold text-aviation-navy mb-3">{method.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">{method.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* The Process - Visual Workflow */}
            <div className="bg-slate-50 py-24 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3 className="text-4xl font-bold text-aviation-navy">{corporate_page.processTitle}</h3>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{corporate_page.processSubtitle}</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.15 } }
                            }}
                        >
                            {corporate_page.process?.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col items-center text-center group"
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                                    }}
                                >
                                    <div className="w-20 h-20 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:border-aviation-navy group-hover:bg-aviation-navy transition-all duration-500 shadow-lg relative z-10">
                                        <step.icon className="w-8 h-8 text-aviation-navy group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-aviation-navy mb-3">{step.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Benefits Section - Dark Navy */}
            <div className="bg-aviation-navy py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-8 border-aviation-red pl-6 leading-tight">
                                {corporate_page.benefitsTitle}
                            </h2>
                            <div className="grid grid-cols-1 gap-6">
                                {corporate_page.benefits?.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-aviation-red/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-aviation-red" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 text-white">{benefit.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            className="md:w-1/2 relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="absolute -inset-4 bg-white/5 rounded-2xl transform rotate-3"></div>
                            <img
                                src="/images/corporate-classroom.png"
                                alt="Instructor leading corporate training"
                                className="relative rounded-2xl shadow-2xl border border-white/10 transition-transform duration-500 hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* CTA Bottom */}
            <div className="relative py-24 bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Wing" />
                </div>
                <motion.div
                    className="max-w-4xl mx-auto px-4 text-center relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy mb-6">{corporate_page.partnerTitle}</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        {corporate_page.partnerDesc}
                    </p>
                    <NavLink to="/contact">
                        {/* Fixed button layout */}
                        <Button variant="primary" className="px-10 py-5 text-xl font-bold shadow-xl shadow-aviation-red/20 hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto">
                            {t.buttons.requestProposal} <ArrowRight className="w-6 h-6" />
                        </Button>
                    </NavLink>
                </motion.div>
            </div>
        </div>
    );
};
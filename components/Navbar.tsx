import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { getAssetPath } from '../utils/assetPath';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = CONTENT[language];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navbarVariants = {
    initial: { backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', padding: '14px 0' },
    scrolled: { backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', padding: '10px 0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }
  };

  const mobileMenuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const linkVariants = {
    hover: { scale: 1.05, color: '#dc2626' },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      variants={navbarVariants}
      className="fixed w-full z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer z-50">
            <NavLink to="/" className="flex items-center group">
              <img
                src={getAssetPath('/images/logo-htc.png')}
                alt="HTC Training and Business"
                className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {t.nav.map((item) => (
              <div
                key={item.path}
                className="relative group flex items-center h-full"
                onMouseEnter={() => item.submenu && setHoveredSubmenu(item.path)}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                {item.submenu ? (
                  <div className="relative">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors duration-200 uppercase tracking-wide flex items-center gap-1 ${isActive
                          ? 'text-aviation-red'
                          : 'text-slate-600 hover:text-aviation-navy'
                        }`
                      }
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${hoveredSubmenu === item.path ? 'rotate-180' : ''}`} />
                    </NavLink>

                    {/* Animated Dropdown */}
                    <AnimatePresence>
                      {hoveredSubmenu === item.path && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 pt-4 -ml-4"
                        >
                          <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden border border-slate-100 ring-1 ring-black ring-opacity-5">
                            {item.submenu.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-6 py-3 text-sm transition-all duration-200 border-l-2 ${isActive
                                    ? 'text-aviation-red border-aviation-red bg-red-50/30'
                                    : 'text-slate-600 border-transparent hover:text-aviation-navy hover:bg-slate-50 hover:pl-7'
                                  }`
                                }
                              >
                                {subItem.label}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative text-sm font-medium transition-colors duration-200 uppercase tracking-wide group ${isActive
                        ? 'text-aviation-red'
                        : 'text-slate-600 hover:text-aviation-navy'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aviation-red"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aviation-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </>
                    )}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors text-slate-600 font-semibold text-xs border border-slate-200"
              title="Mudar Idioma / Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'BR' : 'US'}</span>
            </motion.button>

            <NavLink to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-aviation-navy text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-aviation-navy/20 hover:shadow-aviation-navy/40 transition-all uppercase flex items-center gap-2"
              >
                <span>{t.buttons.getStarted}</span>
                <Phone className="w-4 h-4" />
              </motion.button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-aviation-navy focus:outline-none p-2 bg-slate-100 rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl z-40 md:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {t.nav.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.submenu ? (
                    <div className="space-y-3">
                      <div className="text-lg font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">
                        {item.label}
                      </div>
                      <div className="pl-4 border-l-2 border-slate-200 space-y-3">
                        {item.submenu.map(subItem => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                              `block text-base font-medium transition-colors ${isActive ? 'text-aviation-red' : 'text-slate-500'}`
                            }
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-2xl font-bold transition-colors ${isActive ? 'text-aviation-red' : 'text-slate-800'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-slate-200 flex flex-col gap-4"
              >
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold"
                >
                  <Globe className="w-5 h-5" />
                  <span>{language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}</span>
                </button>

                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-aviation-navy text-white px-6 py-4 rounded-xl text-base font-bold shadow-lg uppercase flex items-center justify-center gap-2">
                    {t.buttons.getStarted}
                    <Phone className="w-5 h-5" />
                  </button>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

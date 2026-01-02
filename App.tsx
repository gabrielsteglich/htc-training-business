import React, { Component, useEffect, ReactNode, ErrorInfo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Training } from './pages/Training';
import { Corporate } from './pages/Corporate';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Instructors } from './pages/Instructors';
import { CRMLanding } from './pages/CRMLanding';
import { DGRLanding } from './pages/DGRLanding';
import { AVSECLanding } from './pages/AVSECLanding';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Error Boundary Component to prevent white screens
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full border-l-4 border-red-600">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong</h1>
            <p className="text-slate-600 mb-6">The application encountered an unexpected error.</p>
            <div className="bg-slate-100 p-4 rounded text-xs overflow-auto text-red-800 font-mono mb-6 max-h-40">
              {this.state.error?.message || 'Unknown Error'}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-slate-900 text-white rounded font-bold hover:bg-slate-800 transition-colors w-full"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans bg-white text-slate-900">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/training" element={<Training />} />
                <Route path="/corporate" element={<Corporate />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/instructors" element={<Instructors />} />
                {/* Specific LP for CRM Ads */}
                <Route path="/lp-crm" element={<CRMLanding />} />
                {/* Specific LP for DGR Ads */}
                <Route path="/lp-dgr" element={<DGRLanding />} />
                {/* Specific LP for AVSEC Ads */}
                <Route path="/lp-avsec" element={<AVSECLanding />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
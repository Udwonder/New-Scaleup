/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { DonatePage } from './pages/DonatePage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { ScrollToTop } from './components/ScrollToTop';
import { StrategicPartners } from './components/StrategicPartners';
import { Analytics } from './components/Analytics';

function ConditionalPartners() {
  const location = useLocation();
  if (location.pathname === '/contact') return null;
  return <StrategicPartners />;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="scaleup-theme">
      <Router>
        <Analytics />
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-brand-green selection:text-brand-blue flex flex-col transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
          <ConditionalPartners />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

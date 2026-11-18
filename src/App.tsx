import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { VisualPreview } from './components/VisualPreview';
import { Features } from './components/Features';
import { Installation } from './components/Installation';
import { Roadmap } from './components/Roadmap';
import { QuickFaq } from './components/QuickFaq';
import { FullFaq } from './components/FullFaq';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Theme state
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('exdesktop_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  // Current route state
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Sync theme with document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('exdesktop_theme', theme);
  }, [theme]);

  // Handle back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title
  useEffect(() => {
    if (currentPath.startsWith('/faq')) {
      document.title = 'WIKI — exDesktop';
    } else {
      document.title = 'exDesktop — кастомный клиент Telegram';
    }
  }, [currentPath]);

  // Navigate helper
  const handleNavigate = (path: string) => {
    const [targetPath, targetHash] = path.split('#');
    const normalizedTarget = targetPath === '' ? '/' : targetPath;
    const isSamePage = normalizedTarget === currentPath;

    if (isSamePage && targetHash) {
      window.history.pushState(null, '', path);
      const el = document.getElementById(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState(null, '', path);
    setCurrentPath(normalizedTarget);

    if (targetHash) {
      setTimeout(() => {
        const el = document.getElementById(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isFaqPage = currentPath.startsWith('/faq');

  return (
    <div className="app-container">
      <Header
        currentPath={currentPath}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        onNavigate={handleNavigate}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {isFaqPage ? (
        <FullFaq onNavigate={handleNavigate} />
      ) : (
        <main>
          <Hero onNavigate={handleNavigate} />
          <VisualPreview />
          <Features />
          <Installation />
          <Roadmap />
          <QuickFaq onNavigate={handleNavigate} />
        </main>
      )}

      <Footer />
    </div>
  );
};

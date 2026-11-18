import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { VisualPreview } from './components/VisualPreview';
import { Features } from './components/Features';
import { Installation } from './components/Installation';
import { Roadmap } from './components/Roadmap';
import { QuickWiki } from './components/QuickWiki';
import { FullWiki } from './components/FullWiki';
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

  // Current route state (normalize /faq to /wiki)
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/faq')) {
      const newPath = path.replace(/^\/faq/, '/wiki');
      window.history.replaceState(null, '', newPath + window.location.hash);
      return newPath;
    }
    return path;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Sync theme with document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('exdesktop_theme', theme);
  }, [theme]);

  // Handle back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/faq')) {
        const newPath = path.replace(/^\/faq/, '/wiki');
        window.history.replaceState(null, '', newPath + window.location.hash);
        setCurrentPath(newPath);
      } else {
        setCurrentPath(path);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title
  useEffect(() => {
    if (currentPath.startsWith('/wiki')) {
      document.title = 'WIKI — exDesktop';
    } else {
      document.title = 'exDesktop — кастомный клиент Telegram';
    }
  }, [currentPath]);

  // Navigate helper
  const handleNavigate = (path: string) => {
    const normalizedPath = path.startsWith('/faq') ? path.replace(/^\/faq/, '/wiki') : path;
    const [targetPath, targetHash] = normalizedPath.split('#');
    const normalizedTarget = targetPath === '' ? '/' : targetPath;
    const isSamePage = normalizedTarget === currentPath;

    if (isSamePage && targetHash) {
      window.history.pushState(null, '', normalizedPath);
      const el = document.getElementById(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState(null, '', normalizedPath);
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

  const isWikiPage = currentPath.startsWith('/wiki');

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

      {isWikiPage ? (
        <FullWiki onNavigate={handleNavigate} currentPath={currentPath} />
      ) : (
        <main>
          <Hero onNavigate={handleNavigate} />
          <VisualPreview />
          <Features />
          <Installation />
          <Roadmap />
          <QuickWiki onNavigate={handleNavigate} />
        </main>
      )}

      <Footer />
    </div>
  );
};

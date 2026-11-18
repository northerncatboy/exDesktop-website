import React from 'react';
import { Icon } from './Icon';
import { asset } from '../utils/asset';
import { Theme } from '../types';
import { SITE_LINKS } from '../data/siteData';

interface HeaderProps {
  currentPath: string;
  theme: Theme;
  onToggleTheme: () => void;
  onOpenMobileMenu: () => void;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  theme,
  onToggleTheme,
  onOpenMobileMenu,
  onNavigate
}) => {
  const isFaq = currentPath.startsWith('/faq');

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <header className="site-header">
      {/* Brand logo & title */}
      <a
        href="/"
        onClick={(e) => handleLinkClick(e, '/')}
        className="brand-link"
        aria-label="exDesktop Главная"
      >
        <div className="brand-mark">
          <img src={asset('assets/markSvg.svg')} alt="" width={44} height={44} />
        </div>
        <span className="brand-text">exDesktop</span>
      </a>

      {/* Desktop Navigation Capsule */}
      <nav className="desktop-nav" aria-label="Основная навигация">
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className={`nav-pill ${!isFaq ? 'active' : ''}`}
          aria-current={!isFaq ? 'page' : undefined}
        >
          Главная
        </a>
        <a
          href="/#installation"
          onClick={(e) => handleLinkClick(e, '/#installation')}
          className="nav-pill"
        >
          Установка
        </a>
        <a
          href="/faq"
          onClick={(e) => handleLinkClick(e, '/faq')}
          className={`nav-pill ${isFaq ? 'active' : ''}`}
          aria-current={isFaq ? 'page' : undefined}
        >
          WIKI
        </a>
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          className="theme-toggle-btn"
          aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
          title={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={22} color="var(--accent-primary)" />
        </button>

        {/* GitHub desktop link */}
        <a
          href={SITE_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-github-btn"
          aria-label="GitHub репозиторий exDesktop"
        >
          <Icon name="code" size={22} color="currentColor" />
          <span>GitHub</span>
        </a>

        {/* Mobile Menu Burger */}
        <button
          onClick={onOpenMobileMenu}
          className="mobile-burger-btn"
          aria-label="Открыть мобильное меню"
          aria-expanded="false"
        >
          <Icon name="menu" size={24} color="var(--accent-primary)" />
        </button>
      </div>

      <style>{`
        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 96px;
          width: 100%;
          position: relative;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-mark {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 150ms ease;
        }

        .brand-link:hover .brand-mark {
          transform: scale(1.05);
        }

        .brand-text {
          font-size: 24px;
          font-weight: 700;
          line-height: 30px;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        /* Capsule Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          background-color: var(--surface-soft);
          border-radius: 24px;
          padding: 4px;
          gap: 4px;
          width: 380px;
          height: 48px;
        }

        .nav-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          border-radius: 20px;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.25;
          color: var(--text-secondary);
          transition: background-color 150ms ease, color 150ms ease;
        }

        .nav-pill:nth-child(1) { width: 116px; }
        .nav-pill:nth-child(2) { width: 132px; }
        .nav-pill:nth-child(3) { width: 116px; }

        .nav-pill:hover {
          color: var(--text-primary);
          background-color: rgba(255, 255, 255, 0.04);
        }

        .nav-pill.active {
          background-color: var(--accent-container);
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .theme-toggle-btn {
          width: 48px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background-color: var(--surface-soft);
          transition: background-color 150ms ease, transform 150ms ease;
        }

        .theme-toggle-btn:hover {
          background-color: var(--surface-raised);
          transform: scale(1.05);
        }

        .desktop-github-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 188px;
          height: 52px;
          border-radius: 26px;
          background-color: var(--surface-soft);
          color: var(--text-primary);
          font-size: 16px;
          font-weight: 600;
          transition: background-color 150ms ease, transform 150ms ease;
        }

        .desktop-github-btn:hover {
          background-color: var(--surface-raised);
          transform: translateY(-1px);
        }

        .mobile-burger-btn {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background-color: var(--surface-soft);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1199px) {
          .desktop-nav {
            width: 320px;
          }
          .nav-pill:nth-child(1),
          .nav-pill:nth-child(3) { width: 95px; }
          .nav-pill:nth-child(2) { width: 120px; }
          .desktop-github-btn {
            width: 140px;
          }
        }

        @media (max-width: 767px) {
          .site-header {
            height: 64px;
            margin-bottom: 8px;
          }
          .brand-mark {
            width: 36px;
            height: 36px;
          }
          .brand-text {
            font-size: 20px;
          }
          .header-actions {
            gap: 8px;
          }
          .desktop-nav,
          .desktop-github-btn {
            display: none;
          }
          .mobile-burger-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

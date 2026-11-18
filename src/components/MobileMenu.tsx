import React, { useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { asset } from '../utils/asset';
import { SITE_LINKS } from '../data/siteData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleItemClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    onClose();
  };

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div
        className="mobile-menu-panel"
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильная навигация"
      >
        {/* Top Header */}
        <div className="mobile-menu-header">
          <div className="menu-brand">
            <img src={asset('assets/markSvg.svg')} alt="" width={36} height={36} />
            <span className="menu-brand-text">exDesktop</span>
          </div>
          <button
            onClick={onClose}
            className="menu-close-btn"
            aria-label="Закрыть мобильное меню"
          >
            <Icon name="close" size={24} color="var(--text-primary)" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="mobile-menu-nav">
          <a
            href="/"
            onClick={(e) => handleItemClick(e, '/')}
            className="menu-item"
          >
            Главная
          </a>
          <a
            href="/#preview"
            onClick={(e) => handleItemClick(e, '/#preview')}
            className="menu-item"
          >
            Превью
          </a>
          <a
            href="/#features"
            onClick={(e) => handleItemClick(e, '/#features')}
            className="menu-item"
          >
            Возможности
          </a>
          <a
            href="/#installation"
            onClick={(e) => handleItemClick(e, '/#installation')}
            className="menu-item"
          >
            Установка
          </a>
          <a
            href="/#roadmap"
            onClick={(e) => handleItemClick(e, '/#roadmap')}
            className="menu-item"
          >
            Roadmap
          </a>
          <a
            href="/wiki"
            onClick={(e) => handleItemClick(e, '/wiki')}
            className="menu-item"
          >
            WIKI
          </a>
          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item external"
          >
            <span>GitHub</span>
            <Icon name="arrow_external" size={20} color="var(--text-secondary)" />
          </a>
        </nav>

        {/* CTA Button */}
        <div className="mobile-menu-cta">
          <a
            href={SITE_LINKS.download}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button primary"
            style={{ width: '100%' }}
          >
            <Icon name="download" size={22} color="var(--text-on-accent)" />
            <span>Скачать exDesktop</span>
          </a>
        </div>
      </div>

      <style>{`
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 16px;
        }

        .mobile-menu-panel {
          width: 100%;
          max-width: 390px;
          background-color: var(--surface-soft);
          border-radius: 32px;
          padding: 24px 20px 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
          animation: slideDown 200ms ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .menu-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .menu-brand-text {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .menu-close-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background-color: var(--surface-card);
        }

        .mobile-menu-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-radius: 20px;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
          background-color: transparent;
          transition: background-color 150ms ease;
        }

        .menu-item:hover {
          background-color: var(--surface-card);
        }

        .menu-item.external {
          color: var(--text-secondary);
        }

        .mobile-menu-cta {
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
};

import React from 'react';
import { Icon } from './Icon';
import { SITE_LINKS } from '../data/siteData';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const Footer: React.FC = () => {
  const { version } = useLatestRelease();

  const footerLinks = [
    { label: 'Telegram', url: SITE_LINKS.telegram, icon: 'telegram' as const },
    { label: 'Telegram Chat', url: SITE_LINKS.telegramChat, icon: 'chat' as const },
    { label: 'Changelog', url: SITE_LINKS.changelog, icon: 'changelog' as const },
    { label: 'Contact', url: SITE_LINKS.contact, icon: 'mail' as const },
    { label: 'Github', url: SITE_LINKS.github, icon: 'github' as const },
    { label: 'PluginSDK', url: SITE_LINKS.pluginSdk, icon: 'code' as const }
  ];

  return (
    <footer className="site-footer">
      <h2 className="footer-title">Может быть интересно</h2>

      <div className="footer-links-row">
        {footerLinks.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-pill-btn"
          >
            <Icon name={item.icon} size={22} color="currentColor" />
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom-info">
        <span className="copyright-text">© 2026 exDesktop {version ? `v${version} ` : ''}· GPL-3.0</span>
        <span className="disclaimer-text">Неофициальный проект. Не связан с Telegram FZ-LLC.</span>
      </div>

      <style>{`
        .site-footer {
          margin-top: 64px;
          background-color: var(--surface-soft);
          border-radius: 32px;
          padding: 28px 32px 32px 32px;
          width: 100%;
        }

        .footer-title {
          font-size: 29px;
          font-weight: 500;
          line-height: 40.6px;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .footer-links-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .footer-pill-btn {
          height: 52px;
          border-radius: 26px;
          background-color: var(--surface-raised);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 150ms ease, transform 150ms ease;
        }

        .footer-pill-btn:hover {
          background-color: var(--surface-card);
          transform: translateY(-2px);
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background-color: var(--divider);
          margin: 24px 0 20px 0;
        }

        .footer-bottom-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          line-height: 18.2px;
          color: var(--text-secondary);
        }

        @media (max-width: 1199px) {
          .footer-links-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 767px) {
          .site-footer {
            margin-top: 40px;
            padding: 22px 18px;
            border-radius: 22px;
          }
          .footer-title {
            font-size: 22px;
            margin-bottom: 16px;
          }
          .footer-links-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .footer-pill-btn {
            font-size: 13.5px;
            height: 46px;
            padding: 0 10px;
            gap: 8px;
            min-width: 0;
            white-space: nowrap;
          }
          .footer-bottom-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        @media (max-width: 420px) {
          .footer-links-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

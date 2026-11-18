import React, { useState } from 'react';
import { Icon } from './Icon';
import { INSTALL_COMMAND, INSTALL_COMMAND_SINGLE, SITE_LINKS } from '../data/siteData';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const Installation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { version, releaseUrl } = useLatestRelease();

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND_SINGLE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="installation-section" id="installation">
      <div className="install-grid">
        {/* Left Card: Installation & Terminal */}
        <div className="install-card">
          <div className="install-header">
            <h2 className="install-title">Установить exDesktop</h2>
            <p className="install-subtitle">Для Linux / macOS выполни команду</p>
          </div>

          <div className="terminal-box" onClick={handleCopy} title="Нажмите, чтобы скопировать команду">
            <div className="terminal-top">
              <span className="terminal-label">TERMINAL / LINUX · macOS</span>
              <button
                type="button"
                className="copy-btn"
                aria-label="Скопировать команду установки"
              >
                <Icon name={copied ? 'check' : 'terminal'} size={16} color="var(--terminal-sub)" />
                <span>{copied ? 'Скопировано!' : 'Копировать'}</span>
              </button>
            </div>
            <pre className="terminal-code">
              <code>{INSTALL_COMMAND}</code>
            </pre>
          </div>

          <div className="windows-link-wrapper">
            <a
              href={releaseUrl || SITE_LINKS.download}
              target="_blank"
              rel="noopener noreferrer"
              className="windows-link"
              title={`Скачать установщик версии ${version} с GitHub Releases`}
            >
              <span>На Windows? Скачай установщик ({version}) со страницы релизов</span>
              <Icon name="arrow_external" size={18} color="var(--accent-primary)" />
            </a>
          </div>
        </div>

        {/* Right Card: GitHub Repository */}
        <div className="repository-card">
          <div className="repo-top">
            <div className="repo-icon-tile">
              <Icon name="github" size={28} color="var(--text-primary)" />
            </div>
            <a
              href={SITE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-out-link"
              aria-label="Открыть GitHub репозиторий"
            >
              <Icon name="arrow_external" size={24} color="var(--repo-desc)" />
            </a>
          </div>

          <div className="repo-text-group">
            <h3 className="repo-title">Открытый исходный код.<br />Лицензия GPL 3.0</h3>
            <p className="repo-desc">Смотри, как всё устроено, предлагай идеи и участвуй в развитии.</p>
          </div>

          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-action-btn"
          >
            <span>metawka / exDesktop</span>
            <Icon name="arrow_right" size={20} color="currentColor" />
          </a>
        </div>
      </div>

      <style>{`
        .installation-section {
          margin-top: 64px;
          width: 100%;
        }

        .install-grid {
          display: grid;
          grid-template-columns: 858fr 430fr;
          gap: 24px;
        }

        /* Left Card */
        .install-card {
          background-color: var(--surface-card);
          border-radius: 32px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 352px;
          min-width: 0;
        }

        .install-title {
          font-size: 30px;
          font-weight: 600;
          line-height: 42px;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .install-subtitle {
          font-size: 17px;
          color: var(--text-secondary);
        }

        .terminal-box {
          background-color: var(--terminal-bg);
          border-radius: 24px;
          padding: 16px 20px;
          margin: 20px 0 16px 0;
          cursor: pointer;
          transition: background-color 150ms ease, box-shadow 150ms ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
          min-width: 0;
          max-width: 100%;
        }

        .terminal-box:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .terminal-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .terminal-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--terminal-sub);
          font-family: var(--font-mono);
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--terminal-sub);
          padding: 4px 8px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
        }

        .terminal-code {
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.6;
          color: var(--terminal-command);
          overflow-x: auto;
          white-space: pre;
          margin: 0;
        }

        .windows-link-wrapper {
          display: flex;
          align-items: center;
        }

        .windows-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          line-height: 1.4;
          color: var(--accent-primary);
          font-weight: 500;
          text-decoration: none;
          flex-wrap: wrap;
        }

        .windows-link:hover {
          text-decoration: underline;
        }

        /* Right Card */
        .repository-card {
          background-color: var(--surface-card);
          border-radius: 32px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 352px;
          position: relative;
          min-width: 0;
        }

        .repo-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .repo-icon-tile {
          width: 56px;
          height: 56px;
          border-radius: 20px;
          background-color: var(--surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .repo-out-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
        }

        .repo-title {
          font-size: 29px;
          font-weight: 600;
          line-height: 33.35px;
          color: var(--repo-title);
          margin-bottom: 12px;
        }

        .repo-desc {
          font-size: 17px;
          line-height: 23.8px;
          color: var(--repo-desc);
        }

        .repo-action-btn {
          height: 48px;
          border-radius: 24px;
          background-color: var(--repo-btn-bg);
          color: var(--repo-btn-text);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 150ms ease, opacity 150ms ease;
        }

        .repo-action-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        @media (max-width: 1199px) {
          .install-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .installation-section {
            margin-top: 40px;
          }
          .install-card,
          .repository-card {
            border-radius: 24px;
            padding: 24px 20px;
          }
          .install-title {
            font-size: 24px;
            line-height: 1.3;
          }
          .repo-title {
            font-size: 24px;
            line-height: 1.25;
          }
        }
      `}</style>
    </section>
  );
};

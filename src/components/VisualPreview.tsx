import React from 'react';
import { Icon } from './Icon';

export const VisualPreview: React.FC = () => {
  return (
    <section className="preview-section" id="preview">
      <div className="section-header">
        <h2 className="section-title">Посмотри, как это работает</h2>
        <p className="section-subtitle">Настройки и оформление — реальные скриншоты exDesktop.</p>
      </div>

      <div className="preview-grid">
        {/* Card 1: Settings */}
        <a
          href="/screenshots/settings.webp"
          target="_blank"
          rel="noopener noreferrer"
          className="preview-card"
          aria-label="Скриншот Настройки клиента (открыть оригинал в новой вкладке)"
        >
          <div className="preview-image-wrapper">
            <img
              src="/screenshots/settings.webp"
              alt="Скриншот настроек exDesktop"
              className="preview-image"
              loading="lazy"
            />
          </div>
          <div className="preview-card-footer">
            <span className="card-label">Настройки клиента</span>
            <Icon name="arrow_external" size={20} color="var(--text-secondary)" />
          </div>
        </a>

        {/* Card 2: Appearance */}
        <a
          href="/screenshots/appearance.webp"
          target="_blank"
          rel="noopener noreferrer"
          className="preview-card"
          aria-label="Скриншот Оформление под себя (открыть оригинал в новой вкладке)"
        >
          <div className="preview-image-wrapper">
            <img
              src="/screenshots/appearance.webp"
              alt="Скриншот оформления exDesktop"
              className="preview-image"
              loading="lazy"
            />
          </div>
          <div className="preview-card-footer">
            <span className="card-label">Оформление под себя</span>
            <Icon name="arrow_external" size={20} color="var(--text-secondary)" />
          </div>
        </a>
      </div>

      <style>{`
        .preview-section {
          margin-top: 64px;
          width: 100%;
        }

        .section-header {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 600;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .section-subtitle {
          font-size: 18px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .preview-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .preview-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .preview-image-wrapper {
          width: 100%;
          aspect-ratio: 2000 / 1228;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.2);
        }

        .preview-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 250ms ease;
        }

        .preview-card:hover .preview-image {
          transform: scale(1.02);
        }

        .preview-card-footer {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-label {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
        }

        @media (max-width: 1199px) {
          .preview-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 767px) {
          .preview-section {
            margin-top: 40px;
          }
          .section-title {
            font-size: 26px;
          }
          .section-subtitle {
            font-size: 16px;
          }
          .card-label {
            font-size: 18px;
          }
          .preview-card-footer {
            padding: 16px 20px;
          }
        }
      `}</style>
    </section>
  );
};

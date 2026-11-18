import React from 'react';
import { Icon } from './Icon';
import { FEATURES } from '../data/siteData';

export const Features: React.FC = () => {
  return (
    <section className="features-section" id="features">
      <div className="section-header">
        <h2 className="section-title">Функционал exDesktop</h2>
      </div>

      <div className="features-grid">
        {FEATURES.map((item) => (
          <div key={item.id} className="feature-card">
            <div className="feature-icon-tile">
              <Icon name={item.iconName} size={24} color="var(--accent-primary)" />
            </div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        .features-section {
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 24px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 150ms ease, background-color 150ms ease;
        }

        .feature-card:hover {
          transform: translateY(-2px);
          background-color: var(--surface-raised);
        }

        .feature-icon-tile {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background-color: var(--surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .feature-title {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .feature-desc {
          font-size: 16px;
          line-height: 1.45;
          color: var(--text-secondary);
        }

        @media (max-width: 1199px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .features-section {
            margin-top: 40px;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .section-title {
            font-size: 26px;
          }
          .section-subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

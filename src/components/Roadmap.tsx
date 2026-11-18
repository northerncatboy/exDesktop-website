import React from 'react';
import { Icon } from './Icon';
import { ROADMAP_STAGES } from '../data/siteData';

export const Roadmap: React.FC = () => {
  return (
    <section className="roadmap-section" id="roadmap">
      <div className="section-header">
        <h2 className="section-title">Roadmap</h2>
        <p className="section-subtitle">Открытое развитие. Без обещаний по датам.</p>
      </div>

      <div className="roadmap-grid">
        {ROADMAP_STAGES.map((stage) => (
          <div
            key={stage.id}
            className={`roadmap-card ${stage.isAccent ? 'accent-stage' : ''}`}
          >
            <div className="stage-top">
              <div className="stage-badge">
                <Icon
                  name={stage.statusIcon}
                  size={16}
                  color={stage.isAccent ? 'var(--text-on-accent)' : 'var(--accent-primary)'}
                />
                <span>{stage.badge}</span>
              </div>
              <span className="stage-num">{stage.number}</span>
            </div>

            <div className="stage-content">
              <h3 className="stage-title">{stage.title}</h3>
              <p className="stage-desc">{stage.description}</p>
            </div>

            <a
              href={stage.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="stage-link"
            >
              <span>{stage.linkLabel}</span>
              <Icon name="arrow_right" size={18} color="currentColor" />
            </a>
          </div>
        ))}
      </div>

      <p className="roadmap-note">
        Направления по README и открытым обсуждениям проекта. Сроки релизов не заявлены.
      </p>

      <style>{`
        .roadmap-section {
          margin-top: 64px;
          width: 100%;
        }

        .section-header {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
        }

        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .roadmap-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 24px;
          min-height: 232px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 150ms ease, background-color 150ms ease;
        }

        .roadmap-card:hover {
          transform: translateY(-2px);
          background-color: var(--surface-raised);
        }

        .roadmap-card.accent-stage {
          background-color: var(--accent-container);
        }

        .stage-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stage-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 15px;
          background-color: var(--surface-soft);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .accent-stage .stage-badge {
          background-color: var(--accent-primary);
          color: var(--text-on-accent);
        }

        .stage-num {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .stage-content {
          margin: 16px 0 12px 0;
        }

        .stage-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .stage-desc {
          font-size: 15px;
          line-height: 1.45;
          color: var(--text-secondary);
        }

        .stage-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 600;
          color: var(--accent-primary);
          text-decoration: none;
        }

        .accent-stage .stage-link {
          color: var(--text-primary);
        }

        .stage-link:hover {
          text-decoration: underline;
        }

        .roadmap-note {
          margin-top: 16px;
          font-size: 13px;
          color: var(--text-secondary);
        }

        @media (max-width: 1199px) {
          .roadmap-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 767px) {
          .roadmap-section {
            margin-top: 40px;
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

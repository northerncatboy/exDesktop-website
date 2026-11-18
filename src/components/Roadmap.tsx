import React from 'react';
import { ROADMAP_COLUMNS } from '../data/siteData';

export const Roadmap: React.FC = () => {
  return (
    <section className="roadmap-section" id="roadmap">
      <div className="section-header">
        <h2 className="section-title">Roadmap</h2>
      </div>

      <div className="rm-grid">
        {ROADMAP_COLUMNS.map((col) => (
          <div key={col.id} className={`rm-col rm-${col.status}`}>
            <div className="rm-head">
              <span className="rm-dot" aria-hidden="true" />
              <span className="rm-col-title">{col.title}</span>
              <span className="rm-count">{col.items.length}</span>
            </div>

            <ul className="rm-list">
              {col.items.map((item) => (
                <li key={item.id} className="rm-item">
                  <div className="rm-item-title">{item.title}</div>
                  {item.text && <div className="rm-item-text">{item.text}</div>}
                  {item.version && <span className="rm-ver-badge">{item.version}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

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

        .rm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .rm-col {
          background-color: var(--surface-card);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          padding: 24px 22px 16px;
          display: flex;
          flex-direction: column;
          min-width: 0;
          transition: border-color 200ms ease, background-color 200ms ease;
        }

        .rm-col:hover {
          background-color: var(--surface-raised);
          border-color: var(--accent-outline);
        }

        .rm-head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
          font-weight: 600;
          font-size: 16px;
          color: var(--text-primary);
        }

        .rm-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex: none;
          background-color: var(--text-secondary);
        }

        .rm-progress .rm-dot {
          background-color: var(--accent-primary);
          box-shadow: 0 0 8px rgba(255, 180, 169, 0.4);
        }

        .rm-done .rm-dot {
          background-color: #4fb27a;
          box-shadow: 0 0 8px rgba(79, 178, 122, 0.4);
        }

        .rm-count {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .rm-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .rm-item {
          padding: 16px 0;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .rm-item:last-child {
          border-bottom: none;
        }

        .rm-item-title {
          font-weight: 500;
          font-size: 15px;
          line-height: 1.45;
          color: var(--text-primary);
          word-break: break-word;
        }

        .rm-item-text {
          color: var(--text-secondary);
          font-size: 13.5px;
          line-height: 1.5;
        }

        .rm-ver-badge {
          display: inline-block;
          align-self: flex-start;
          margin-top: 4px;
          font-family: var(--font-mono);
          font-size: 12px;
          padding: 3px 8px;
          border-radius: 6px;
          background-color: var(--surface-soft);
          color: var(--text-secondary);
        }

        .rm-progress .rm-ver-badge {
          background-color: var(--accent-container);
          color: var(--accent-primary);
        }

        .rm-done .rm-ver-badge {
          background-color: rgba(79, 178, 122, 0.15);
          color: #4fb27a;
        }

        @media (max-width: 1024px) {
          .rm-grid {
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
          .rm-col {
            padding: 20px 18px 12px;
            border-radius: 20px;
          }
        }
      `}</style>
    </section>
  );
};

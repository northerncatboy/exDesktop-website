import React from 'react';
import { Icon } from './Icon';
import { SITE_LINKS } from '../data/siteData';

interface QuickWikiProps {
  onNavigate: (path: string) => void;
}

export const QuickWiki: React.FC<QuickWikiProps> = ({ onNavigate }) => {
  return (
    <section className="quick-wiki-section" id="wiki">
      <div className="quick-wiki-grid">
        {/* Left Column: WIKI Introduction */}
        <div className="wiki-intro-card">
          <div className="intro-top">
            <div className="wiki-icon-emblem">
              <Icon name="help" size={40} color="var(--accent-primary)" />
            </div>
            <h2 className="intro-headline">
              Остались вопросы?<br />Хотите что-то узнать?
            </h2>
          </div>

          <a
            href={SITE_LINKS.wiki}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/wiki');
            }}
            className="full-wiki-btn"
          >
            <span>Открыть WIKI</span>
            <Icon name="arrow_right" size={22} color="currentColor" />
          </a>
        </div>

        {/* Right Column: Q&A List */}
        <div className="wiki-list-col">
          {/* Question 1: Expanded by default */}
          <div className="wiki-expanded-card">
            <div className="wiki-card-header">
              <h3 className="question-title">Форматы плагинов и совместимость</h3>
              <div className="wiki-chevron-down">
                <Icon name="arrow_down" size={24} color="var(--text-secondary)" />
              </div>
            </div>
            <div className="answer-content">
              <p>
                exDesktop запускает плагины exteraGram на компьютере. Движок плагинов совместим с SDK exteraGram 1.4.6.2: плагин из каталога устанавливается без изменений, а его функции работают в той мере, в которой у них есть аналог на ПК.
              </p>
              <p style={{ marginTop: '8px' }}>
                Поддерживаются форматы однофайловых плагинов (.plugin, .py) и архивы Elyx (.elyx, .eaf). Метаданные читаются безопасно из констант верхнего уровня без выполнения кода.
              </p>
            </div>
          </div>

          {/* Question 2: Link to /wiki#что-работает-так-же-как-на-android */}
          <a
            href="/wiki#что-работает-так-же-как-на-android"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/wiki#что-работает-так-же-как-на-android');
            }}
            className="wiki-link-row"
          >
            <span className="question-row-title">Что работает так же, как на Android?</span>
            <div className="wiki-chevron-right">
              <Icon name="arrow_right" size={24} color="var(--text-secondary)" />
            </div>
          </a>

          {/* Question 3: Link to /wiki#эмуляция-java-и-android */}
          <a
            href="/wiki#эмуляция-java-и-android"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/wiki#эмуляция-java-и-android');
            }}
            className="wiki-link-row"
          >
            <span className="question-row-title">Эмуляция Java, Android и Xposed-хуки</span>
            <div className="wiki-chevron-right">
              <Icon name="arrow_right" size={24} color="var(--text-secondary)" />
            </div>
          </a>

          {/* Question 4: Link to /wiki#защита */}
          <a
            href="/wiki#защита"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/wiki#защита');
            }}
            className="wiki-link-row"
          >
            <span className="question-row-title">Песочница, защита данных и PluginGuard</span>
            <div className="wiki-chevron-right">
              <Icon name="arrow_right" size={24} color="var(--text-secondary)" />
            </div>
          </a>
        </div>
      </div>

      <style>{`
        .quick-wiki-section {
          margin-top: 64px;
          width: 100%;
        }

        .quick-wiki-grid {
          display: grid;
          grid-template-columns: 430fr 858fr;
          gap: 24px;
        }

        /* Intro Card */
        .wiki-intro-card {
          background-color: var(--surface-card);
          border-radius: 32px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 468px;
          min-width: 0;
        }

        .wiki-icon-emblem {
          width: 64px;
          height: 64px;
          border-radius: 24px;
          background-color: var(--surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .intro-headline {
          font-size: 42px;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .full-wiki-btn {
          height: 60px;
          border-radius: 30px;
          background-color: var(--accent-primary);
          color: var(--text-on-accent);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 150ms ease, opacity 150ms ease;
        }

        .full-wiki-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        /* Right Column */
        .wiki-list-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
        }

        .wiki-expanded-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 28px;
          min-width: 0;
        }

        .wiki-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 12px;
        }

        .question-title {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .answer-content {
          font-size: 17px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .wiki-link-row {
          background-color: var(--surface-card);
          border-radius: 24px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          transition: background-color 150ms ease, transform 150ms ease;
          min-height: 96px;
          min-width: 0;
          gap: 16px;
        }

        .wiki-link-row:hover {
          background-color: var(--surface-raised);
          transform: translateX(4px);
        }

        .question-row-title {
          font-size: 21px;
          font-weight: 500;
          color: var(--text-primary);
        }

        @media (max-width: 1199px) {
          .quick-wiki-grid {
            grid-template-columns: 1fr;
          }
          .wiki-intro-card {
            min-height: auto;
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .quick-wiki-section {
            margin-top: 40px;
          }
          .wiki-intro-card {
            border-radius: 28px;
            padding: 24px 20px;
          }
          .intro-headline {
            font-size: clamp(26px, 7vw, 32px);
          }
          .full-wiki-btn {
            height: 52px;
            padding: 0 20px;
            font-size: 15px;
          }
          .question-title,
          .question-row-title {
            font-size: 17px;
          }
          .answer-content {
            font-size: 15px;
            line-height: 1.5;
          }
          .wiki-expanded-card,
          .wiki-link-row {
            padding: 20px 18px;
            border-radius: 22px;
          }
        }
      `}</style>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { FAQ_CATEGORIES, SITE_LINKS } from '../data/siteData';

interface FullFaqProps {
  onNavigate: (path: string) => void;
}

export const FullFaq: React.FC<FullFaqProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('start');

  useEffect(() => {
    // Check initial hash
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveCategory(hash);
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleCategoryClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    setActiveCategory(anchor);
    window.history.pushState(null, '', `/faq#${anchor}`);
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="full-faq-page">
      {/* 8.1 Heading Zone */}
      <section className="faq-heading-zone">
        <div className="heading-left">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="back-home-btn"
          >
            <Icon name="arrow_left" size={20} color="var(--text-primary)" />
            <span>На главную</span>
          </a>

          <div className="faq-eyebrow">ПОМОЩЬ / FAQ</div>
          <h1 className="faq-page-title">Ответы. Без лишнего.</h1>
          <p className="faq-page-subtitle">Всё о начале работы, установке и возможностях exDesktop.</p>
        </div>

        <div className="heading-right-emblem" aria-hidden="true">
          <img src="/assets/questionEmblemSvg.svg" alt="" width={148} height={148} />
        </div>
      </section>

      {/* 8.2 Articles & TOC Layout */}
      <div className="faq-main-layout">
        {/* Left Side: Table of Contents & Community Hint */}
        <aside className="faq-sidebar">
          <div className="faq-toc-card">
            <span className="toc-title">В ЭТОМ РАЗДЕЛЕ</span>
            <nav className="toc-list" aria-label="Оглавление FAQ">
              {FAQ_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`/faq#${cat.anchor}`}
                  onClick={(e) => handleCategoryClick(e, cat.anchor)}
                  className={`toc-item ${activeCategory === cat.anchor ? 'active' : ''}`}
                >
                  <span className="toc-num">{cat.number}</span>
                  <span className="toc-label">{cat.title}</span>
                </a>
              ))}
            </nav>
          </div>

          <a
            href={SITE_LINKS.telegramChat}
            target="_blank"
            rel="noopener noreferrer"
            className="community-hint-card"
            aria-label="Задать вопрос в Telegram Chat сообщества"
          >
            <div className="hint-icon">
              <Icon name="chat" size={28} color="var(--accent-primary)" />
            </div>
            <h3 className="hint-heading">Не нашёл ответ?</h3>
            <p className="hint-body">Загляни в чат сообщества. Вместе разберёмся.</p>
          </a>
        </aside>

        {/* Right Side: Articles */}
        <main className="faq-articles-content">
          {FAQ_CATEGORIES.map((category) => (
            <article
              key={category.id}
              id={category.anchor}
              className="faq-article-section"
            >
              <div className="article-header">
                <span className="section-number">{category.number}</span>
                <h2 className="section-title">{category.title}</h2>
              </div>

              <div className="questions-container">
                {category.items.map((item) => (
                  <div key={item.id} className="article-item">
                    <h3 className="item-question">{item.question}</h3>
                    <p className="item-answer">{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </main>
      </div>

      {/* 8.4 Support Block */}
      <section className="faq-support-block">
        <div className="support-text">
          <h2 className="support-title">Хорошие проекты растут вместе.</h2>
          <p className="support-desc">Приходи в сообщество: делись идеями, спрашивай и помогай другим.</p>
        </div>

        <a
          href={SITE_LINKS.telegramChat}
          target="_blank"
          rel="noopener noreferrer"
          className="support-chat-btn"
        >
          <Icon name="chat" size={22} color="var(--text-on-accent)" />
          <span>Telegram Chat</span>
        </a>
      </section>

      <style>{`
        .full-faq-page {
          width: 100%;
          margin-top: 24px;
        }

        /* 8.1 Heading Zone */
        .faq-heading-zone {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 252px;
          padding: 16px 0 32px 0;
          position: relative;
        }

        .heading-left {
          max-width: 850px;
        }

        .back-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 44px;
          border-radius: 22px;
          padding: 0 20px;
          background-color: var(--surface-card);
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 24px;
          transition: background-color 150ms ease, transform 150ms ease;
        }

        .back-home-btn:hover {
          background-color: var(--surface-raised);
          transform: translateX(-2px);
        }

        .faq-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
          margin-bottom: 12px;
        }

        .faq-page-title {
          font-size: 70px;
          font-weight: 600;
          line-height: 78.4px;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .faq-page-subtitle {
          font-size: 21px;
          color: var(--text-secondary);
        }

        .heading-right-emblem {
          transform: rotate(8deg);
          user-select: none;
          pointer-events: none;
        }

        /* 8.2 Main Layout */
        .faq-main-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 24px;
          margin-top: 24px;
        }

        /* Sidebar */
        .faq-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-toc-card {
          background-color: var(--surface-soft);
          border-radius: 28px;
          padding: 24px 12px;
        }

        .toc-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-left: 12px;
          margin-bottom: 16px;
          display: block;
        }

        .toc-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .toc-item {
          display: flex;
          align-items: center;
          gap: 14px;
          height: 56px;
          border-radius: 18px;
          padding: 0 16px;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: background-color 150ms ease, color 150ms ease;
        }

        .toc-item:hover {
          background-color: rgba(255, 255, 255, 0.04);
          color: var(--text-primary);
        }

        .toc-item.active {
          background-color: var(--accent-container);
          color: var(--text-primary);
          font-weight: 600;
        }

        .toc-num {
          font-family: var(--font-mono);
          font-size: 14px;
        }

        /* Community Hint */
        .community-hint-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: transform 150ms ease, background-color 150ms ease;
        }

        .community-hint-card:hover {
          transform: translateY(-2px);
          background-color: var(--surface-raised);
        }

        .hint-icon {
          margin-bottom: 16px;
        }

        .hint-heading {
          font-size: 23px;
          font-weight: 600;
          line-height: 32.2px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .hint-body {
          font-size: 17px;
          line-height: 23.8px;
          color: var(--text-secondary);
        }

        /* Articles */
        .faq-articles-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-article-section {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 32px 28px;
          scroll-margin-top: 32px;
        }

        .article-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .section-number {
          font-family: var(--font-mono);
          font-size: 22px;
          font-weight: 600;
          color: var(--accent-primary);
        }

        .section-title {
          font-size: 27px;
          font-weight: 600;
          line-height: 37.8px;
          color: var(--text-primary);
        }

        .questions-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .article-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .item-question {
          font-size: 19px;
          font-weight: 600;
          line-height: 26px;
          color: var(--text-primary);
        }

        .item-answer {
          font-size: 16px;
          line-height: 24px;
          color: var(--text-secondary);
        }

        /* 8.4 Support Block */
        .faq-support-block {
          background-color: var(--surface-soft);
          border-radius: 32px;
          padding: 36px 40px;
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .support-title {
          font-size: 30px;
          font-weight: 600;
          line-height: 42px;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .support-desc {
          font-size: 18px;
          line-height: 25.2px;
          color: var(--text-secondary);
        }

        .support-chat-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 280px;
          height: 58px;
          border-radius: 29px;
          background-color: var(--accent-primary);
          color: var(--text-on-accent);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 150ms ease, opacity 150ms ease;
        }

        .support-chat-btn:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .faq-main-layout {
            grid-template-columns: 1fr;
          }
          .faq-heading-zone {
            flex-direction: column;
            align-items: flex-start;
          }
          .heading-right-emblem {
            display: none;
          }
          .faq-support-block {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .support-chat-btn {
            width: 100%;
          }
        }

        @media (max-width: 767px) {
          .faq-page-title {
            font-size: 44px;
            line-height: 1.15;
          }
          .faq-page-subtitle {
            font-size: 17px;
          }
          .faq-article-section {
            padding: 20px;
            border-radius: 20px;
          }
          .section-title {
            font-size: 22px;
          }
          .item-question {
            font-size: 17px;
          }
          .item-answer {
            font-size: 15px;
          }
          .support-title {
            font-size: 24px;
            line-height: 1.3;
          }
          .support-desc {
            font-size: 15px;
          }
          .faq-support-block {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
};

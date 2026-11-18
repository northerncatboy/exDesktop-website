import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { FAQ_CATEGORIES, SITE_LINKS } from '../data/siteData';

interface FullFaqProps {
  onNavigate: (path: string) => void;
}

export const FullFaq: React.FC<FullFaqProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('start');
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);
  const isManualScroll = useRef<boolean>(false);
  const scrollTimeout = useRef<number | null>(null);
  const sidebarRef = useRef<HTMLElement>(null);

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

    // Scroll spy handler
    let ticking = false;
    const handleScroll = () => {
      if (isManualScroll.current) return;

      // Bottom boundary check: activate last category if user scrolled to bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveCategory(FAQ_CATEGORIES[FAQ_CATEGORIES.length - 1].anchor);
        return;
      }

      // 180px offset below sticky header
      const headerOffset = 180;
      let currentActive = FAQ_CATEGORIES[0].anchor;

      for (let i = 0; i < FAQ_CATEGORIES.length; i++) {
        const cat = FAQ_CATEGORIES[i];
        const el = document.getElementById(cat.anchor);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          currentActive = cat.anchor;
        } else {
          break;
        }
      }

      setActiveCategory(currentActive);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Keep active TOC item visible inside sidebar when activeCategory changes
  useEffect(() => {
    if (!sidebarRef.current) return;
    const sidebar = sidebarRef.current;
    const activeItem = sidebar.querySelector<HTMLElement>('.toc-item.active');
    if (activeItem) {
      const sidebarRect = sidebar.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      // Only scroll sidebar if active item is outside its visible boundaries
      if (itemRect.top < sidebarRect.top + 20 || itemRect.bottom > sidebarRect.bottom - 20) {
        sidebar.scrollTo({
          top: activeItem.offsetTop - sidebar.offsetTop - (sidebar.clientHeight / 2) + (activeItem.clientHeight / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  const handleCategoryClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    setActiveCategory(anchor);
    setMobileTocOpen(false);
    window.history.pushState(null, '', `/faq#${anchor}`);

    isManualScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = window.setTimeout(() => {
      isManualScroll.current = false;
    }, 800);

    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="full-faq-page">
      {/* Heading Zone */}
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
        </div>

        <div className="heading-right-emblem" aria-hidden="true">
          <img src="/assets/questionEmblemSvg.svg" alt="" width={148} height={148} />
        </div>
      </section>

      {/* Articles & TOC Layout */}
      <div className="faq-main-layout">
        {/* Left Side: Table of Contents & Community Hint */}
        <aside className="faq-sidebar" ref={sidebarRef}>
          <div className="faq-toc-card">
            <button
              type="button"
              className="toc-header-toggle"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              aria-expanded={mobileTocOpen}
            >
              <span className="toc-title">В ЭТОМ РАЗДЕЛЕ ({FAQ_CATEGORIES.length})</span>
              <span className={`toc-toggle-indicator ${mobileTocOpen ? 'open' : ''}`} aria-hidden="true">
                <Icon name="arrow_down" size={20} color="var(--text-primary)" />
              </span>
            </button>
            <nav className={`toc-list ${mobileTocOpen ? 'mobile-open' : ''}`} aria-label="Оглавление FAQ">
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
                    {item.answer && (
                      <p className="item-answer">{item.answer}</p>
                    )}

                    {item.code && (
                      <pre className="code-block">
                        <code>{item.code}</code>
                      </pre>
                    )}

                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="item-bullets">
                        {item.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}

                    {item.table && (
                      <div className="table-container">
                        <table className="faq-doc-table">
                          {item.table.headers && (
                            <thead>
                              <tr>
                                {item.table.headers.map((h, idx) => (
                                  <th key={idx}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                          )}
                          <tbody>
                            {item.table.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </main>
      </div>

      <style>{`
        .full-faq-page {
          width: 100%;
          margin-top: 24px;
        }

        /* Heading Zone */
        .faq-heading-zone {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 220px;
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
          margin-bottom: 8px;
        }

        .heading-right-emblem {
          transform: rotate(8deg);
          user-select: none;
          pointer-events: none;
        }

        /* Main Layout */
        .faq-main-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 28px;
          margin-top: 24px;
          align-items: start;
        }

        /* Sidebar */
        .faq-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 96px;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          padding-right: 6px;
        }

        .faq-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .faq-sidebar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
        }

        .faq-toc-card {
          background-color: var(--surface-soft);
          border-radius: 28px;
          padding: 20px 12px;
        }

        .toc-header-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          margin-bottom: 12px;
          cursor: default;
          text-align: left;
        }

        .toc-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          display: block;
        }

        .toc-toggle-indicator {
          display: none;
          transition: transform 200ms ease;
        }

        .toc-toggle-indicator.open {
          transform: rotate(180deg);
        }

        .toc-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .toc-item {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 48px;
          border-radius: 16px;
          padding: 10px 14px;
          font-size: 14.5px;
          font-weight: 500;
          line-height: 1.35;
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
          font-size: 13px;
          opacity: 0.75;
          flex-shrink: 0;
        }

        .toc-label {
          flex: 1;
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
          font-size: 16px;
          line-height: 23px;
          color: var(--text-secondary);
        }

        /* Articles */
        .faq-articles-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .faq-article-section {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 32px 32px;
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
          font-size: 24px;
          font-weight: 600;
          color: var(--accent-primary);
        }

        .section-title {
          font-size: 28px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .questions-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .article-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .item-question {
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
          color: var(--text-primary);
        }

        .item-answer {
          font-size: 16px;
          line-height: 25px;
          color: var(--text-secondary);
          white-space: pre-line;
        }

        /* Code block */
        .code-block {
          background-color: var(--surface-soft);
          border-radius: 16px;
          padding: 16px 20px;
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-primary);
          border: 1px solid var(--divider);
          margin-top: 4px;
        }

        .code-block code {
          font-family: inherit;
        }

        /* Bullet lists */
        .item-bullets {
          margin: 4px 0 0 0;
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 15.5px;
          line-height: 1.55;
        }

        /* Documentation tables */
        .table-container {
          width: 100%;
          overflow-x: auto;
          border-radius: 16px;
          border: 1px solid var(--divider);
          margin-top: 8px;
          background-color: var(--surface-soft);
        }

        .faq-doc-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14.5px;
          text-align: left;
        }

        .faq-doc-table th {
          background-color: var(--surface-raised);
          padding: 12px 18px;
          font-weight: 600;
          color: var(--text-primary);
          border-bottom: 1px solid var(--divider);
          white-space: nowrap;
        }

        .faq-doc-table td {
          padding: 14px 18px;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--divider);
          vertical-align: top;
          line-height: 1.5;
        }

        .faq-doc-table tr:last-child td {
          border-bottom: none;
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .faq-main-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .faq-sidebar {
            position: static;
            max-height: none;
            overflow-y: visible;
            padding-right: 0;
          }
          .toc-header-toggle {
            cursor: pointer;
            padding: 8px 12px;
            margin-bottom: 0;
          }
          .toc-toggle-indicator {
            display: flex;
            align-items: center;
          }
          .toc-list {
            display: none;
            margin-top: 12px;
            max-height: 380px;
            overflow-y: auto;
          }
          .toc-list.mobile-open {
            display: flex;
          }
          .faq-heading-zone {
            flex-direction: column;
            align-items: flex-start;
            min-height: auto;
            padding: 12px 0 24px 0;
          }
          .heading-right-emblem {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .faq-page-title {
            font-size: clamp(32px, 8.5vw, 44px);
            line-height: 1.15;
          }
          .faq-article-section {
            padding: 22px 16px;
            border-radius: 20px;
          }
          .section-number {
            font-size: 20px;
          }
          .section-title {
            font-size: 21px;
            line-height: 1.25;
          }
          .item-question {
            font-size: 17px;
            line-height: 1.35;
          }
          .item-answer {
            font-size: 15px;
            line-height: 1.5;
            word-break: break-word;
            overflow-wrap: break-word;
          }
          .code-block {
            padding: 12px 14px;
            font-size: 13px;
          }
          .item-bullets {
            padding-left: 18px;
            font-size: 14.5px;
          }
          .faq-doc-table th,
          .faq-doc-table td {
            padding: 10px 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

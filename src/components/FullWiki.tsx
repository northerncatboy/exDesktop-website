import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { WIKI_CATEGORIES, SITE_LINKS } from '../data/siteData';
import { asset } from '../utils/asset';

interface FullWikiProps {
  onNavigate: (path: string) => void;
}

export const FullWiki: React.FC<FullWikiProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>(WIKI_CATEGORIES[0]?.anchor || 'форматы-плагинов');
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);
  const isManualScroll = useRef<boolean>(false);
  const scrollTimeout = useRef<number | null>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check initial hash
    const rawHash = window.location.hash.replace('#', '');
    const hash = rawHash ? decodeURIComponent(rawHash) : '';
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
        setActiveCategory(WIKI_CATEGORIES[WIKI_CATEGORIES.length - 1].anchor);
        return;
      }

      // 180px offset below sticky header
      const headerOffset = 180;
      let currentActive = WIKI_CATEGORIES[0].anchor;

      for (let i = 0; i < WIKI_CATEGORIES.length; i++) {
        const cat = WIKI_CATEGORIES[i];
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
    window.history.pushState(null, '', `/wiki#${anchor}`);

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
    <div className="full-wiki-page">
      {/* Heading Zone */}
      <section className="wiki-heading-zone">
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

          <div className="wiki-eyebrow">ДОКУМЕНТАЦИЯ / WIKI</div>
          <h1 className="wiki-page-title">SDK плагинов exDesktop</h1>
          <p className="wiki-lead-desc">
            exDesktop запускает плагины exteraGram на компьютере. Совместимость с SDK 1.4.6.2, эмуляция Android, хуки, защита и особенности ПК.
          </p>
          <div className="wiki-version-note">Описание соответствует exDesktop 7.4.3.2.</div>
        </div>

        <div className="heading-right-emblem" aria-hidden="true">
          <img src={asset('assets/questionEmblemSvg.svg')} alt="" width={148} height={148} />
        </div>
      </section>

      {/* Articles & TOC Layout */}
      <div className="wiki-main-layout">
        {/* Left Side: Table of Contents & Community Hint */}
        <aside className="wiki-sidebar" ref={sidebarRef}>
          <div className="wiki-toc-card">
            <button
              type="button"
              className="toc-header-toggle"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              aria-expanded={mobileTocOpen}
            >
              <span className="toc-title">РАЗДЕЛЫ WIKI ({WIKI_CATEGORIES.length})</span>
              <span className={`toc-toggle-indicator ${mobileTocOpen ? 'open' : ''}`} aria-hidden="true">
                <Icon name="arrow_down" size={20} color="var(--text-primary)" />
              </span>
            </button>
            <nav className={`toc-list ${mobileTocOpen ? 'mobile-open' : ''}`} aria-label="Оглавление WIKI">
              {WIKI_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`/wiki#${cat.anchor}`}
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
            className="community-hint-card desktop-only"
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
        <main className="wiki-articles-content">
          {WIKI_CATEGORIES.map((category) => (
            <article
              key={category.id}
              id={category.anchor}
              className="wiki-article-section"
            >
              <div className="article-header">
                <span className="section-number">{category.number}</span>
                <h2 className="section-title">{category.title}</h2>
              </div>

              <div className="questions-container">
                {category.items.map((item) => (
                  <div key={item.id} className="article-item">
                    {item.question && item.question !== category.title && (
                      <h3 className="item-question">{item.question}</h3>
                    )}
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
                        <table className="wiki-doc-table">
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

          {/* Mobile bottom hint: appears after reading the documentation */}
          <a
            href={SITE_LINKS.telegramChat}
            target="_blank"
            rel="noopener noreferrer"
            className="community-hint-card mobile-only"
            aria-label="Задать вопрос в Telegram Chat сообщества"
          >
            <div className="hint-icon">
              <Icon name="chat" size={28} color="var(--accent-primary)" />
            </div>
            <h3 className="hint-heading">Не нашёл ответ?</h3>
            <p className="hint-body">Загляни в чат сообщества. Вместе разберёмся.</p>
          </a>
        </main>
      </div>

      <style>{`
        .full-wiki-page {
          width: 100%;
          margin-top: 24px;
          min-width: 0;
        }

        /* Heading Zone */
        .wiki-heading-zone {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 220px;
          padding: 16px 0 32px 0;
          position: relative;
        }

        .heading-left {
          max-width: 850px;
          min-width: 0;
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
          border: 1px solid var(--border-subtle);
        }

        .back-home-btn:hover {
          background-color: var(--surface-raised);
          transform: translateX(-2px);
        }

        .wiki-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
          margin-bottom: 12px;
        }

        .wiki-page-title {
          font-size: clamp(34px, 5.5vw, 68px);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin-bottom: 8px;
          word-break: break-word;
        }

        .wiki-lead-desc {
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-top: 12px;
          max-width: 780px;
        }

        .wiki-version-note {
          display: inline-block;
          margin-top: 14px;
          padding: 8px 14px;
          border-radius: 12px;
          background-color: var(--surface-card);
          border: 1px solid var(--border-subtle);
          font-size: 13.5px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          word-break: break-word;
        }

        .heading-right-emblem {
          transform: rotate(8deg);
          user-select: none;
          pointer-events: none;
          flex-shrink: 0;
        }

        /* Main Layout */
        .wiki-main-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 28px;
          margin-top: 24px;
          align-items: start;
          min-width: 0;
        }

        /* Sidebar */
        .wiki-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 96px;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          padding-right: 6px;
          min-width: 0;
        }

        .wiki-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .wiki-sidebar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
        }

        .wiki-toc-card {
          background-color: var(--surface-soft);
          border-radius: 28px;
          padding: 20px 12px;
          border: 1px solid var(--border-subtle);
          min-width: 0;
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
          background: none;
          border: none;
          font: inherit;
          color: inherit;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
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
          min-width: 0;
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
          word-break: break-word;
        }

        /* Community Hint */
        .community-hint-card {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          border: 1px solid var(--border-subtle);
          transition: transform 150ms ease, background-color 150ms ease;
        }

        .community-hint-card:hover {
          transform: translateY(-2px);
          background-color: var(--surface-raised);
        }

        .community-hint-card.desktop-only {
          display: flex;
        }

        .community-hint-card.mobile-only {
          display: none;
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
        .wiki-articles-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 0;
        }

        .wiki-article-section {
          background-color: var(--surface-card);
          border-radius: 28px;
          padding: 32px 32px;
          scroll-margin-top: 84px;
          border: 1px solid var(--border-subtle);
          min-width: 0;
        }

        .article-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .section-number {
          font-family: var(--font-mono);
          font-size: 24px;
          font-weight: 600;
          color: var(--accent-primary);
          line-height: 1.3;
          flex-shrink: 0;
          padding-top: 1px;
        }

        .section-title {
          font-size: 26px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--text-primary);
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .questions-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 0;
        }

        .article-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 0;
        }

        .item-question {
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
          color: var(--text-primary);
          word-break: break-word;
        }

        .item-answer {
          font-size: 16px;
          line-height: 25px;
          color: var(--text-secondary);
          white-space: pre-line;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        /* Code block */
        .code-block {
          background-color: var(--surface-soft);
          border-radius: 16px;
          padding: 16px 20px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          font-family: var(--font-mono);
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--text-primary);
          border: 1px solid var(--divider);
          margin-top: 4px;
          max-width: 100%;
          box-sizing: border-box;
        }

        .code-block code {
          font-family: inherit;
          white-space: pre;
        }

        /* Bullet lists */
        .item-bullets {
          margin: 4px 0 0 0;
          padding-left: 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.55;
          min-width: 0;
        }

        .item-bullets li {
          word-break: break-word;
          overflow-wrap: break-word;
        }

        /* Documentation tables */
        .table-container {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 16px;
          border: 1px solid var(--divider);
          margin-top: 8px;
          background-color: var(--surface-soft);
          box-sizing: border-box;
        }

        .wiki-doc-table {
          width: 100%;
          min-width: 520px;
          border-collapse: collapse;
          font-size: 14px;
          text-align: left;
        }

        .wiki-doc-table th {
          background-color: var(--surface-raised);
          padding: 12px 18px;
          font-weight: 600;
          color: var(--text-primary);
          border-bottom: 1px solid var(--divider);
          white-space: nowrap;
        }

        .wiki-doc-table td {
          padding: 14px 18px;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--divider);
          vertical-align: top;
          line-height: 1.5;
          word-break: break-word;
        }

        .wiki-doc-table tr:last-child td {
          border-bottom: none;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1199px) {
          .wiki-main-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .wiki-sidebar {
            position: static;
            max-height: none;
            overflow-y: visible;
            padding-right: 0;
          }

          .wiki-toc-card {
            padding: 12px 14px;
            border-radius: 22px;
          }

          .toc-header-toggle {
            cursor: pointer;
            padding: 10px 12px;
            margin-bottom: 0;
            border-radius: 14px;
            background-color: rgba(255, 255, 255, 0.03);
          }

          .toc-title {
            font-size: 13px;
            color: var(--text-primary);
          }

          .toc-toggle-indicator {
            display: flex;
            align-items: center;
          }

          .toc-list {
            display: none;
            margin-top: 10px;
            max-height: 380px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .toc-list.mobile-open {
            display: flex;
          }

          .community-hint-card.desktop-only {
            display: none !important;
          }

          .community-hint-card.mobile-only {
            display: flex !important;
            margin-top: 8px;
          }

          .wiki-heading-zone {
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
          .full-wiki-page {
            margin-top: 12px;
          }

          .wiki-heading-zone {
            padding: 8px 0 20px 0;
          }

          .back-home-btn {
            height: 40px;
            padding: 0 16px;
            font-size: 14px;
            margin-bottom: 18px;
            border-radius: 20px;
          }

          .wiki-page-title {
            font-size: clamp(26px, 7.5vw, 36px);
            line-height: 1.2;
          }

          .wiki-lead-desc {
            font-size: 15px;
            line-height: 1.5;
            margin-top: 10px;
          }

          .wiki-version-note {
            font-size: 12px;
            padding: 6px 12px;
            margin-top: 10px;
          }

          .wiki-article-section {
            padding: 20px 16px;
            border-radius: 22px;
            scroll-margin-top: 76px;
          }

          .article-header {
            gap: 12px;
            margin-bottom: 16px;
            padding-bottom: 12px;
          }

          .section-number {
            font-size: 20px;
          }

          .section-title {
            font-size: 20px;
            line-height: 1.3;
          }

          .item-question {
            font-size: 17px;
            line-height: 1.35;
          }

          .item-answer {
            font-size: 14.5px;
            line-height: 1.55;
          }

          .code-block {
            padding: 12px 14px;
            font-size: 12.5px;
            border-radius: 12px;
          }

          .item-bullets {
            padding-left: 18px;
            font-size: 14px;
            gap: 8px;
          }

          .wiki-doc-table th,
          .wiki-doc-table td {
            padding: 10px 12px;
            font-size: 12.5px;
          }

          .community-hint-card {
            border-radius: 22px;
            padding: 20px 18px;
          }

          .hint-heading {
            font-size: 20px;
            line-height: 1.3;
          }

          .hint-body {
            font-size: 14.5px;
            line-height: 1.45;
          }
        }
      `}</style>
    </div>
  );
};

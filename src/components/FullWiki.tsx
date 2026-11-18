import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { WIKI_SDK_CATEGORIES, WIKI_AI_CATEGORIES, SITE_LINKS, AI_PROMPT_TEXT } from '../data/siteData';
import { asset } from '../utils/asset';

interface FullWikiProps {
  onNavigate: (path: string) => void;
  currentPath?: string;
}

export const FullWiki: React.FC<FullWikiProps> = ({ onNavigate }) => {
  const allCategories = [...WIKI_SDK_CATEGORIES, ...WIKI_AI_CATEGORIES];

  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const rawHash = window.location.hash.replace('#', '');
      const hash = rawHash ? decodeURIComponent(rawHash) : '';
      if (hash) return hash;
    }
    return WIKI_SDK_CATEGORIES[0]?.anchor || 'форматы-плагинов';
  });

  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const isManualScroll = useRef<boolean>(false);
  const scrollTimeout = useRef<number | null>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  // Sync with window hash on mount and on popstate
  useEffect(() => {
    const syncFromLocation = () => {
      const rawHash = window.location.hash.replace('#', '');
      const hash = rawHash ? decodeURIComponent(rawHash) : '';

      if (hash) {
        setActiveCategory(hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
      }
    };

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  // Scroll spy handler tracking across all categories
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (isManualScroll.current) return;

      // Bottom boundary check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveCategory(allCategories[allCategories.length - 1].anchor);
        return;
      }

      const headerOffset = 180;
      let currentActive = allCategories[0].anchor;

      for (let i = 0; i < allCategories.length; i++) {
        const cat = allCategories[i];
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
  }, [allCategories]);

  // Keep active TOC item visible inside sidebar when activeCategory changes
  useEffect(() => {
    if (!sidebarRef.current) return;
    const sidebar = sidebarRef.current;
    const activeItem = sidebar.querySelector<HTMLElement>('.toc-item.active');
    if (activeItem) {
      const sidebarRect = sidebar.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      if (itemRect.top < sidebarRect.top + 20 || itemRect.bottom > sidebarRect.bottom - 20) {
        sidebar.scrollTo({
          top: activeItem.offsetTop - sidebar.offsetTop - sidebar.clientHeight / 2 + activeItem.clientHeight / 2,
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

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(AI_PROMPT_TEXT).then(() => {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    });
  };

  return (
    <div className="full-wiki-page">
      {/* Top Navigation */}
      <div className="wiki-top-nav">
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
      </div>

      {/* Heading Zone */}
      <section className="wiki-heading-zone">
        <div className="heading-left">
          <div className="wiki-eyebrow">ДОКУМЕНТАЦИЯ / WIKI</div>
          <h1 className="wiki-page-title">WIKI exDesktop</h1>
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
              <span className="toc-title">ОГЛАВЛЕНИЕ WIKI ({allCategories.length})</span>
              <span className={`toc-toggle-indicator ${mobileTocOpen ? 'open' : ''}`} aria-hidden="true">
                <Icon name="arrow_down" size={20} color="var(--text-primary)" />
              </span>
            </button>

            <div className={`toc-groups-container ${mobileTocOpen ? 'mobile-open' : ''}`}>
              {/* Group 1: SDK плагинов exDesktop */}
              <div className="toc-group">
                <div className="toc-group-header">
                  <span className="group-title-text">SDK плагинов exDesktop</span>
                  <span className="group-badge">{WIKI_SDK_CATEGORIES.length}</span>
                </div>

                <nav className="toc-list" aria-label="Оглавление SDK плагинов">
                  {WIKI_SDK_CATEGORIES.map((cat) => (
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

              {/* Group 2: Скилл и промпт для ИИ */}
              <div className="toc-group">
                <div className="toc-group-header">
                  <span className="group-title-text">Скилл и промпт для ИИ</span>
                  <span className="group-badge">{WIKI_AI_CATEGORIES.length}</span>
                </div>

                <nav className="toc-list" aria-label="Оглавление инструментов для ИИ">
                  {WIKI_AI_CATEGORIES.map((cat) => (
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
            </div>
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
          {/* =========================================
              MAJOR SECTION 1: SDK плагинов exDesktop
             ========================================= */}
          <div className="major-section-banner" id="sdk-plugins">
            <div className="banner-eyebrow">РАЗДЕЛ I</div>
            <h2 className="banner-title">SDK плагинов exDesktop</h2>
          </div>

          {WIKI_SDK_CATEGORIES.map((category) => (
            <article
              key={category.id}
              id={category.anchor}
              className="wiki-article-section"
            >
              <div className="article-header">
                <span className="section-number">{category.number}</span>
                <h3 className="section-title">{category.title}</h3>
              </div>

              <div className="questions-container">
                {category.items.map((item) => (
                  <div key={item.id} className="article-item">
                    {item.question && item.question !== category.title && (
                      <h4 className="item-question">{item.question}</h4>
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

          {/* =========================================
              MAJOR SECTION 2: Скилл и промпт для ИИ
             ========================================= */}
          <div className="major-section-banner ai-banner" id="ai-docs">
            <div className="banner-eyebrow">РАЗДЕЛ II</div>
            <h2 className="banner-title">Скилл и промпт для ИИ</h2>
            <p className="banner-desc">
              Инструкция для языковых моделей, которые пишут плагины exDesktop или переносят на ПК плагины exteraGram. В ней описаны API, работающие перехваты Android, таблица замен и правила защиты.
            </p>
          </div>

          {WIKI_AI_CATEGORIES.map((category) => (
            <article
              key={category.id}
              id={category.anchor}
              className="wiki-article-section"
            >
              <div className="article-header">
                <span className="section-number">{category.number}</span>
                <h3 className="section-title">{category.title}</h3>
              </div>

              {/* Special interactive card block for AI Tools overview */}
              {category.anchor === 'ai-tools' && (
                <div className="ai-tools-cards-grid">
                  <div className="ai-card">
                    <div className="ai-card-header">
                      <div className="ai-card-icon">
                        <Icon name="code" size={24} color="var(--accent-primary)" />
                      </div>
                      <h4 className="ai-card-title">Скилл для Claude Code</h4>
                    </div>
                    <p className="ai-card-desc">
                      Файл <code>SKILL.md</code> помещается в папку <code>~/.claude/skills/exdesktop-plugins/</code>. Claude применяет его сам, когда речь идёт о плагинах exDesktop.
                    </p>
                    <div className="ai-card-actions">
                      <a
                        href={asset('docs/ai/exdesktop-plugins/SKILL.md')}
                        download="SKILL.md"
                        className="pill-button primary ai-btn"
                      >
                        <Icon name="download" size={18} color="var(--text-on-accent)" />
                        <span>Скачать SKILL.md</span>
                      </a>
                    </div>
                  </div>

                  <div className="ai-card">
                    <div className="ai-card-header">
                      <div className="ai-card-icon">
                        <Icon name="chat" size={24} color="var(--accent-primary)" />
                      </div>
                      <h4 className="ai-card-title">Промпт для чата</h4>
                    </div>
                    <p className="ai-card-desc">
                      Тот же текст без служебного заголовка. Вставляется первым сообщением или в системный промпт ChatGPT, Gemini, DeepSeek и локальных моделей, следом отправляется исходный код плагина.
                    </p>
                    <div className="ai-card-actions">
                      <button
                        type="button"
                        className="pill-button primary ai-btn"
                        onClick={handleCopyPrompt}
                      >
                        <Icon name={copiedPrompt ? 'check' : 'terminal'} size={18} color="var(--text-on-accent)" />
                        <span>{copiedPrompt ? 'Скопировано!' : 'Скопировать промпт'}</span>
                      </button>
                      <a
                        href={asset('docs/ai/prompt.md')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-button secondary ai-btn"
                      >
                        <span>Открыть файл</span>
                        <Icon name="arrow_external" size={16} color="currentColor" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Special copy bar for Prompt text */}
              {category.anchor === 'text' && (
                <div className="prompt-top-action-bar">
                  <span className="prompt-meta-note">Полный текст системного промпта для языковых моделей</span>
                  <button
                    type="button"
                    className="copy-prompt-btn"
                    onClick={handleCopyPrompt}
                    title="Скопировать весь промпт в буфер обмена"
                  >
                    <Icon name={copiedPrompt ? 'check' : 'terminal'} size={16} color="var(--accent-primary)" />
                    <span>{copiedPrompt ? 'Скопировано!' : 'Скопировать промпт'}</span>
                  </button>
                </div>
              )}

              <div className="questions-container">
                {category.items.map((item) => (
                  <div key={item.id} className="article-item">
                    {item.question && item.question !== category.title && (
                      <h4 className="item-question">{item.question}</h4>
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

        /* Top Navigation Bar */
        .wiki-top-nav {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
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
          transition: background-color 150ms ease, transform 150ms ease;
          border: 1px solid var(--border-subtle);
        }

        .back-home-btn:hover {
          background-color: var(--surface-raised);
          transform: translateX(-2px);
        }

        /* Heading Zone */
        .wiki-heading-zone {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 120px;
          padding: 8px 0 24px 0;
          position: relative;
        }

        .heading-left {
          max-width: 850px;
          min-width: 0;
        }

        .wiki-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
          margin-bottom: 8px;
        }

        .wiki-page-title {
          font-size: clamp(34px, 5.5vw, 56px);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          word-break: break-word;
        }

        .heading-right-emblem {
          transform: rotate(8deg);
          user-select: none;
          pointer-events: none;
          flex-shrink: 0;
        }

        /* Major Section Banner */
        .major-section-banner {
          background-color: var(--surface-soft);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          padding: 24px 28px;
          margin-bottom: 16px;
        }

        .major-section-banner.ai-banner {
          margin-top: 36px;
        }

        .banner-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--accent-primary);
          margin-bottom: 6px;
        }

        .banner-title {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.25;
          color: var(--text-primary);
        }

        .banner-desc {
          font-size: 15.5px;
          line-height: 1.55;
          color: var(--text-secondary);
          margin-top: 10px;
          max-width: 780px;
        }

        /* Main Layout */
        .wiki-main-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 28px;
          margin-top: 16px;
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
          padding: 18px 14px;
          border: 1px solid var(--border-subtle);
          min-width: 0;
        }

        .toc-header-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
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

        .toc-groups-container {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .toc-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .toc-group-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 10px;
          color: var(--accent-primary);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .group-title-text {
          flex: 1;
        }

        .group-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 6px;
          background-color: var(--surface-card);
          color: var(--text-secondary);
        }

        .toc-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .toc-item {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 40px;
          border-radius: 12px;
          padding: 8px 12px;
          font-size: 13.5px;
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
          font-size: 12px;
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

        /* Articles Content */
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

        /* AI Cards Grid */
        .ai-tools-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        .ai-card {
          background-color: var(--surface-soft);
          border: 1px solid var(--border-subtle);
          border-radius: 22px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }

        .ai-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background-color: var(--surface-card);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ai-card-title {
          font-size: 19px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .ai-card-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .ai-card-desc code {
          background-color: var(--surface-raised);
          padding: 2px 6px;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 13px;
        }

        .ai-card-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .ai-btn {
          height: 44px;
          font-size: 14px;
          padding: 0 16px;
          border-radius: 22px;
        }

        /* Prompt Top Action Bar */
        .prompt-top-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 12px 16px;
          background-color: var(--surface-soft);
          border-radius: 14px;
          border: 1px solid var(--border-subtle);
          margin-bottom: 16px;
        }

        .prompt-meta-note {
          font-size: 13.5px;
          color: var(--text-secondary);
        }

        .copy-prompt-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          background-color: var(--surface-raised);
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 600;
          transition: background-color 150ms ease, transform 150ms ease;
          border: 1px solid var(--border-subtle);
        }

        .copy-prompt-btn:hover {
          background-color: var(--accent-container);
          transform: translateY(-1px);
        }

        /* Questions / Items */
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
          max-height: 600px;
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

          .toc-groups-container {
            display: none;
            margin-top: 10px;
            max-height: 380px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .toc-groups-container.mobile-open {
            display: flex;
          }

          .community-hint-card.desktop-only {
            display: none !important;
          }

          .community-hint-card.mobile-only {
            display: flex !important;
            margin-top: 8px;
          }

          .ai-tools-cards-grid {
            grid-template-columns: 1fr;
          }

          .wiki-heading-zone {
            flex-direction: column;
            align-items: flex-start;
            min-height: auto;
            padding: 8px 0 20px 0;
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
            padding: 6px 0 14px 0;
          }

          .back-home-btn {
            height: 40px;
            padding: 0 16px;
            font-size: 14px;
            border-radius: 20px;
          }

          .wiki-page-title {
            font-size: clamp(26px, 7.5vw, 36px);
            line-height: 1.2;
          }

          .major-section-banner {
            padding: 18px 16px;
            border-radius: 20px;
          }

          .banner-title {
            font-size: 22px;
          }

          .banner-desc {
            font-size: 14px;
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

          .ai-card {
            padding: 18px 16px;
            border-radius: 18px;
          }

          .ai-card-title {
            font-size: 17px;
          }

          .ai-card-desc {
            font-size: 13.5px;
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
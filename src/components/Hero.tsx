import React from 'react';
import { Icon } from './Icon';
import { SITE_LINKS } from '../data/siteData';
import { useLatestRelease } from '../hooks/useLatestRelease';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { version, releaseUrl } = useLatestRelease();

  const cookiePath =
    'M 151.9788055419922 0 L 157.3349151611328 0.621101975440979 L 162.5776824951172 2.42891788482666 L 167.6116943359375 5.262959957122803 L 172.37478637695312 8.875022888183594 L 176.84869384765625 12.955833435058594 L 181.06332397460938 17.168109893798828 L 185.09396362304688 21.182355880737305 L 189.05169677734375 24.711458206176758 L 193.06805419921875 27.540287017822266 L 197.2759552001953 29.547109603881836 L 201.7893524169922 30.71457862854004 L 206.6844024658203 31.129234313964844 L 211.9846649169922 30.969768524169922 L 217.65261840820312 30.485523223876953 L 223.58880615234375 29.96784210205078 L 229.6391143798828 29.717531204223633 L 235.60964965820312 30.012187957763672 L 241.28759765625 31.076984405517578 L 246.46585083007812 33.06210708618164 L 250.9680938720703 36.02915573120117 L 254.671875 39.94778823852539 L 257.5260314941406 44.70264434814453 L 259.5606384277344 50.10944747924805 L 260.8875732421875 55.93810272216797 L 261.6916809082031 61.93995666503906 L 262.2126770019531 67.8758544921875 L 262.72003173828125 73.54179382324219 L 263.4833679199219 78.78923034667969 L 264.7417297363281 83.53790283203125 L 266.6752014160156 87.77999877929688 L 269.3822326660156 91.57548522949219 L 272.86553955078125 95.03961181640625 L 277.02825927734375 98.32439422607422 L 281.6814270019531 101.59673309326172 L 286.56158447265625 105.01587677001953 L 291.3572692871094 108.71318817138672 L 295.7415771484375 112.77668762207031 L 299.4067077636719 117.24209594726562 L 302.0974426269531 122.09129333496094 L 303.6391906738281 127.2581787109375 L 303.9576110839844 132.64077758789062 L 303.087646484375 138.11781311035156 L 301.1708068847656 143.56747436523438 L 298.44073486328125 148.88543701171875 L 295.19879150390625 154 L 291.7823791503906 158.88204956054688 L 288.529052734375 163.54852294921875 L 285.7408142089844 168.0589599609375 L 283.6523742675781 172.50550842285156 L 282.40673828125 176.9979705810547 L 282.0407409667969 181.64552307128906 L 282.482421875 186.5382080078125 L 283.5598449707031 191.73025512695312 L 285.0209655761719 197.22801208496094 L 286.56158447265625 202.984130859375 L 287.85870361328125 208.8990478515625 L 288.6053161621094 214.8300323486328 L 288.54266357421875 220.6066436767578 L 287.48687744140625 226.05091857910156 L 285.3467102050781 231 L 282.1307678222656 235.32797241210938 L 277.94378662109375 238.96444702148438 L 272.972412109375 241.90699768066406 L 267.4627380371094 244.22593688964844 L 261.6916809082031 246.06004333496094 L 255.9364471435547 247.6038818359375 L 250.44468688964844 249.08738708496094 L 245.40951538085938 250.75033569335938 L 240.95150756835938 252.81419372558594 L 237.10960388183594 255.45492553710938 L 233.8418426513672 258.7799072265625 L 231.03521728515625 262.8117980957031 L 228.523193359375 267.4817199707031 L 226.10858154296875 272.6324157714844 L 223.58880615234375 278.03216552734375 L 220.78042602539062 283.39703369140625 L 217.53997802734375 288.42034912109375 L 213.7788543701172 292.8052062988281 L 209.4705810546875 296.297119140625 L 204.64990234375 298.7126770019531 L 199.40438842773438 299.9609069824219 L 193.85948181152344 300.0552673339844 L 188.15975952148438 299.1138610839844 L 182.44851684570312 297.34869384765625 L 176.84869384765625 295.0441589355469 L 171.44757080078125 292.52740478515625 L 166.28704833984375 290.1338195800781 L 161.3609619140625 288.1711730957031 L 156.6193084716797 286.8865966796875 L 151.9788055419922 286.44000244140625 L 147.3383026123047 286.8865966796875 L 142.59664916992188 288.1711730957031 L 137.67056274414062 290.1338195800781 L 132.5100555419922 292.52740478515625 L 127.10891723632812 295.0441589355469 L 121.50910186767578 297.34869384765625 L 115.79785919189453 299.1138610839844 L 110.09813690185547 300.0552673339844 L 104.55323028564453 299.9609069824219 L 99.30770111083984 298.7126770019531 L 94.4870376586914 296.297119140625 L 90.17874908447266 292.8052062988281 L 86.4176254272461 288.42034912109375 L 83.17718505859375 283.39703369140625 L 80.36880493164062 278.03216552734375 L 77.84903717041016 272.6324157714844 L 75.4344253540039 267.4817199707031 L 72.92239379882812 262.8117980957031 L 70.11576843261719 258.7799072265625 L 66.84801483154297 255.45492553710938 L 63.006107330322266 252.81419372558594 L 58.548091888427734 250.75033569335938 L 53.51293182373047 249.08738708496094 L 48.02117156982422 247.6038818359375 L 42.26592254638672 246.06004333496094 L 36.49488067626953 244.22593688964844 L 30.985197067260742 241.90699768066406 L 26.013839721679688 238.96444702148438 L 21.826839447021484 235.32797241210938 L 18.61089515686035 231 L 16.47072982788086 226.05091857910156 L 15.414958000183105 220.6066436767578 L 15.35230541229248 214.8300323486328 L 16.09889793395996 208.8990478515625 L 17.396028518676758 202.984130859375 L 18.936655044555664 197.22801208496094 L 20.39777374267578 191.73025512695312 L 21.47519874572754 186.5382080078125 L 21.91685676574707 181.64552307128906 L 21.550867080688477 176.9979705810547 L 20.305227279663086 172.50550842285156 L 18.216808319091797 168.0589599609375 L 15.428573608398438 163.54852294921875 L 12.175226211547852 158.88204956054688 L 8.758806228637695 154 L 5.516878128051758 148.88543701171875 L 2.7867932319641113 143.56747436523438 L 0.8699530959129333 138.11781311035156 L 0 132.64077758789062 L 0.31841254234313965 127.2581787109375 L 1.8601571321487427 122.09129333496094 L 4.550906181335449 117.24209594726562 L 8.216039657592773 112.77668762207031 L 12.600329399108887 108.71318817138672 L 17.396028518676758 105.01587677001953 L 22.276172637939453 101.59673309326172 L 26.929346084594727 98.32439422607422 L 31.09208869934082 95.03961181640625 L 34.575374603271484 91.57548522949219 L 37.28240203857422 87.77999877929688 L 39.215877532958984 83.53790283203125 L 40.47425079345703 78.78923034667969 L 41.237586975097656 73.54179382324219 L 41.744930267333984 67.8758544921875 L 42.26592254638672 61.93995666503906 L 43.070037841796875 55.93810272216797 L 44.39698791503906 50.10944747924805 L 46.43157958984375 44.70264434814453 L 49.28573226928711 39.94778823852539 L 52.9895133972168 36.02915573120117 L 57.49176788330078 33.06210708618164 L 62.67000961303711 31.076984405517578 L 68.34796905517578 30.012187957763672 L 74.3185043334961 29.717531204223633 L 80.36880493164062 29.96784210205078 L 86.30499267578125 30.485523223876953 L 91.97295379638672 30.969768524169922 L 97.2732162475586 31.129234313964844 L 102.16826629638672 30.71457862854004 L 106.68165588378906 29.547109603881836 L 110.88955688476562 27.540287017822266 L 114.90591430664062 24.711458206176758 L 118.8636474609375 21.182355880737305 L 122.894287109375 17.168109893798828 L 127.10891723632812 12.955833435058594 L 131.58282470703125 8.875022888183594 L 136.34591674804688 5.262959957122803 L 141.3799285888672 2.42891788482666 L 146.62269592285156 0.621101975440979 L 151.9788055419922 0 Z';

  return (
    <section className="hero-section">
      {/* Hidden SVG definition for exact cookie mask */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="avatar-cookie-mask" clipPathUnits="userSpaceOnUse">
            <path d={cookiePath} />
          </clipPath>
        </defs>
      </svg>

      {/* Decorative floral forms outside bounds */}
      <div className="hero-decor flower anim-flower" aria-hidden="true">
        <img src="/assets/flowerSvg.svg" alt="" width={310} height={310} />
      </div>
      <div className="hero-decor clover anim-clover" aria-hidden="true">
        <img src="/assets/cloverSvg.svg" alt="" width={130} height={130} />
      </div>

      {/* Left Column: Information and CTAs */}
      <div className="hero-content">
        {/* Version Badge */}
        <a
          href={releaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="version-badge"
          title={`Открыть актуальный релиз ${version} на GitHub`}
          aria-label={`Актуальная версия ${version}`}
        >
          <Icon name="check" size={18} color="var(--accent-primary)" />
          <span>{version} — Актуальная версия</span>
        </a>

        {/* H1 Heading */}
        <h1 className="hero-title">exDesktop</h1>

        {/* Slogan */}
        <p className="hero-slogan">Твой Telegram. Твои правила.</p>

        {/* Description */}
        <p className="hero-description">
          Модифицированный кросс-платформенный клиент для Windows, Linux и macOS на основе исходного кода Telegram
        </p>

        {/* CTA Actions */}
        <div className="hero-actions">
          <a
            href={releaseUrl || SITE_LINKS.download}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button primary hero-download-btn"
          >
            <Icon name="download" size={22} color="var(--text-on-accent)" />
            <span>Скачать exDesktop</span>
          </a>

          <a
            href="/faq"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/faq');
            }}
            className="pill-button secondary hero-learn-btn"
          >
            <span>Узнать больше</span>
            <Icon name="arrow_right" size={22} color="var(--text-primary)" />
          </a>
        </div>
      </div>

      {/* Right Column: Developer Avatar & Sunny Ring */}
      <div className="hero-portrait-wrapper">
        <div className="portrait-container">
          {/* Rotating Sunny Ring */}
          <div className="sunny-ring anim-sunny" aria-hidden="true">
            <img src="/assets/sunnySvg.svg" alt="" width={348} height={348} />
          </div>

          {/* Masked Static Avatar */}
          <div className="avatar-cookie-container">
            <div className="avatar-border-line">
              <img
                src="/avatar.jpg"
                alt="Аватар METAWKA, разработчика exDesktop"
                className="avatar-image"
                width={304}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Developer Signature Label */}
        <div className="developer-signature">
          <span>METAWKA — Разработчик</span>
        </div>
      </div>

      <style>{`
        .hero-section {
          background-color: var(--surface-soft);
          border-radius: 40px;
          min-height: 544px;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 44px 64px 44px 48px;
          margin-top: 24px;
        }

        /* Decorative background shapes */
        .hero-decor {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }

        .hero-decor.flower {
          top: -120px;
          right: 20px;
          opacity: 0.85;
        }

        .hero-decor.clover {
          bottom: -20px;
          right: 480px;
          opacity: 0.85;
        }

        /* Left Content */
        .hero-content {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .version-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--badge-bg);
          color: var(--badge-text);
          font-size: 13px;
          font-weight: 500;
          line-height: 16px;
          padding: 6px 16px;
          border-radius: 16px;
          width: fit-content;
          margin-bottom: 20px;
          text-decoration: none;
          transition: background-color 150ms ease, transform 150ms ease, box-shadow 150ms ease;
          cursor: pointer;
        }

        .version-badge:hover {
          background-color: var(--surface-raised);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .hero-title {
          font-size: 108px;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .hero-slogan {
          font-size: 29px;
          font-weight: 500;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .hero-description {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
          color: var(--text-secondary);
          max-width: 568px;
          margin-bottom: 36px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-download-btn {
          width: 244px;
        }

        .hero-learn-btn {
          width: 205px;
        }

        /* Portrait & Label */
        .hero-portrait-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .portrait-container {
          position: relative;
          width: 348px;
          height: 348px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sunny-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 348px;
          height: 348px;
          pointer-events: none;
        }

        .avatar-cookie-container {
          position: relative;
          width: 304px;
          height: 300px;
          clip-path: url(#avatar-cookie-mask);
          -webkit-clip-path: url(#avatar-cookie-mask);
          background-color: var(--surface-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .avatar-border-line {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 6px solid var(--surface-soft);
          box-sizing: border-box;
          overflow: hidden;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .developer-signature {
          margin-top: 24px;
          width: 340px;
          height: 62px;
          background-color: var(--surface-card);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .hero-section {
            flex-direction: column;
            padding: 40px 32px;
            align-items: center;
            text-align: center;
          }
          .hero-content {
            align-items: center;
            max-width: 100%;
            margin-bottom: 40px;
          }
          .hero-title {
            font-size: 76px;
          }
          .hero-description {
            max-width: 100%;
          }
          .hero-decor.clover {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .hero-section {
            border-radius: 28px;
            padding: 28px 16px;
            margin-top: 16px;
          }
          .hero-title {
            font-size: clamp(38px, 11vw, 54px);
            word-break: break-word;
          }
          .hero-slogan {
            font-size: clamp(20px, 5.5vw, 24px);
            line-height: 1.25;
            margin-bottom: 12px;
          }
          .hero-description {
            font-size: clamp(15px, 4vw, 17px);
            line-height: 1.45;
            margin-bottom: 24px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
          .hero-download-btn,
          .hero-learn-btn {
            width: 100%;
            height: 48px;
            font-size: 15px;
          }
          .hero-decor.flower {
            transform: scale(0.55);
            top: -90px;
            right: -40px;
            opacity: 0.35;
          }
          .portrait-container {
            width: 348px;
            height: 348px;
            transform: scale(0.82);
            transform-origin: center center;
            margin: -24px auto -20px auto;
          }
          .developer-signature {
            width: 100%;
            max-width: 280px;
            height: 50px;
            font-size: 15px;
            margin-top: 4px;
            border-radius: 20px;
          }
        }

        @media (max-width: 380px) {
          .portrait-container {
            transform: scale(0.72);
            margin: -36px auto -30px auto;
          }
          .developer-signature {
            max-width: 240px;
            height: 44px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

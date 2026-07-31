import { useEffect, useState } from 'react';
import type { Locale } from '../i18n/translations';
import { brandAssets, externalLinks } from '../config/site';

const languageOptions = [
  { locale: 'kn', label: 'ಕನ್ನಡ', path: '/' },
  { locale: 'en', label: 'EN', path: '/en/' },
] as const;

interface NavigationCopy {
  brandTagline: string;
  stories: string;
  storiesSub: string;
  movement: string;
  movementSub: string;
  community: string;
  communitySub: string;
  watch: string;
  motto: string;
  allLinks: string;
  languageLabel: string;
}

interface Props {
  locale: Locale;
  copy: NavigationCopy;
}

export default function Navigation({ locale, copy }: Props) {
  const links = [
    { label: copy.stories, sublabel: copy.storiesSub, href: '#stories' },
    { label: copy.movement, sublabel: copy.movementSub, href: '#movement' },
    { label: copy.community, sublabel: copy.communitySub, href: '#community' },
  ];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4 md:pt-6">
        <nav
          className="mx-auto flex w-full max-w-[82rem] items-start justify-between gap-4"
          aria-label="Primary navigation"
        >
          <a
            className="group rounded-[1.45rem] bg-paper-light/82 p-1.5 shadow-[0_18px_55px_rgba(7,29,56,0.12),inset_0_0_0_1px_rgba(7,29,56,0.07)] backdrop-blur-xl"
            href="#top"
            aria-label="Mundhe Banni home"
          >
            <span className="flex items-center gap-3 rounded-[1.08rem] bg-ink py-2 pr-4 pl-2 text-paper-light shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-[0.72rem] bg-paper-light transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:rotate-[-5deg] group-hover:scale-105">
                <img className="size-9 scale-[2.35] object-contain" src={brandAssets.logo} alt="" />
              </span>
              <span className="flex flex-col">
                <span className="font-kannada-display text-xl font-bold leading-[0.9] tracking-[-0.025em]">ಮುಂದೆ ಬನ್ನಿ</span>
                <span className="mt-1 max-w-36 truncate text-[0.4rem] font-extrabold tracking-[0.14em] text-terra uppercase">{copy.brandTagline}</span>
              </span>
            </span>
          </a>

          <div className="hidden rounded-[1.45rem] bg-paper-light/82 p-1.5 shadow-[0_18px_55px_rgba(7,29,56,0.12),inset_0_0_0_1px_rgba(7,29,56,0.07)] backdrop-blur-xl md:block">
            <div className="flex items-center gap-1 rounded-[1.08rem] bg-ink p-1.5 pl-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.09)]">
              {links.map((link) => (
                <a
                  key={link.href}
                  className="rounded-[0.8rem] px-4 py-2 text-[0.64rem] font-bold tracking-[0.08em] text-paper/62 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:opacity-100"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-1 flex items-center rounded-[0.72rem] bg-paper-light/8 p-1" role="group" aria-label={copy.languageLabel}>
                {languageOptions.map((option) => {
                  const active = locale === option.locale;
                  return (
                    <a
                      key={option.locale}
                      className={`grid h-7 min-w-8 place-items-center rounded-[0.5rem] px-1.5 text-[0.56rem] font-extrabold transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 ${active ? 'bg-paper-light text-ink' : 'text-paper/55 hover:opacity-100'}`}
                      href={option.path}
                      hrefLang={option.locale}
                      lang={option.locale}
                      aria-current={active ? 'page' : undefined}
                    >
                      {option.label}
                    </a>
                  );
                })}
              </div>
              <a
                className="group ml-1 inline-flex items-center gap-3 rounded-[0.82rem] bg-turmeric py-1.5 pr-1.5 pl-4 text-[0.64rem] font-extrabold text-ink transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
                href={externalLinks.youtube}
                target="_blank"
                rel="noreferrer"
              >
                {copy.watch}
                <span className="grid size-7 place-items-center rounded-[0.62rem] bg-ink text-paper-light transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M8 16 16 8m-6 0h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="rounded-[1.2rem] bg-paper-light/82 p-1.5 shadow-[0_18px_55px_rgba(7,29,56,0.12),inset_0_0_0_1px_rgba(7,29,56,0.07)] backdrop-blur-xl">
              <div className="flex rounded-[0.82rem] bg-ink p-1" role="group" aria-label={copy.languageLabel}>
                {languageOptions.map((option) => {
                  const active = locale === option.locale;
                  return (
                    <a
                      key={option.locale}
                      className={`grid h-7 min-w-7 place-items-center rounded-[0.58rem] px-1.5 text-[0.5rem] font-extrabold transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${active ? 'bg-turmeric text-ink' : 'text-paper/55 hover:opacity-100'}`}
                      href={option.path}
                      hrefLang={option.locale}
                      lang={option.locale}
                      aria-current={active ? 'page' : undefined}
                    >
                      {option.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[1.45rem] bg-paper-light/82 p-1.5 shadow-[0_18px_55px_rgba(7,29,56,0.12),inset_0_0_0_1px_rgba(7,29,56,0.07)] backdrop-blur-xl">
              <button
                className="relative grid size-11 place-items-center rounded-[1.08rem] bg-ink text-paper-light"
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((current) => !current)}
              >
                <span
                  className={`absolute h-px w-4 bg-current transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? 'rotate-45' : '-translate-y-[3px]'}`}
                />
                <span
                  className={`absolute h-px w-4 bg-current transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? '-rotate-45' : 'translate-y-[3px]'}`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-20 bg-ink/94 px-4 pt-28 pb-6 text-paper-light backdrop-blur-3xl transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-8 opacity-0'}`}
        aria-hidden={!open}
      >
        <div className="mx-auto flex min-h-full max-w-lg flex-col justify-between">
          <div className="space-y-2">
            {links.map((link, index) => (
              <a
                key={link.href}
                className={`flex items-end justify-between border-b border-paper-light/10 py-5 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: open ? `${100 + index * 75}ms` : '0ms' }}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <span className="font-kannada-display text-4xl font-semibold">{link.label}</span>
                <span className="pb-1 text-[0.62rem] tracking-[0.16em] text-paper/55 uppercase">{link.sublabel}</span>
              </a>
            ))}
          </div>
          <div className="flex items-end justify-between text-xs text-paper/60">
            <p className="font-kannada-serif text-lg text-paper">{copy.motto}</p>
            <a href={externalLinks.linktree} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>{copy.allLinks} ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}

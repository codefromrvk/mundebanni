import { useEffect, useState } from 'react';
import './IntroReveal.css';

type Phase = 'holding' | 'leaving' | 'done';

export default function IntroReveal() {
  const [phase, setPhase] = useState<Phase>('holding');

  useEffect(() => {
    const introStorageKey = 'mundhe-banni:intro-seen';
    try {
      if (window.sessionStorage.getItem(introStorageKey) === '1') {
        setPhase('done');
        return;
      }
      window.sessionStorage.setItem(introStorageKey, '1');
    } catch {
      // The intro still works when storage is unavailable.
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (reduceMotion) {
      setPhase('done');
      document.body.style.overflow = previousOverflow;
      return;
    }

    const leaveTimer = window.setTimeout(() => setPhase('leaving'), 1850);
    const doneTimer = window.setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = previousOverflow;
    }, 2950);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const skipIntro = () => {
    setPhase('leaving');
    window.setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, 850);
  };

  if (phase === 'done') return null;

  return (
    <div className={`intro-reveal ${phase === 'leaving' ? 'is-leaving' : ''}`} aria-label="Mundhe Banni introduction">
      <div className="intro-reveal__sun" aria-hidden="true" />
      <div className="intro-reveal__stitch" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="intro-reveal__mark">
        <svg viewBox="0 0 660 260" role="img" aria-label="ಮುಂದೆ ಬನ್ನಿ">
          <text x="330" y="175" textAnchor="middle">ಮುಂದೆ ಬನ್ನಿ</text>
        </svg>
        <p>COME FORWARD · STEP AHEAD</p>
      </div>

      <p className="intro-reveal__place">ಕರ್ನಾಟಕ · KARNATAKA</p>
      <button className="intro-reveal__skip" type="button" onClick={skipIntro}>
        Skip intro
      </button>
    </div>
  );
}

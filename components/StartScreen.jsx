'use client';

export default function StartScreen({ onStart }) {
  return (
    <section className="onboarding-shell">
      <div className="glass-card start-card">
        <div className="wave-icon" aria-hidden="true">
          <svg viewBox="0 0 120 120" className="wave-svg" role="img" aria-label="Wave icon">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7fffc8" />
                <stop offset="100%" stopColor="#19c37d" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="52" fill="rgba(25,195,125,0.15)" />
            <path
              d="M20 58c10 0 10-10 20-10s10 10 20 10 10-10 20-10 10 10 20 10"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M20 74c10 0 10-10 20-10s10 10 20 10 10-10 20-10 10 10 20 10"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>
        </div>

        <h1 className="start-title">Herbi</h1>
        <p className="start-subtitle">Natural Wellness</p>

        <button type="button" className="cta-btn" onClick={onStart}>
          Get Started <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}

import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="hero-title">Welcome to 天空隊長</h2>
        <p className="hero-sub">A starting point for the app — match this section to Figma layout.</p>
        <div className="hero-actions">
          <a href="#" className="cta-link">
            <img src="/assets/cta-get-started.svg" alt="Get Started" className="cta-img" />
          </a>
          <a href="#" className="cta-link">
            <img src="/assets/cta-learn-more.svg" alt="Learn More" className="cta-img" />
          </a>
        </div>
      </div>
    </section>
  )
}

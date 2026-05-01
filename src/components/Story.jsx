import React from 'react';

const Story = () => {
  return (
    <section className="section story-section" id="story">
      <div className="container">
        <h2 className="section-title">Kisah Kami</h2>
        <div className="story-content">
          <div className="glass-card story-card">
            <p className="story-text">
              "Berawal dari perkenalan sederhana, waktu membawa kami pada perjalanan yang luar biasa. 
              Melalui tawa, tangis, dan dukungan tanpa henti, kami menyadari bahwa kami ditakdirkan untuk bersama."
            </p>
            <div className="couple-names">
              <span className="name">Romeo Montague</span>
              <span className="and">&</span>
              <span className="name">Juliet Capulet</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .story-section {
          background-color: var(--bg-color);
          position: relative;
        }

        /* Decorative rustic elements */
        .story-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, var(--gold-light) 10%, transparent 10%);
          background-size: 20px 20px;
          opacity: 0.3;
        }

        .story-content {
          max-width: 800px;
          margin: 0 auto;
          margin-top: 50px;
        }

        .story-card {
          border-top: 4px solid var(--gold-primary);
        }

        .story-text {
          font-size: 1.2rem;
          font-style: italic;
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.8;
        }

        .couple-names {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .name {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--text-primary);
        }

        .and {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--gold-primary);
        }

        @media (max-width: 768px) {
          .couple-names {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Story;

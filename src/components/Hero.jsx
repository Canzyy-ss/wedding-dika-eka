import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <p className="pre-title">UNDANGAN PAWIWAHAN</p>
        
        <div className="hero-split">
          <div className="hero-names">
            <span>Dika</span>
            <span className="ampersand">&</span>
            <span>Eka</span>
          </div>
          
          <div className="hero-divider"></div>
          
          <div className="hero-date">
            <span>Buda Pon Tolu</span>
            <span>06.05.2026</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: flex-end; /* Align content to bottom as seen in screenshot */
          justify-content: center;
          padding-bottom: 100px;
          text-align: center;
          /* Hero background image */
          background-image: url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center 20%;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, rgba(33, 27, 21, 0.1) 0%, rgba(33, 27, 21, 0.9) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          padding: 0 20px;
          width: 100%;
          max-width: 800px;
        }

        .pre-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 30px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero-split {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .hero-names {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero-names .ampersand {
          font-size: 1.5rem;
          margin: 5px 0;
        }

        .hero-divider {
          width: 3px;
          height: 80px;
          background-color: var(--text-primary);
          box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero-date {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.4;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .pre-title {
            font-size: 1.5rem;
          }
          .hero-names {
            font-size: 1.5rem;
          }
          .hero-names .ampersand {
            font-size: 1.2rem;
          }
          .hero-divider {
            height: 60px;
          }
          .hero-date {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

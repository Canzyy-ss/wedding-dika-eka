import React from 'react';
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import BrideGroom from './components/BrideGroom';
import SaveTheDate from './components/SaveTheDate';
import Details from './components/Details';
import WeddingGift from './components/WeddingGift';
import Gallery from './components/Gallery';
import Cover from './components/Cover';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // Prevent scrolling behind the cover when it's closed
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  return (
    <>
      <Cover isOpened={isOpened} onOpen={() => setIsOpened(true)} />
      
      <div className="app-container">
        <Hero />
        <BrideGroom />
        <SaveTheDate />
        <Details />
      <WeddingGift />
      <Gallery />
      
      <footer className="footer-section">
        <div className="footer-container">
          <div className="heart-divider">
            <span className="line"></span>
            <span className="heart">♡</span>
            <span className="line"></span>
          </div>

          <p className="footer-greeting">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.<br/>
            Atas kehadirannya kami ucapkan terima kasih.
          </p>
          
          <div className="balinese-script">
            ᬒᬁ ᬰᬵᬦ᭄ᬢᬶ ᬰᬵᬦ᭄ᬢᬶ ᬰᬵᬦ᭄ᬢᬶ ᬒᬁ
          </div>

          <p className="happy-family">Kami yang berbahagia,</p>
          <h2 className="footer-names">Dika & Eka</h2>
        </div>
      </footer>

      <style>{`
        .footer-section {
          background-color: var(--bg-color);
          padding: 80px 20px 100px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Decorative background elements matching the screenshot */
        .footer-section::before {
          content: '';
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212, 181, 114, 0.15) 0%, transparent 70%);
          border-radius: 50%;
        }

        .footer-section::after {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(212, 181, 114, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .footer-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .heart-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
          opacity: 0.6;
        }

        .heart-divider .line {
          height: 1px;
          width: 100px;
          background-color: var(--text-secondary);
        }

        .heart-divider .heart {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .footer-greeting {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 40px;
        }

        .balinese-script {
          font-size: 2.5rem;
          color: var(--text-primary);
          margin-bottom: 40px;
          letter-spacing: 2px;
          /* Balinese script specific fonts if available */
          font-family: "Noto Sans Balinese", "Vimala", sans-serif;
        }

        .happy-family {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .footer-names {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          color: var(--text-primary);
          font-weight: 400;
          letter-spacing: 2px;
        }

        @media (max-width: 768px) {
          .footer-names {
            font-size: 2.5rem;
          }
          .balinese-script {
            font-size: 1.8rem;
          }
          .footer-greeting {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;

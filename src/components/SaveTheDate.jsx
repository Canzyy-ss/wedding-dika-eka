import React, { useState, useEffect } from 'react';

const SaveTheDate = () => {
  const targetDate = '2026-05-06T15:00:00';
  
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { Hari: 0, Jam: 0, Menit: 0, Detik: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="section save-the-date-section">
      <div className="container">
        <div className="frame-container">
          <div className="frame-content">
            <h2 className="std-title">SAVE THE DATE</h2>
            <h3 className="std-date">06.05.2026</h3>
            
            <div className="spacer"></div>
            
            <h4 className="counting-title">Counting the Days</h4>
            
            <div className="countdown-container">
              {Object.keys(timeLeft).map((interval) => (
                <div key={interval} className="countdown-item">
                  <span className="countdown-value">{timeLeft[interval]}</span>
                  <span className="countdown-label">{interval}</span>
                </div>
              ))}
            </div>
            
            <a href="#rsvp" className="std-btn">Save the Date</a>
          </div>
        </div>
      </div>

      <style>{`
        .save-the-date-section {
          background-color: var(--bg-darker);
          padding: 80px 20px;
          display: flex;
          justify-content: center;
        }

        .frame-container {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
          /* Background image as seen in screenshot */
          background-image: url('/pawiwahan2-bg.jpg');
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255, 255, 255, 0.7);
          padding: 10px;
        }

        .frame-container::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(33, 27, 21, 0.85); /* Efek gelap seperti Pawiwahan */
        }

        .frame-content {
          position: relative;
          z-index: 10;
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 60px 20px 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: transparent;
          min-height: 700px;
        }

        .std-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          letter-spacing: 3px;
          color: var(--text-primary);
          margin-bottom: 10px;
          font-weight: 400;
        }

        .std-date {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          color: var(--text-primary);
          margin-bottom: 20px;
          font-weight: 400;
        }

        .spacer {
          flex-grow: 1; /* Pushes the countdown to the bottom */
        }

        .counting-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 30px;
          font-weight: 400;
        }

        .countdown-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 40px;
        }

        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-value {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          color: var(--text-primary);
          line-height: 1;
        }

        .countdown-label {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-primary);
          margin-top: 5px;
        }

        .std-btn {
          display: inline-block;
          border: 1px solid var(--text-primary);
          color: var(--text-primary);
          padding: 10px 30px;
          font-family: var(--font-body);
          font-size: 1rem;
          transition: all 0.3s ease;
          background: transparent;
          cursor: pointer;
          text-decoration: none;
        }

        .std-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 600px) {
          .std-date {
            font-size: 2.5rem;
          }
          .countdown-container {
            gap: 15px;
          }
          .countdown-value {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SaveTheDate;

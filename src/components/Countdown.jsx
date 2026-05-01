import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
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

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="countdown-item">
        <span className="countdown-value">{timeLeft[interval]}</span>
        <span className="countdown-label">{interval}</span>
      </div>
    );
  });

  return (
    <div className="countdown-container">
      {timerComponents.length ? timerComponents : <span>Hari Bahagia Telah Tiba!</span>}
      <style>{`
        .countdown-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }
        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(197, 160, 89, 0.1);
          border: 1px solid var(--gold-primary);
          border-radius: 8px;
          padding: 15px 20px;
          min-width: 80px;
          backdrop-filter: blur(5px);
        }
        .countdown-value {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .countdown-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--gold-dark);
          margin-top: 5px;
        }
        @media (max-width: 600px) {
          .countdown-container {
            gap: 10px;
          }
          .countdown-item {
            padding: 10px;
            min-width: 60px;
          }
          .countdown-value {
            font-size: 1.5rem;
          }
          .countdown-label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Countdown;

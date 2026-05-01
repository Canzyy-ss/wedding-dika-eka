import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Details = () => {
  return (
    <section className="section details-section" id="details">
      <div className="container">
        
        <div className="pawiwahan-card">
          <div className="card-header">
            <div className="icon-wrapper">
              <span className="wedding-icon">⛩️</span>
            </div>
            <h2 className="section-title-custom">PAWIWAHAN</h2>
            <div className="clock-icon">
              <Clock size={20} />
            </div>
          </div>
          
          <div className="pawiwahan-content">
            <h3 className="day">Rabu</h3>
            <h2 className="date-large">06</h2>
            <h3 className="month-year">Mei<br/>2026</h3>
            
            <div className="time">
              Pukul 15:00 WITA - Selesai
            </div>
            
            <div className="location">
              <MapPin size={20} className="map-icon" />
              <p>Jalan Segara Madu Gang Ratna 2 No 99x</p>
            </div>
            
            <a href="https://maps.app.goo.gl/bKtHaH5w5fesgYes5?g_st=aw" target="_blank" rel="noreferrer" className="maps-btn">
              <MapPin size={16} /> Google Maps
            </a>
            
            <p className="maps-hint">*Silahkan klik tombol untuk membuka<br/>lokasi acara</p>
          </div>
        </div>

      </div>

      <style>{`
        .details-section {
          background-color: var(--bg-color);
          padding: 80px 20px;
          display: flex;
          justify-content: center;
        }

        .pawiwahan-card {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          background-image: url('/pawiwahan-bg.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .pawiwahan-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(22, 18, 14, 0.85); /* Very dark overlay to match screenshot */
        }

        .card-header {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 40px 20px 20px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .wedding-icon {
          font-size: 2rem;
          color: var(--gold-primary);
        }

        .section-title-custom {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          color: var(--text-primary);
          margin: 15px 0;
          letter-spacing: 2px;
          font-weight: 400;
        }

        .clock-icon {
          display: inline-block;
          background-color: var(--bg-darker);
          padding: 5px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-primary);
        }

        .pawiwahan-content {
          position: relative;
          z-index: 10;
          padding: 60px 40px 40px 40px;
          text-align: center;
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-top: none;
          border-radius: 0 0 20px 20px;
          margin: 0 20px 40px 20px;
        }

        .day {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          margin-bottom: 5px;
          font-weight: 400;
        }

        .date-large {
          font-family: var(--font-heading);
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 5px;
          font-weight: 400;
        }

        .month-year {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          line-height: 1.2;
          margin-bottom: 30px;
          font-weight: 400;
        }

        .time {
          font-family: var(--font-body);
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .location {
          margin-bottom: 30px;
        }

        .map-icon {
          margin-bottom: 10px;
        }

        .location p {
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .maps-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--text-primary);
          color: var(--text-primary);
          padding: 12px 30px;
          font-family: var(--font-body);
          font-size: 1rem;
          border-radius: 4px;
          text-decoration: none;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .maps-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .maps-hint {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default Details;

import React, { useEffect, useState } from 'react';
import { MailOpen } from 'lucide-react';

const Cover = ({ onOpen, isOpened }) => {
  const [guestName, setGuestName] = useState('Tamu Undangan');

  useEffect(() => {
    // Mengambil parameter nama tamu dari URL (contoh: ?to=Budi)
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  return (
    <div className={`cover-section ${isOpened ? 'opened' : ''}`}>
      <div className="cover-overlay">
        <div className="cover-content">
          <p className="cover-subtitle">THE WEDDING OF</p>
          <h1 className="cover-title">Dika & Eka</h1>
          
          <div className="guest-info">
            <p className="guest-label">Kepada Bapak/Ibu/Saudara/i</p>
            <h2 className="guest-name">{guestName}</h2>
          </div>

          <button className="open-btn" onClick={onOpen}>
            <MailOpen size={18} /> Buka Undangan
          </button>
          
          <p className="disclaimer">
            *Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p>
        </div>
      </div>
      
      <style>{`
        .cover-section {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 9999;
          background-image: url('/pawiwahan-bg.jpg'); /* Menggunakan foto mempelai */
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 1s cubic-bezier(0.7, 0, 0.3, 1), opacity 1s ease;
        }

        .cover-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(33, 27, 21, 0.7);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
        }

        .cover-content {
          position: relative;
          z-index: 10;
          color: #fff;
          animation: fadeIn 1.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cover-subtitle {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          letter-spacing: 4px;
          margin-bottom: 10px;
        }

        .cover-title {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          margin-bottom: 50px;
          letter-spacing: 2px;
        }

        .guest-info {
          margin-bottom: 40px;
        }

        .guest-label {
          font-family: var(--font-body);
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .guest-name {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
        }

        .open-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: transparent;
          border: 1px solid #fff;
          color: #fff;
          padding: 12px 30px;
          font-family: var(--font-body);
          font-size: 1rem;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }

        .open-btn:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .disclaimer {
          font-family: var(--font-body);
          font-size: 0.8rem;
          opacity: 0.7;
        }

        /* Animasi saat dibuka */
        .cover-section.opened {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .cover-title {
            font-size: 3.5rem;
          }
          .guest-name {
            font-size: 1.8rem;
          }
          .cover-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Cover;

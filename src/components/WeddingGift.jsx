import React, { useState } from 'react';
import { Gift, Eye, EyeOff, Copy, Check } from 'lucide-react';

const WeddingGift = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const accounts = [
    {
      id: 'bca',
      bank: 'BCA',
      number: '8580356746',
      name: 'Komang Mahardika'
    },
    {
      id: 'bri',
      bank: 'BRI',
      number: '055701020376503',
      name: 'Pande Putu Eka Leony Ariyanti'
    }
  ];

  return (
    <section className="section gift-section">
      <div className="gift-container">
        <h2 className="gift-title">WEDDING GIFT</h2>
        <div className="gift-icon">
          <Gift size={40} color="var(--text-primary)" />
        </div>
        
        <p className="gift-desc">
          Tanpa mengurangi rasa hormat kami, apabila Bapak/Ibu/Saudara/i ingin
          memberikan tanda kasih, kami dengan senang hati menerimanya melalui
          transfer ke rekening berikut.
        </p>

        <button className="toggle-btn" onClick={toggleVisibility}>
          {isVisible ? (
            <><EyeOff size={16} /> Sembunyikan</>
          ) : (
            <><Eye size={16} /> Lihat Rekening</>
          )}
        </button>

        {isVisible && (
          <div className="accounts-wrapper animate-fade-in">
            {accounts.map(acc => (
              <div key={acc.id} className="account-card">
                <h3 className="bank-name">{acc.bank}</h3>
                <p className="account-number">{acc.number}</p>
                <p className="account-name">a.n.<br/>{acc.name}</p>
                
                <button 
                  className="copy-btn" 
                  onClick={() => handleCopy(acc.number, acc.id)}
                >
                  {copiedId === acc.id ? (
                    <><Check size={14} /> Tersalin</>
                  ) : (
                    <><Copy size={14} /> Salin Rekening</>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .gift-section {
          background-color: var(--bg-darker);
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .gift-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(22, 18, 14, 0.85); /* Dark overlay */
        }

        .gift-container {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 600px;
          width: 100%;
          color: var(--text-primary);
        }

        .gift-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          letter-spacing: 2px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .gift-icon {
          margin-bottom: 20px;
        }

        .gift-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 30px;
          color: var(--text-secondary);
        }

        .toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--text-secondary);
          color: var(--text-primary);
          padding: 8px 20px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 30px;
        }

        .toggle-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .accounts-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .account-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          padding: 30px 20px;
          border-radius: 4px;
          width: 100%;
          max-width: 350px;
        }

        .bank-name {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-style: italic;
          font-weight: 700;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .account-number {
          font-family: var(--font-body);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .account-name {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 25px;
          line-height: 1.4;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: var(--text-primary);
          padding: 8px 20px;
          font-family: var(--font-body);
          font-size: 0.85rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .copy-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default WeddingGift;

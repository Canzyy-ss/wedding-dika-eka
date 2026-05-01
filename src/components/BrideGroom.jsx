import React from 'react';

const BrideGroom = () => {
  return (
    <section className="section couple-section" id="couple">
      <div className="container">
        <div className="couple-grid">
          {/* Groom */}
          <div className="couple-card">
            <div className="card-image" style={{ backgroundImage: "url('/pria.jpg')" }}>
              <div className="card-overlay">
                <div className="card-info">
                  <h3 className="person-name">Komang Mahardika Adi Saputra</h3>
                  <p className="parents">
                    Putra ketiga dari pasangan<br />
                    Bapak I Wayan Dona &<br />
                    Ibu Suryaningsih
                  </p>
                  <p className="address">
                    Jl. Segara Madu Gg. Suli Desa Adat Kelan, Kelurahan Tuban, Kec. Kuta, Kab. Badung
                  </p>
                  <a href="https://instagram.com/inyoman088" target="_blank" rel="noreferrer" className="ig-btn">
                    ◎ inyoman
                  </a>
                </div>
              </div>
            </div>
            <div className="card-title-wrapper">
              <div className="line"></div>
              <h2 className="card-title">THE GROOM</h2>
            </div>
          </div>

          {/* Bride */}
          <div className="couple-card">
            <div className="card-image" style={{ backgroundImage: "url('/wanita.jpg')" }}>
              <div className="card-overlay right-align">
                <div className="card-info">
                  <h3 className="person-name">Pande Putu Eka Leony Ariyanti</h3>
                  <p className="parents">
                    Putri pertama dari pasangan<br />
                    Bapak I Wayan Sudimara &<br />
                    Ibu Ni Komang Widiari
                  </p>
                  <p className="address">
                    Jl. Budakeling, Buana Giri, Kec. Bebandem, Kab.Karangasem
                  </p>
                  <a href="https://instagram.com/ekapande_27" target="_blank" rel="noreferrer" className="ig-btn">
                    ◎ ekapande
                  </a>
                </div>
              </div>
            </div>
            <div className="card-title-wrapper">
              <h2 className="card-title">THE BRIDE</h2>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .couple-section {
          background-color: var(--bg-darker);
          padding: 60px 20px;
        }

        .couple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .couple-card {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .card-image {
          position: relative;
          height: 600px;
          background-size: cover;
          background-position: center;
          /* Dark vignette overlay */
          box-shadow: inset 0 0 100px rgba(0,0,0,0.8);
          border-radius: 4px;
        }

        .card-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to top, rgba(33, 27, 21, 0.95) 0%, rgba(33, 27, 21, 0.2) 50%, rgba(33, 27, 21, 0) 100%);
          display: flex;
          align-items: flex-end;
          padding: 30px;
          border-radius: 4px;
        }

        .card-info {
          width: 100%;
          text-align: left;
        }

        .right-align .card-info {
          text-align: right;
        }

        .person-name {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 15px;
        }

        .parents, .address {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .ig-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 8px 20px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .right-align .ig-btn {
          float: right;
        }

        .ig-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .card-title-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 20px;
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--text-primary);
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .line {
          flex-grow: 1;
          height: 1px;
          background-color: var(--text-secondary);
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .couple-grid {
            grid-template-columns: 1fr;
          }
          .card-image {
            height: 500px;
          }
          .card-title {
            font-size: 1.5rem;
          }
          .person-name {
            font-size: 1.5rem;
          }
          .card-overlay {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default BrideGroom;

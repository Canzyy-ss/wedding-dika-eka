import React from 'react';

const Gallery = () => {
  // Mock images for demonstration
  const images = [
    '/galeri1.jpg',
    '/galeri2.jpg',
    '/galeri3.jpg',
    '/galeri4.jpg',
    '/galeri5.jpg',
    '/galeri6.jpg',
  ];

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">Galeri</h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Moment ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-section {
          background-color: var(--bg-color);
          padding: 60px 20px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 50px;
        }

        .gallery-item {
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          aspect-ratio: 1 / 1;
          border: 2px solid rgba(255,255,255,0.1);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Gallery;

import React from 'react';

const Gallery = () => {
  // Mock images for demonstration
  const images = [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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

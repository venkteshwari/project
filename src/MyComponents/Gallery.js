import React from 'react';

const galleryImages = [
  { src: 'images/abc2.jpg', alt: 'Gallery Image 1' },
  { src: 'images/abc.jpg', alt: 'Gallery Image 2' },
  { src: 'images/abc1.jpg', alt: 'Gallery Image 3' },
  { src: 'images/abc3.jpg', alt: 'Gallery Image 4' },
  { src: 'images/class1.jpg', alt: 'Gallery Image 5' },
  { src: 'images/class2.jpg', alt: 'Gallery Image 6' }
];

export default function Gallery() {
  return (
    <div className='container mt-5' id='gallery'>
      <div className='text-center mb-4'>
        <h3 className='text-primary' style={{ fontWeight: 'bold' }}>
          Our Gallery
        </h3>
        <p className='text-muted'>Some memorable moments at <cite title="Source Title">SN INNOTECH</cite></p>
      </div>

      <div className='row g-4'>
        {galleryImages.map((image, index) => (
          <div key={index} className='col-12 col-md-6 col-lg-4'>
            <div className='card shadow-lg border-0 overflow-hidden h-100'>
              <img src={image.src} className='card-img-top img-fluid' alt={image.alt} style={{ height: '300px', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

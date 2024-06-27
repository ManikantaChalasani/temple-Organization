import React from 'react';
import image1 from '../assets/images/gallery/image1.jpg';
import image2 from '../assets/images/gallery/image2.jpg';
// Define Gallery component
const Gallery = () => {
    // Array of gallery images with imported image paths
    const galleryImages = [
        { id: 1, src: image1, alt: 'Temple Image 1' },
        { id: 1, src: image2, alt: 'Temple Image 1' }
        
    ];

    // Return JSX to render gallery
    return (
        <div className="gallery">
            <header className="gallery-header">
                <h1>Temple Gallery</h1>
                <p>Explore images of our temple, events, and cultural celebrations.</p>
            </header>
            <div className="image-grid">
                {galleryImages.map(image => (
                    <div key={image.id} className="image-item">
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

import React from 'react';

const TempleBOX = () => {
    const templeGif = '/tem33.png';
    const templeContent = "Welcome to the sacred temple, a place of peace and spiritual growth. Discover the beauty and tranquility that resides within.";

    return (      
            <div className="content-section">
                <div className="content-left">
                <img src={templeGif} alt="Temple GIF" />
                </div>
                <div className="content-right">
                    <p>{templeContent}</p>
                </div>
            </div>
        
    );
};

export default TempleBOX;

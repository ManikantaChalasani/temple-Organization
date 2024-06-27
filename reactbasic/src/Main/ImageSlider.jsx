import React, { useState,useEffect } from "react";
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
const ImageSlider = () => {

    const images = [
        image2,image3,image1
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='slider'>
            <button onClick={goToPrevious} className='slider-button slider-button-left'>&#10094;</button>
            <img src={images[currentIndex]} alt='Slider' className='slider-image' />
            <button onClick={goToNext} className='slider-button slider-button-right'>&#10095;</button>
        </div>
    );
};


export default ImageSlider;

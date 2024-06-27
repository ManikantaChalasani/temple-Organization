import React, { useEffect, useState } from 'react';
import ImageSlider from '../Main/ImageSlider';
import Volunteers from '../Main/Volunteers';
import volunteersData from '../Main/VolunteerData.json';

const Home = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        setVolunteers(volunteersData);
    }, []);
    return (
        <div className="home">
            <ImageSlider />
            <Volunteers volunteers={volunteers} />
        </div>
    );
};

export default Home;

import React, { useEffect, useState } from 'react';
import Volunteers from '../Main/Volunteers';
import volunteersData from '../Main/VolunteerData.json';
import TempleBOX from '../Main/TempleBox';

const Home = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        setVolunteers(volunteersData);
    }, []);
    return (
        <div className="home">
            <TempleBOX />
            <Volunteers volunteers={volunteers} />
        </div>
    );
};

export default Home;

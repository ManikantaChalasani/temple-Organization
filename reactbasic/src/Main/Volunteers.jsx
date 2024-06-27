import React from 'react';

const Volunteers = ({ volunteers }) => {
    return (
        <div className="volunteers-container">
            <div className="volunteers-scroll">
                {volunteers.map((volunteer, index) => (
                    <div key={index} className="volunteer-card">
                        <img src={volunteer.photo} alt={volunteer.name} className="volunteer-photo" />
                        <div className="volunteer-info">
                            <h3>{volunteer.name}</h3>
                            <p>{volunteer.contact}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Volunteers;

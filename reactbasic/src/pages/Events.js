import React from 'react';

const Events = () => {
    const events = [
        {
            id: 1,
            title: 'Annual Festival Celebration',
            date: 'July 15, 2024',
            description: 'Join us for our annual festival celebrating the temple’s founding anniversary. Experience cultural performances, rituals, and delicious food.',
        },
        {
            id: 2,
            title: 'Community Outreach Program',
            date: 'September 5, 2024',
            description: 'Participate in our community outreach program, aimed at serving the underprivileged and spreading the message of compassion and service.',
        },
        {
            id: 3,
            title: 'Lecture Series on Spirituality',
            date: 'October 20, 2024',
            description: 'Engage in enlightening discussions on spirituality and ancient teachings by renowned speakers from around the world.',
        },
    ];

    return (
        <div className="events">
            <header className="events-header">
                <h1>Upcoming Events</h1>
                <p>Discover the upcoming events and activities at our temple.</p>
            </header>

            <div className="events-list">
                {events.map(event => (
                    <div key={event.id} className="event-item">
                        <h2>{event.title}</h2>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;

import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us">
            <header className="about-us-header">
                <h1>About Nagendra Swami Temple</h1>
                <p>A sacred space for spiritual growth and community.</p>
            </header>

            <section className="temple-history">
                <h2>Our History</h2>
                <div className="content">
                    <img src="/assets/images/temple.jpg" alt="Nagendra Swami Temple" className="temple-image" />
                    <div className="text">
                        <p>Founded in ancient times, the Nagendra Swami Temple has been a center of spiritual enlightenment and community gathering for generations. The temple's history is rich with cultural heritage and spiritual significance, attracting devotees from far and wide.</p>
                        <p>With its serene environment and beautiful architecture, the temple continues to be a beacon of peace and spirituality in the community.</p>
                    </div>
                </div>
            </section>

            <section className="nagendra-swami">
                <h2>About Nagendra Swami</h2>
                <div className="content">
                    <img src="/assets/images/nagendra-swami.jpg" alt="Nagendra Swami" className="swami-image" />
                    <div className="text">
                        <p>Nagendra Swami is revered for his profound wisdom and spiritual guidance. His teachings emphasize compassion, humility, and the pursuit of inner peace. The temple stands as a testament to his legacy, continuing to inspire and uplift the community.</p>
                        <p>Under his guidance, many have found solace and a deeper connection with the divine.</p>
                    </div>
                </div>
            </section>

            <section className="temple-mission">
                <h2>Our Mission</h2>
                <p>To foster a deeper spiritual connection among our devotees and promote a sense of community through various spiritual and cultural activities.</p>
            </section>

            <section className="temple-vision">
                <h2>Our Vision</h2>
                <p>We envision a harmonious world where individuals are united by their shared pursuit of spiritual enlightenment and peace.</p>
            </section>

            <section className="temple-community">
                <h2>Community & Activities</h2>
                <p>We offer a variety of programs and events aimed at fostering community spirit and spiritual growth, including meditation sessions, cultural festivals, and educational workshops.</p>
            </section>

            <section className="temple-team">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="/assets/images/team-member1.jpg" alt="Priest" className="team-image" />
                        <h3>Priest Name</h3>
                        <p>Head Priest</p>
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/team-member2.jpg" alt="Manager" className="team-image" />
                        <h3>Manager Name</h3>
                        <p>Temple Manager</p>
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/team-member3.jpg" alt="Coordinator" className="team-image" />
                        <h3>Coordinator Name</h3>
                        <p>Volunteer Coordinator</p>
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/team-member4.jpg" alt="Organizer" className="team-image" />
                        <h3>Organizer Name</h3>
                        <p>Event Organizer</p>
                    </div>
                </div>
            </section>

            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>Email: nagendraswami@temple.com</p>
                <p>Phone: +91 0000 0000 000</p>
                <p>Address: 123 Temple Road, City, Country</p>
            </section>
        </div>
    );
};

export default AboutUs;

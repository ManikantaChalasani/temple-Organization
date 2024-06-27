import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [recentPosts, setRecentPosts] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API or database
        setRecentPosts([
            { id: 1, title: 'Annual Temple Festival', link: '/events/1' },
            { id: 2, title: 'Meditation Workshop', link: '/events/2' },
            { id: 3, title: 'Community Gathering', link: '/events/3' },
        ]);

        setUpcomingEvents([
            { id: 1, event: 'Music Night', date: 'June 30, 2024', link: '/events/4' },
            { id: 2, event: 'Charity Fundraiser', date: 'July 15, 2024', link: '/events/5' },
            { id: 3, event: 'Yoga Retreat', date: 'August 5, 2024', link: '/events/6' },
        ]);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about-section">
                    <h3>About Us</h3>
                    <p>We are dedicated to fostering community spirit and providing a serene place for spiritual enrichment and gatherings.</p>
                </div>
                <div className="footer-section links-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                        <li><NavLink to="/events" activeClassName="active">Events</NavLink></li>
                        <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section contact-section">
                    <h3>Contact Us</h3>
                    <p>NagendraSwami Tempel,</p>
                    <p>Phone: 9999999999</p>
                    <p>Email: nagendraswami@temple.com</p>
                </div>
                <div className="footer-section dynamic-content-section">
                    <h3>Recent Posts</h3>
                    <ul>
                        {recentPosts.map(post => (
                            <li key={post.id}>
                                <NavLink to={post.link}>{post.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <h3>Upcoming Events</h3>
                    <ul>
                        {upcomingEvents.map(event => (
                            <li key={event.id}>
                                <NavLink to={event.link}>{event.event} - {event.date}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section social-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <NavLink to={{ pathname: "https://facebook.com" }} target="_blank" className="social-icon">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </NavLink>
                        <NavLink to={{ pathname: "https://twitter.com" }} target="_blank" className="social-icon">
                            <i className="fab fa-twitter"></i> Twitter
                        </NavLink>
                        <NavLink to={{ pathname: "https://instagram.com" }} target="_blank" className="social-icon">
                            <i className="fab fa-instagram"></i> Instagram
                        </NavLink>
                    </div>
                </div>
                <div className="footer-section newsletter-section">
                    <h3>Subscribe to our Newsletter</h3>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" className="newsletter-input" />
                        <button type="submit" className="newsletter-button">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Temple Name. All rights reserved.</p>
                <p>
                    <NavLink to="/privacy-policy" activeClassName="active">Privacy Policy</NavLink> | 
                    <NavLink to="/terms-of-service" activeClassName="active">Terms of Service</NavLink>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
 
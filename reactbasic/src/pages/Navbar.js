import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        
        
        <div className='navbar'>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={menuOpen ? 'open' : ''}>
                <NavLink to="/" end activeClassName="active" onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" activeClassName="active" onClick={() => setMenuOpen(false)}>About</NavLink>
                <NavLink to="/gallery" activeClassName="active" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
                <NavLink to="/events" activeClassName="active" onClick={() => setMenuOpen(false)}>Events</NavLink>
                <NavLink to="/contact" activeClassName="active" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Main/Header';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './Main/Footer';
import './App.css';
const App = () => {
    const [isSignedIn, setIsSignedIn] =useState(false);
    const [userEmail, setuserEmail] = useState('');

    const handleSignIn =(email) =>{
        setIsSignedIn(true);
        setuserEmail(email);
    };

    const handleLogout =() =>{
        setIsSignedIn(false);
        setuserEmail('');
    };

    return (
        <Router>
            <div>
                <Header />
                <Navbar isSignedIn={isSignedIn} userEmail={userEmail} onLogout={handleLogout} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact onsignIn={handleSignIn}/>} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;

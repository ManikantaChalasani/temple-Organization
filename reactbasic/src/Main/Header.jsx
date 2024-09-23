import React from 'react';

const Header = () => {
    
    return (
        <div>
            <header>
                <div className="scrolling-text">
            
                    <div className="left">
                        <img src="/tem66.jpeg" alt="Bell" />
                    </div>
                    <span className="center-text">Welcome to the Temple of Nagendra Swami</span>
                    <div className="right">
                        <audio controls autoPlay loop>
                            <source src="/nag.mp3" type="audio/mpeg" />
                           
                        </audio>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;

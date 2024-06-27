import React, { useState } from 'react';


const SignInPopup = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            onClose(email);
        }
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Sign In</button>
                </form>
                <button className="btn btn-danger mt-3" onClick={() => onClose(null)}>Close</button>
            </div>
        </div>
    );
};

export default SignInPopup;

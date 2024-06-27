import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [message, setMessage] = useState('');
    const [showUPI, setShowUPI] = useState(false);

    const handleDonateClick = () => {
        setShowUPI(true);
    };

    const handleConfirmation = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/confirm-donation', {
                amount,
                name,
                email,
                transactionId
            });

            console.log('Donation confirmation response:', response);
            setMessage('Donation confirmed! Email receipt sent.');
        } catch (error) {
            console.error('Error confirming donation:', error.response?.data || error.message);
            setMessage('Error confirming donation. Please try again.');
        }
    };

    return (
        <div className="contact">
            <h2>Donate Online</h2>
            {!showUPI ? (
                <button onClick={handleDonateClick}>Donate</button>
            ) : (
                <div>
                    <p>UPI ID: <strong>8688807103@ibl</strong></p>
                    <p>Bank Transfer Details: (Provide your details here)</p>
                    <form onSubmit={handleConfirmation}>
                        <label>
                            Amount:
                            <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Your Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Your Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Transaction ID:
                            <input
                                type="text"
                                value={transactionId}
                                onChange={(e) => setTransactionId(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Confirm Donation</button>
                    </form>
                </div>
            )}
            {message && <p className="message">{message}</p>}
            <br></br>
            <br></br>
            <iframe
                title="Temple Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63896874712873!2d80.9835001142452!3d16.86483496804225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a367028eff3be23%3A0x4e176a5aa3d9e0a!2sShri%20Nagendra%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1719227884759!5m2!1sen!2sin"
                width="auto"
                height="auto"
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>

        </div>
    );
};

export default Contact;

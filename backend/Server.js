const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/confirm-donation', async (req, res) => {
    const { amount, name, email, transactionId } = req.body;

    // Log incoming request for debugging
    console.log('Incoming donation request:', { amount, name, email, transactionId });

    try {
        // Create a transporter object
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'chalasanimanikanta08@gmail.com',
                pass: 'vvux dysm kofp jrrf' 
            }
        });

        // Define the email options
        let mailOptions = {
            from: 'chalasanimanikanta08@gmail.com', 
            to: email, // rec
            subject: 'Donation Receipt - Temple', 
            text: `Thank you for your donation!\n\n
                   Details:\n
                   Amount: ${amount}\n
                   Name: ${name}\n
                   Transaction ID: ${transactionId}\n
                   We appreciate your support!\n
                   Temple Management` 
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Error confirming donation. Please try again.' });
            }
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Donation confirmed! Email receipt sent.' });
        });
    } catch (err) {
        console.error('Unexpected error:', err);
        res.status(500).json({ message: 'Unexpected error. Please try again.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

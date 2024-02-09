const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',  // Your Gmail address
        pass: 'your_password'          // Your Gmail password or App Password
    }
});

// Define email data
const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js using Nodemailer.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

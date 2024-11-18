const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
  origin: 'https://www.kristinstockley.com', // Allow frontend requests
  methods: ['GET', 'POST'],
}));

// Configure the transporter once at the beginning
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});




app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email send error:', error);
      res.status(500).json({ message: 'Error sending email', error });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Form submitted successfully' });
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

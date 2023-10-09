const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: formData.email,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  };

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Form submitted successfully' });
    }
  });
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

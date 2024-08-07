const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'keshavaram2003bsak@gmail.com', 
    pass: 'oqjy khpz xlnt xxoe' 
  }
});

const mailOptions = {
  from: 'keshavaram2003bsak@gmail.com', 
  to: 'keshavbsk7@gmail.com', 
  subject: 'Hello ',
  text: 'This is a simple email sent from a Node.js application using nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});

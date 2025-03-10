var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marisramesh2844@gmail.com',
    pass: 'xrdiyfbpdtggyzto'
  }
});

var mailOptions = {
  from: 'marisramesh2844@gmail.com',
  to: 'amlakshmiarumugam@mepcoeng.ac.in',
  subject: 'Testing mail',
  text: 'I have complete nodemailer program'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
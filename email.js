const express = require('express');
var cors = require('cors');
const {Resend} = require('resend');

const corsOptions ={
    origin:['http://localhost:3000', 'https://aeonaxy-assignment.web.app'], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const resend = new Resend("re_6M8iibuX_McwJMNEuE2dPoVh23Xku5MZf");
// Create an Express app
const app = express();
const port = 5000; 

app.use(express.json());
app.use(cors(corsOptions));

app.post('/send-email', async (req, res) => {
  try {
    const { email } = req.body; // Destructure email from req.body

    // Make a request to the Resend API to send the email
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['adityarane61@gmail.com'], // email is the user's email address
      subject: 'Email Verification',
      html: '<p>Please verify your email.</p>',
    });

    if (error) {
      console.error('Error sending verification email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    } else {
      console.log('Verification email sent:', data);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

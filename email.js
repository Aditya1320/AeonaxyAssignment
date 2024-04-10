// Import necessary modules
const express = require('express');
// const axios = require('axios');
var cors = require('cors');
const {Resend} = require('resend');


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const resend = new Resend("re_6M8iibuX_McwJMNEuE2dPoVh23Xku5MZf");
// Create an Express app
const app = express();
const port = 5000; // Choose a port for your backend server

app.use(express.json());
app.use(cors(corsOptions));
// Define your route to send emails
// app.get('/', async (req, res) => {
//   try {
//     const { email } = req.body; // Assuming the email address is passed in the request body

//     // Make a request to the Resend API to send the email
//     const { data, error } = await resend.emails.send({
//         from: 'Dribbble <onboarding@resend.dev>',
//         to: [email],
//         subject: 'Email Verification',
//         html: '<p>Please verify your email.</p>',
//       });

//     res.json({ success: true, data: response.data });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });
app.post('/send-email', async (req, res) => {
  try {
    const { email } = req.body; // Destructure email from req.body

    // Make a request to the Resend API to send the email
    const { data, error } = await resend.emails.send({
      from: 'email@dribbble.varification.com',
      to: [email], // Assuming userEmail is the user's email address
      subject: 'Email Verification',
      html: '<p>Please verify your email.</p>',
    });

    if (error) {
      console.error('Error sending verification email:', error);
      // Handle error (e.g., display error message to user)
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

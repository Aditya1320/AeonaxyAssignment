// server.js (Node.js backend)

const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
var cors = require('cors');

const corsOptions ={
    origin:['http://localhost:3000', 'https://aeonaxy-assignment.web.app'],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express();
const port = 3013;


// Connect to NeonDB
const connectionString = "postgresql://neondb_owner:xqQMJTzLgO25@ep-jolly-pine-a1fk9tn8.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";
const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});
client.connect();

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/api/checkUsername', async (req, res) => {
    const { username } = req.query;
    try {
      const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
      res.json({ exists: result.rows.length > 0 });
    } catch (error) {
      console.error('Error checking username:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/signup', async (req, res) => {
    const { name, username, email, password } = req.body;
    try {
      // Insert new user into the database
      await client.query('INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4)', [name, username, email, password]);
      res.json({ success: true });
    } catch (error) {
      console.error('Error creating account:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/checkEmail', async (req, res) => {
    const { email } = req.query;
    try {
      const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
      res.json({ exists: result.rows.length > 0 });
    } catch (error) {
      console.error('Error checking email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


// Define API endpoints
app.get('/api/data', async (req, res) => {
  try {
    const retrieveQuery = 'SELECT * FROM test_table';
    const result = await client.query(retrieveQuery);
    res.json(result.rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




require('dotenv').config();
const express = require('express');
const app = express();

// enable CORS 
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Basic CSS Routing
app.use(express.static('public'));

// Basic HTML Routing
app.get('/',  (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

//REQUEST HEADER PARSER
app.get('/api/whoami', (req,res) => {
  res.json({
    "ipaddress" : req.headers['x-forwarded-from'] || "Not available",
    "language" : req.headers['accept-language'] || "Not available",
    "software" : req.headers['user-agent'] || "Not available"
  })
})

// listen for requests :)>
const listener = app.listen(process.env.PORT || 3000,  () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

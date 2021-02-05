require('dotenv').config();
var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const fetch = require('node-fetch'); //added to make fetch requests from the server


projectData = {};

app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}));
// using the generated Dist folder rather than the larger files
app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.get('/api', async (req, res) => {
  userInput = projectData;
  const baseUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${userInput}`;
  console.log(baseUrl);
  const response = await fetch(baseUrl);
  const json = await response.json();
  res.json(json);
  //console.log(json);
});

app.post('/api', (req, res) => {
  projectData = req.body;
  res.send(projectData);
  console.log(projectData);
})
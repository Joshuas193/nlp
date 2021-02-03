projectData = {};

require('dotenv').config();
var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const fetch = require('node-fetch'); //added to make fetch requests from the server side

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

/*GET request using ENV variable for API key
app.get('/api/:chosenUrl', async (req, res) => {
  const chosenUrl = req.params.chosenUrl;
  console.log(chosenUrl);
  const baseUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}`;
  const options = `&lang=auto&URL=${chosenUrl}`;
  const fetch_data = await fetch(baseUrl+options);
  console.log(fetch_data);
  const data = await fetch_data.json();
  res.json(data);
  console.log(data);
}) */

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/api', (req, res) => {
  console.log(req);
  projectData = req.body;
  res.send(projectData);
});
require('dotenv').config();
var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const fetch = require('node-fetch'); //added to make fetch requests from the server

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
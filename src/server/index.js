require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch"); //added to make fetch requests from the server

app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// using the generated Dist folder rather than the larger files
app.use(express.static("dist"));

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

//Making API call and sending back selected data to the client
app.post("/apiData", async (req, res) => {
  const userInput = req.body.userInput;
  const baseUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}`;
  const options = `&lang=en&model=general&url=${userInput}`;
  const apiUrl = baseUrl + options;
  const fetchRes = await fetch(apiUrl);
  const json = await fetchRes.json()
    //console.log(json)
    .then((data) => {
      res.send({
        score_tag: data.score_tag,
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence: data.confidence,
        irony: data.irony,
      });
    });
});

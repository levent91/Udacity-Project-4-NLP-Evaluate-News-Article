var path = require('path')
var express = require('express');
var app = express();
var mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser')
var cors = require('cors');
var aylien = require("aylien_textapi");
var dotenv = require('dotenv');
dotenv.config();
var axios = require('axios');

var textapi = new aylien({ //env key
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(9000, function () {
    console.log("Example app listening on port 9000!")
    console.log("API KEY: "+process.env.API_KEY)
    console.log("API ID: "+process.env.API_ID)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/note', function (req, res) {
    textapi.sentiment({
        url: req.body.articleUrl,
        mode: 'document',
        }, function(error, response) {
            if(error) {
                return res.status(400).json(error);
            }
        return res.status(200).json(response);
        });
});


module.exports = app;

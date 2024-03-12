const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Import body-parser

const app = express();
const apiKey =
  "HYeql2aEZADn067fUtvjL8FzJ3TMWy1R5roPigGVsIBhOQpdwbdrTKlb2Rk4qO95LF8uNy7oj0XmxVfC";

const axios = require("axios");

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure CORS middleware
app.use(cors({ origin: "http://localhost:3000" }));

// Define your POST endpoint for handling SMS requests
app.post("/sms", (req, res) => {
  const phoneNumber = req.body.number;
  const otp = req.body.otp;
    console.log("otp is",otp);
  const message = `your otp is ${otp}`;

  const smsData = {
    // sender_id: "FSTSMS",
    message: message,
    language: "english",
    route: "q",
    numbers: phoneNumber,
  };

  axios
    .post("https://www.fast2sms.com/dev/bulkV2", smsData, {
      headers: {
        Authorization: apiKey,
      },
    })
    .then((response) => {
      console.log("SMS sent", response.data);
      console.log("otp is",otp);

    })
    .catch((error) => {
      console.log("error", error);
    });

  // Handle the SMS request here
});

// Start the server
app.listen(8008, () => {
  console.log("SMS service is listening on port 8008");
});

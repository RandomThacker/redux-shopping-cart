const express = require("express");
const port = 3002;
const app = express();
const uniqid = require("uniqid")

const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_INDEX = 1;
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";

app.get("/", (req, res) => {
  res.send("PhonePe is working");
});

app.get("/pay", (req, res) => {
  const payEndpoint = "/pg/v1/pay";
  const merchantTransactionId = uniqid()
  const merchantUserId = 1234
  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: merchantUserId,
    amount: 10000,//in paise
    redirectUrl: `http://localhost:3002/redirect-url/${merchantTransactionId}`,
    redirectMode: "REDIRECT",
    // callbackUrl: "https://webhook.site/callback-url",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const axios = require("axios");
  const options = {
    method: "post",
    url: `${PHONE_PE_HOST_URL}${payEndpoint}`,
    headers: {
      accept: "text/plain",
      "Content-Type": "application/json",
    },
    data: {},
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

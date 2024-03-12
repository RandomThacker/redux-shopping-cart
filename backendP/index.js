const express = require("express");
const port = 3003;
const app = express();
const uniqid = require("uniqid");
const axios = require("axios");
const sha256 = require("sha256");
const bodyParser = require("body-parser"); // Import body-parser
const cors = require("cors");

let idFromPayData;
let amountFromPayData;

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure CORS middleware
app.use(cors({ origin: "http://localhost:3000" }));


const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_INDEX = 1;
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";

app.get("/", (req, res) => {
  res.send("PhonePe is working");
});

app.post("/paydata", (req, res) => {
  const id = req.body.id;
  const amount = req.body.amount;
  idFromPayData = id;
  amountFromPayData = amount;
  console.log("ID:", id);
  console.log("Amount:", amount);
  // Rest of your code for handling payment
});

app.get("/pay", (req, res) => {
  const payEndpoint = "/pg/v1/pay";
  const merchantTransactionId = uniqid();
  const merchantUserId = idFromPayData;
  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: merchantUserId,
    amount: amountFromPayData*100, //in paise
    redirectUrl: `http://localhost:3003/redirect-url/${merchantTransactionId}`,
    redirectMode: "REDIRECT",
    // callbackUrl: "https://webhook.site/callback-url",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const bufferObj = Buffer.from(JSON.stringify(payload), "utf8");
  const base63EncodedPayload = bufferObj.toString("base64");
  const xVerify =
    sha256(base63EncodedPayload + payEndpoint + SALT_KEY) + "###" + SALT_INDEX;

  const options = {
    method: "post",
    url: `${PHONE_PE_HOST_URL}${payEndpoint}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": xVerify,
    },
    data: {
      request: base63EncodedPayload,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      const url = response.data.data.instrumentResponse.redirectInfo.url
      res.redirect(url);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/redirect-url/:merchantTransactionId", (req, res)=>{
  const {merchantTransactionId} = req.params
  console.log("merchantTransactonId", merchantTransactionId);
  if(merchantTransactionId){
    const xVerify = sha256(`/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + SALT_KEY) + "###" + SALT_INDEX

    const options = {
  method: 'get',
  url: `${PHONE_PE_HOST_URL}/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`,
  headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        "X-MERCHANT-ID": merchantTransactionId,
        "X-VERIFY": xVerify
				},

};
axios
  .request(options)
      .then(function (response) {
        if (response.data && response.data.code === "PAYMENT_SUCCESS") {
          // redirect to FE payment success status page
          res.send(response.data);
        }
        else{
          //redirect to error page.
        }
      console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

    // res.send({merchantTransactionId})
  }
  else
    res.send("Error")
  
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

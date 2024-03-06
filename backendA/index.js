const axios = require("axios")

const apiKey = "HYeql2aEZADn067fUtvjL8FzJ3TMWy1R5roPigGVsIBhOQpdwbdrTKlb2Rk4qO95LF8uNy7oj0XmxVfC"

const message = "your otp is 1234"
const phoneNumber = "7618771547"

const smsData = {
    // sender_id: "FSTSMS",
    message: message,
    language: "english",
    route: "q",
    numbers: phoneNumber
};

axios
.post("https://www.fast2sms.com/dev/bulkV2", smsData, {
    headers:{
        Authorization: apiKey
    }
})
.then(response =>{
    console.log("SMS sent", response.data);
})
.catch(error =>{
    console.log("error",error);
})
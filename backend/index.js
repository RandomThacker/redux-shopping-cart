const express = require("express");
const port = 3002;
const app = express()

app.get("/",(req,res)=>{
    res.send("PhonePe is working")
});

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})
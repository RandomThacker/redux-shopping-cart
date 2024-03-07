const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json());

// Apply CORS middleware before defining routes
app.use(cors({ origin: 'http://localhost:3000' }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "address"
})

app.post("/address", (req, res) => {
    const sql = "INSERT INTO details (`name`, `number`, `pincode`, `add1`, `add2`, `landmark`, `city`, `state`) VALUES ?"; // Corrected SQL query
    const values = [
        [
            req.body.name,
            req.body.number,
            req.body.pincode,
            req.body.add1,
            req.body.add2,
            req.body.landmark,
            req.body.city,
            req.body.state,
        ]
    ];
    db.query(sql, [values], (err, data) => {
        if (err)
            return res.json(err);
        return res.json(data);
    });
});


app.listen(8000, () => {
    console.log("listening...");
});

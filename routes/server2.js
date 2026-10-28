const express = require("express");

const app = express();

const port = 4000;

const logger = require("./logger");

app.use(logger);

app.get("/",(req, res) => {
    res.send("Home page");
})

app.put("/new-id", (req, res) => {
    res.send("Obyektlar yangilandi!")
})



app.listen(port, (err) => {
    if(err) {
        console.error("Server yonmadi", err);
    }else {
        console.log(`http://localhost:${port}`);
    }
})

const express = require("express");

const app = express();
const port = 3000;

app.get("/about",(req, res) => {
    res.json({
        name: "Zafar",
        age: 14
    })
})

app.listen(port, (err) => {
    if(err) {
        console.error("Server yonmadi", err);
    }else {
        console.log(`http://localhost:${port}`);
    }
})

export const handler = ServerlessHttpCopp()
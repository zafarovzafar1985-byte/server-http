const express = require("express");

const app = express();

const port = 4000;

app.get("/",(req, res) => {
    res.send("Asosiy sahifa")
})

app.post("/id",(req, res) => {
    res.json({
        name: "zafar",
        age: 14,
        id: 1
    })
})

app.delete("/delete", (req, res) => {
    res.send("Ma'lumotlar o'chirildi!")
})


app.listen(port, (err) => {
    if(err) {
        console.error("Server yonmadi", err);
    }else {
        console.log(`http://localhost:${port}`);
    }
})
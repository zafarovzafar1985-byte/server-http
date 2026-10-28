import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 4000;
const __dirname = path.resolve();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allUsers = [];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/getProducts", (req, res) => {
    res.json(allUsers);
});

app.post("/signup", (req, res) => {
    const { numbers, username } = req.body;
    const newUser = { numbers, username };
    allUsers.push(newUser);
    res.status(200).send("Ma'lumotlar yuborildi");
});

app.listen(port, () => {
    console.log(`Server ishga tushdi: http://localhost:${port}`);
});
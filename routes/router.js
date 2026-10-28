const experss = require("express");

const app = express();

const port = 4000;

const userRouter = require("./routes/users");

app.use("/freind",freindRouter());

app.use("/family",familyRouter());

app.listen(port, () => {
    console.log("http://localhost:4000")
})
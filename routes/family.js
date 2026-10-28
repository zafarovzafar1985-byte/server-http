const express = require("express")


const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        name: "Zufar",
        surname: "Zafarov",
    })
})

module.exports = router;
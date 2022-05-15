const express = require('express');
const router = express.Router();
const { getTimeZome } = require("../utils/timeZoneFunctions");

router.post("/timeZoneInfo", async(req, res) => {
    const { loc} = req.body;
    if (!loc ) {
        return res.status(400).send("Lipsesc parametrii");
    }

    const timeinfo = await getTimeZome(loc) 
    res.status(200).send(timeinfo);
});

module.exports = router;
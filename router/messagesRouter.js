const { response } = require('express');
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const connection = require('../db');
const {getTimeZome} = require("../utils/timeZoneFunctions");

router.get("/",  (req, res) => {
    connection.query("SELECT * FROM messages", (err, results) => {
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            messages: results,
        })
    })
});

router.get("/:id",  (req, res) => {
    const {id} = req.params;
    connection.query(`SELECT * FROM messages WHERE entryID = ${mysql.escape(id)}`, (err, results) => {
        if(err){
            console.log(err);
            return res.send(err);
        }

        if(!results.length){
            return res.status(400).json({
                error:"Eroare-de negasit"
            })
        }
        return res.json({
            messages: results,
        })
    })
});

router.post("/", (req, res) => {
    console.log(req.body);
    const {
        senderName,
        messageContent,
    } = req.body;

    if(!senderName || !messageContent){
        return res.status(400).json({
            error: "Toate campurile sunt obligatorii"
        })
    }

    connection.query(`INSERT INTO messages (senderName, messageContent) values (${mysql.escape(senderName)}, ${mysql.escape(messageContent)})`, (err, results) => {
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            messages: results,
        })
    })
});

router.delete("/:id", (req, res) => {
    const {id} = req.params;
    connection.query(`DELETE FROM messages WHERE entryID = ${mysql.escape(id)}`, (err, results) => {
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            messages: results,
        })
    })
})

router.put("/:id", (req, res) => {
    const {id} = req.params;
    const {
        senderName,
        messageContent
    } = req.body;

    if(!senderName || !messageContent ){
        return res.status(400).json({
            error: "Toate campurile sunt obligatorii"
        })
    }
    connection.query(`UPDATE messages SET 
    senderName = ${mysql.escape(senderName)}, messageContent = ${mysql.escape(messageContent)}  WHERE entryID = ${mysql.escape(id)}`, (err, results) => {
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            messages: results,
        })
    })
})

router.post("/timeZone", async (req, res) => {
    const { senderName, loc} =
        req.body;

    if (!senderName || !loc) {
        return res.status(400).json({
            error: "Toate campurile sunt obligatorii",
        });
    }

    var timeInfo;
    try {
        timeInfo = await getTimeZome(loc);
        connection.query(
            `INSERT INTO messages (senderName, messageContent) values (${mysql.escape(senderName)}, ${mysql.escape(timeInfo)})`,
            (err, results) => {
                if (err) {
                    console.log(err);
                    return res.send(err);
                }

                return res.json({
                    timeInfo,
                });
            }
        );
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
});

module.exports = router;
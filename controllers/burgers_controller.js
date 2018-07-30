const express = require("express");
const router = express.Router();

const burger = require("../model/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", req.body.burger_name], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = "id = " + req.params.id;
    burger.updateOne({
        devoured: parseInt(req.body.devoured)
    }, id, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    }
    );
});

//export for server.js
module.exports = router;
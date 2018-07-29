const express = require("express");
const router = express.Router();
// Import model to use its database functions.
const burger = require("../model/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        res.json({ id: result.insertId});
        console.log(result.insertId);
    });
});

// router.put("/api/burgers/:id", function(req,res) {
//     var bool = "id = " + req.params.id;
//     console.log("boolean", bool);
//     burger.update(
//         {
//             devoured: req.body.devoured
//         },
//         bool,
//         function(result) {
//             if (result.changedRows === 0) {
//                 return res.status(404).end();
//             }
//             res.status(200).end();
//         }
//     );
// });

//export for server.js
module.exports = router;
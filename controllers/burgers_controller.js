const express = require("express");
const burger = require("../public/models/burger.js");

var router = express.Router();

router.get("/", (req,res) => {
    res.redirect("/api/burgers");
});

router.get("/api/burgers", function(req, res) {
    burger.selectBurger(function(data) {
      var hdbrsObj = {
        burgers: data
      };
      console.log(hdbrsObj);
      res.render("index", hdbrsObj);
    });
});
  
    router.post("/api/burgers", function(req, res) {
      burger.insertBurger(
        ["burgernname", "devoured"],
        [req.body.burgername, req.body.devoured],
        function(result) {
          
          res.json({ id: result.insertId });
        }
      );
    });

    router.put("/api/burgers/:id", function(req, res) {
      var condition = "id = " + req.params.id;
  
      console.log("condition", condition);
      burger.updateBurger({ devoured: req.body.devoured }, condition, function(
        result
      ) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });
  
    router.delete("/api/burgers/:id", function(req, res) {
      var condition = "id = " + req.params.id;
    
      burger.deleteBurger(condition, function(result) {
        if (result.affectedRows == 0) {
          
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });

  
  module.exports = router;
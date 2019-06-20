const express = require("express");
const router = express.Router();
const { Item } = require("../models/index");
const authenticatedUser = require("../utils/authenticatedUser");

router.get("/", authenticatedUser, function(req, res) {
  Item.find({})
    .sort({ priority: "asc" })
    .then(items => {
      res.render("index", { items, success: req.flash("success") });
    });
});

router.use(require("./user"));

router.use("/item", authenticatedUser, require("./item.js"));

module.exports = router;

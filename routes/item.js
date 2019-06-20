const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");

router.get("/new", itemController.new);
router.post("/", itemController.create);
router.get("/:id", itemController.show);
router.get("/:id/edit", itemController.edit);
router.put("/:id", itemController.update);
router.delete("/:id", itemController.delete);

module.exports = router;

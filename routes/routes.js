var express = require("express");

var router = express.Router();

var burgers_controller = require("../controllers/burgers_controller");

router.get("/", burgers_controller.index);

router.post("/api/burgers", burgers_controller.createBurger);

router.put("/api/burgers/:id", burgers_controller.updateBurger);

// Export routes for server.js to use.
module.exports = router;

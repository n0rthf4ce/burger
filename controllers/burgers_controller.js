var burger = require("../models/burger");

module.exports = {
  index: function (req, res) {
    burger.allBurgers(function (data) {
      res.render("index", { burgers: data });
    });
  },

  createBurger: function (req, res) {
    burger.insertBurger(req.body.name, function (result) {
      console.log(result);
      res.json({ id: result.insertId });
    });
  },

  updateBurger: function (req, res) {
    burger.devour(req.params.id, function (result) {
      console.log(result);
      res.json({ id: result.insertId });
    });
  }
}

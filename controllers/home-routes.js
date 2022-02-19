const router = require("express").Router();
const { User, Recipe, Comments } = require("../models");
module.exports = router;

router.get("/", async (req, res) => {
    try {
      res.render("dashboard")
    } catch (err) {
      res.sendStatus(500).send(err);
    }
});
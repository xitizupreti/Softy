const express = require("express");
const router = express.Router();

// Routes
router.get("", (req, res) => {
  const locals = {
    title: "Home",
    description: "Welcome to our homepage",
  };
  res.render("index", { locals });
});
router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

module.exports = router;

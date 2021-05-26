const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Boats = require("../../models/Boats");
const User = require("../../models/User");

router.get("/boats/user", auth, (req, res) => {
  try {
    const boats = await Boats.find().sort({ date: -1 });
    res.json(boats);
  } catch (err) {
    console.error(err.meassge);
    res.status(500).send("Server Error");
  }
});

router.get("/boats/", (req, res) => {
  try {
    const boats = await Boats.find().sort({ date: -1 });
    res.json(boats);
  } catch (err) {
    console.error(err.meassge);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  auth,
  [
    check("make", "Please provide a make").not().isEmpty(),
    check("model", "Please provide a model").not().isEmpty(),
    check("name", "Please provide a name").not().isEmpty(),
    check("length", "Please provide a length").not().isEmpty(),
    check("rate", "Please provide a rate").not().isEmpty(),
  ],
  (req, res) => {
    try {
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
    res.send("Boats route");
  },
);

module.exports = router;

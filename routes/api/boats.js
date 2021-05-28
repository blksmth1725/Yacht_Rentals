const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Boats = require("../../models/Boats");
const User = require("../../models/User");

router.post(
  "/",
  [
    auth,
    [
      check("make", "Please provide a make").not().isEmpty(),
      check("model", "Please provide a model").not().isEmpty(),
      check("name", "Please provide a name").not().isEmpty(),
      check("length", "Please provide a length").not().isEmpty(),
      check("rate", "Please provide a rate").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { make, model, name, length, rate } = req.body;

    // Build boat object
    const boatsFields = {};
    boatsFields.user = req.user.id;
    if (make) boatsFields.make = make;
    if (model) boatsFields.model = model;
    if (name) boatsFields.name = name;
    if (length) boatsFields.length = length;
    if (rate) boatsFields.rate = rate;

    try {
      let boat = await Boats.findOne({ user: req.user.id });

      if (boat) {
        // Update
        boat = await Boats.findOneAndUpdate(
          { user: req.user.id },
          { $set: boatsFields },
          { new: true },
        );

        return res.json(boat);
      }

      // Create
      boat = new Boats(boatsFields);

      await boat.save();
      res.json(boat);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
);

router.get("/", async (req, res) => {
  try {
    if (!boats) {
      res.status(400).json({ msg: "No boats avilable" });
    }
    const boats = await Boats.find().sort({ date: -1 });
    res.json(boats);
  } catch (err) {
    console.error(err.meassge);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

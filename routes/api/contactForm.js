const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route POST api/contactform
// @desc Post data from ContactForm
// @access public

router.post(
  "/",
  [
    check("name", "Please provide us with your name").not().isEmpty(),
    check("email", "Please provude us with your email").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("Contact Form route");
  },
);

module.exports = router;

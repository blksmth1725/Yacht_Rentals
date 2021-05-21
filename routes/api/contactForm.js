const express = require("express");
const router = express.Router();

// @route GET api/contactform
// @desc Test Route
// @access public

router.get("/", (req, res) => res.send("Contact Form route"));

module.exports = router;

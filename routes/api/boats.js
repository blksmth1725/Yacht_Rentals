const express = require("express");
const router = express.Router();

// @route GET api/boats
// @desc Test Route
// @access public

router.get("/", (req, res) => res.send("Boats route"));

module.exports = router;

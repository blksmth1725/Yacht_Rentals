const express = require("express");
const router = express.Router();

// @route POST api/boats
// @desc Post Boat Information
// @access public

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Boats route");
});

module.exports = router;

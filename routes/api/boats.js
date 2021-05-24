const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route POST api/boats
// @desc Post Boat Information
// @access public

//  make: {
//     type: String,
//   },
//   model: {
//     type: String,
//   },
//   name: {
//     type: String,
//   },
//   length: {
//     type: Number,
//   },
//   rate: {
//     type: Number,
//   },
//   addOns: [
//     {
//       jetski: {
//         type: Number,
//       },
//       kayak: {
//         type: Number,
//       },
//       alcohol: {
//         type: Number,
//       },
//       food: {
//         type: Number,
//       },
//       cake: {
//         type: Number,
//       },
//     },
//   ],
//   maxCapacity: {
//     type: Number,
//   },
//   images: {
//     type: [String],
//   },
//   description: {
//     type: String,
//   },
// });

router.post(
  "/",
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

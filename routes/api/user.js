const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

//@route     POST api/users
//@desc      Register user
//@access    Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters",
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if User exists
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }
      // Creation of user INSTANCE (NOT SAVED YET)
      user = new User({
        name,
        email,
        // Password NOT encrypted
        password,
      });
      // Encrypt Password
      const salt = await bcrypt.genSalt(10);

      user.passowrd = await bcrypt.hash(password, salt);

      // NOW User is saved
      await user.save();

      // Return jsonWebToken
      // Create payload variable that defines the users ID
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Sign the JWT using the Payload as well as a locally created/hardcoded secret
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        },
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
);

module.exports = router;

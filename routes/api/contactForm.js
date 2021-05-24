const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const ContactForm = require("../../models/ContactForm");

// @route POST api/contactform
// @desc Post data from ContactForm
// @access public

router.post(
  "/",
  [
    check("name", "Please provide us with your name").not().isEmpty(),
    check("email", "Please provude us with your email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, date, description } = req.body;

    try {
      const newContactForm = new ContactForm({
        name: name,
        email: email,
        phone: phone,
        date: date,
        description: description,
      });

      const contactForm = await newContactForm.save();

      res.json(contactForm);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }

    res.send("Contact Form route");
  },
);

//@route     GET api/profile/
//@desc      Get all contactForms
//@access    Private

router.get("/", async (req, res) => {
  try {
    const contactForm = await ContactForm.find().populate("contactForm", [
      "name",
      "email",
      "phone",
      "date",
      "description",
    ]);
    res.json(contactForm);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;

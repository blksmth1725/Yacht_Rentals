const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
});

module.exports = ContactForm = mogoose.model("contactForm", ContactFormSchema);

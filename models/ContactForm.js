const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
});

module.exports = ContactForm = mongoose.model("contactForm", ContactFormSchema);

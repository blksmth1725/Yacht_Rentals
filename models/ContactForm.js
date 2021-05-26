const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactFormSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ContactForm = mongoose.model("contactForm", ContactFormSchema);

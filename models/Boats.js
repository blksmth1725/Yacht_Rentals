const mongoose = require("mongoose");

const BoatSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  addOns: [
    {
      jetski: {
        type: Number,
        required: true,
      },
      kayak: {
        type: Number,
        required: true,
      },
      alcohol: {
        type: Number,
        required: true,
      },
      food: {
        type: Number,
        required: true,
      },
      cake: {
        type: Number,
        required: true,
      },
    },
  ],
  maxCapacity: {
    type: Number,
  },
  images: {
    type: [String],
  },
  description: {
    type: String,
  },
});

module.exports = Boat = mongoose.model("boat", BoatSchema);

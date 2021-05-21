const mongoose = require("mongoose");

const BoatSchema = new mongoose.Schema({
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  name: {
    type: String,
  },
  length: {
    type: Number,
  },
  rate: {
    type: Number,
  },
  addOns: [
    {
      jetski: {
        type: Number,
      },
      kayak: {
        type: Number,
      },
      alcohol: {
        type: Number,
      },
      food: {
        type: Number,
      },
      cake: {
        type: Number,
      },
    },
  ],
  maxCapacity: {
    type: Number,
  },
  images: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = User = mongoose.model("user", BoatSchema);

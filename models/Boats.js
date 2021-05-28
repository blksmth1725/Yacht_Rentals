const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoatSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
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
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  addOns: [
    {
      jetski: {
        type: String,
      },
      kayak: {
        type: String,
      },
      alcohol: {
        type: String,
      },
      food: {
        type: String,
      },
      cake: {
        type: String,
      },
    },
  ],
  maxCapacity: {
    type: String,
  },
  images: {
    type: [String],
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Boat = mongoose.model("boat", BoatSchema);

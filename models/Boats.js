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

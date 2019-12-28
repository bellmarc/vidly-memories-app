const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookingSchema = new Schema({
  location: {
    type: String,
    description: String,
    required: true
  },
  imgURL: String,
  price: {
    type: Number,
    required: true,
    default: 250
  },
  bookingSlot: {
    type: Object,
    isAvailable: Boolean,
    startDate: Date,
    endDate: Date,
    required: true
  },
  proId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    // unique: true
  }
});

module.exports = mongoose.model("Booking", bookingSchema);

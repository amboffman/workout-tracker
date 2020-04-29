const mongoose = require("mongoose");

const CardioSchema = new.mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
    required: "A name is Required",
  },
  number: {
    type: Number,
    required: true,
    min: 1,
  }
  
})

const CardioWorkout = mongoose.model("Cardio", CardioSchema);

module.exports = CardioWorkout;
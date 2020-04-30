const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    trim: true,
    required: true,
    required: "A name is Required",
  },
  duration: {
    type: Number,
    required: true,
    min: 1,
  },
  distance: {
    type: Number,
    required: true,
    min: 1,
  }
  
})

const CardioExercise = mongoose.model("Cardio", CardioSchema);

module.exports = CardioExercise;
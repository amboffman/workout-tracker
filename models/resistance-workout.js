const mongoose = require("mongoose");

const ResistanceSchema = new.mongoose.Schema({
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
  weight: {
    type: Number,
    required: true,
    min: 1,
  },
  sets: {
    type: Number,
    required: true,
    min: 1,
  },  
  reps: {
    type: Number,
    required: true,
    min: 1,
  },
  duration: {
    type: Number,
    required: true,
    min: 1,
  }
  
})

const ResistanceWorkout = mongoose.model("Resistance", ResistanceSchema);

module.exports = ResistanceWorkout;
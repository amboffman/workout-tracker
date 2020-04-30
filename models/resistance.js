const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
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
 weight: {
    type: Number,
    required: true,
    min: 1,
  },
   reps: {
    type: Number,
    required: true,
    min: 1,
  },
  sets: {
    type: Number,
    required: true,
    min: 1,
  }
  
})

const ResistanceExercise = mongoose.model("Resistance", ResistanceSchema);

module.exports = ResistanceExercise;
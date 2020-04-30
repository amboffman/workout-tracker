const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    },

  ]
  
})

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
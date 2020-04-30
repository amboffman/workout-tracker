const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cardio"
    },
    {
      type: Schema.Types.ObjectId,
      ref: "Resistance"
    }
  ],
  number: {
    type: Number,
    required: true,
    min: 1,
  }
  
})

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
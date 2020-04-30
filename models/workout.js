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

  ],
totalDuration: Number
})

WorkoutSchema.methods.durationCalc = function(data){
this.totalDuration = this.aggregate(
{
  totalDuration: {$sum: "$exercises.duration"}
}
)
};

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
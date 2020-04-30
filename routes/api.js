const router = require("express").Router();

// TODO: import required model/s
const db = require("../models");

// TODO: and add code to the routes so that the app functions correctly

router.post("/api/workouts", (req, res) => {
db.Workout.create({})
.then((workout) => res.json(workout))
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
      req.params.id,{ 
        $push: { exercises: req.body } 
      })
      .then((workout) => {
    res.json(workout);
  })
  .catch((err) => {
    res.json(err);
  });

})

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $set: {
        totalDuration: {$sum: "$exercises.duration"}
      }
    }
  ])
  .then((dbWorkout) => {

    res.json(dbWorkout);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {});

router.delete("/api/workouts", (req, res) => {});

module.exports = router;

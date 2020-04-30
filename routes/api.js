const router = require("express").Router();

// TODO: import required model/s
const db = require("../models");

// TODO: and add code to the routes so that the app functions correctly

router.post("/api/workouts", (req, res) => {
console.log(req.body)

});

router.put("/api/workouts/:id", (req, res) => {});

router.get("/api/workouts", (req, res) => {});

router.get("/api/workouts/range", (req, res) => {});

router.delete("/api/workouts", (req, res) => {});

module.exports = router;

const router = require("express").Router();

const db = require("../models");

// no method specified it's a get

router.get("/api/workouts", function (req, res) {
    db.Workout.find().then(results => {
        res.json(results);
    });
});

router.put("/api/workouts/:id", function (req, res) {
    db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } }).then(results => {
        res.json(results);
    });
});

router.post("/api/workouts", function (req, res) {
    db.Workout.create(req.body).then(results => {
        res.json(results);
    });
});

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find().then(results => {
        res.json(results)
    });
});

module.exports = router;
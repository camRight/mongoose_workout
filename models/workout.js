const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// first property day
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate()),
    },
    exercises: Array
}, {
    toJSON: {
        virtuals: true
    }
})

workoutSchema
    .virtual('totalDuration')
    .get(function () {
        const exercisesArray = this.exercises
        let duration = 0;
        exercisesArray.forEach(workout => {
            duration = duration + workout.duration
        });
        return duration;
    })



const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;
const router = require("express").Router();
const db = require("../models");

// Get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Get all workouts within a range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Find a specific workout
router.get("/api/workouts/:id", (req, res) => {
    db.Workout.find({ id : req.params.id})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Create a new workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id"), ({body, params}, res) => {
    db.Workout.findByIdAndUpdate(params.id , 
        { $push: { exercises: body } }, 
        { new: true , runValidators: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
}

// router.put("/api/workouts/:id"), function (req, res) {
//     db.Workout.findOneAndUpdate({ id: req.params.id }, { $push: { exercises: req.body } }, { new: true }).then(dbWorkout => {
//         res.json(dbWorkout);
//     }).catch(err => {
//         res.json(err);
//     });

// }


// router.put("/api/workouts/:id", function (req, res) {

//     db.Workout.create(req.body)
//     .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });

//     // db.Workout.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function (dbWorkout) {
//     //     res.json(dbWorkout);
//     // });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


module.exports = router;

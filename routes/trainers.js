var express = require("express")
var router = express.Router();
var trainerServices = require("../services/trainerServices")
var Trainer = require("../models/trainer")
var validation = require("../services/validationServices")


router.get('/', function (req, res, next) {
    trainerServices.addAllTrainers().then((result) => {
        res.render("CCB_Trainers-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Trainers Table", trainersArray: { data: result } })
    })


})


router.post('/', function (req, res, next) {
    let aTrainer = new Trainer(null, validation.stringValidation(req.body.fname), validation.stringValidation(req.body.lname), validation.stringValidation(req.body.subject))
    trainerServices.insertTrainer(aTrainer).then((result) => {
        if (result.affectedRows == 1) {
            trainerServices.addAllTrainers().then((result) => {
                res.render("CCB_Trainers-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Trainers Table", trainersArray: { data: result } })
            })

        }
    })
})




router.get('/delete/:id', function (req, res, next) {
    trainerServices.deleteTrainer(req.params.id).then((result) => {
        if (result.affectedRows == 1) {
            trainerServices.addAllTrainers().then((result) => {
                res.render("CCB_Trainers-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Trainers Table", trainersArray: { data: result } })
            })
        }

    })
})




router.get('/update/:id', function (req, res, next) {
    console.log(req.params.id)
    trainerServices.readTrainerById(req.params.id).then((result) => {
        if (result.id == req.params.id) {
            // console.log(result)
            res.render("CCB_Trainers-Edit", { title: 'Cube Coding Bootcamp', result })
        }
    })
})



router.post('/update', function (req, res, next) {
    let trainer = new Trainer(req.body.id, validation.stringValidation(req.body.fname), validation.stringValidation(req.body.lname), validation.stringValidation(req.body.subject))
    trainerServices.updateTrainer(trainer).then((result) => {
        console.log(result)
        if (result.affectedRows == 1) {
            trainerServices.addAllTrainers().then((result) => {
                res.render("CCB_Trainers-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Trainers Table", trainersArray: { data: result } })
            })
        }

    })

})











module.exports = router
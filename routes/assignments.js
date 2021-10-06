var express = require("express")
const Assignment = require("../models/assignment")
var router = express.Router()
var assignmentServices = require("../services/assignmentServices")
var validation = require("../services/validationServices")


router.get("/", function (req, res, next) {
    assignmentServices.getAllAssignments().then((result) => {
        res.render("CCB_Assignments-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Assignments Table", assignmentsArray: { data: result } })
    })
})



router.post('/', function (req, res, next) {
    var aAssignment = new Assignment(null, validation.stringWithNumbers(req.body.title), req.body.description, validation.oralMarkVal(req.body.maxOralMark), validation.totalMarkVal(req.body.maxTotalMark), req.body.subTime)
    assignmentServices.insertAssignment(aAssignment).then((result) => {
        if (result.affectedRows == 1) {
            assignmentServices.getAllAssignments().then((result) => {
                res.render("CCB_Assignments-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Assignments Table", assignmentsArray: { data: result } })
            })
        }
    })
})


router.get("/delete/:id", function (req, res, next) {
    assignmentServices.deleteAssignment(req.params.id).then((result) => {
        if (result.affectedRows == 1) {
            assignmentServices.getAllAssignments().then((result) => {
                res.render("CCB_Assignments-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Assignments Table", assignmentsArray: { data: result } })
            })
        }
    })
})


router.get("/update/:id", function (req, res, next) {
    assignmentServices.readAssignmentBy(req.params.id).then((result) => {
        if (req.params.id = result.id) {
            res.render('CCB_Assignments-Edit', { title: 'Cube Coding Bootcamp', result })
        }
    })

})



router.post('/update', function (req, res, next) {
    var upAssignment = new Assignment(req.body.id, validation.stringWithNumbers(req.body.title), req.body.description, validation.oralMarkVal(req.body.maxOralMark), validation.totalMarkVal(req.body.maxTotalMark), req.body.subTime)
    assignmentServices.updateAssignment(upAssignment).then((result) => {
        if (result.affectedRows == 1) {
            assignmentServices.getAllAssignments().then((result) => {
                res.render("CCB_Assignments-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Assignments Table", assignmentsArray: { data: result } })
            })

        }
    })
})








module.exports = router
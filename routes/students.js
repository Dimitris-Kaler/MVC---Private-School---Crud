var express = require('express');
var router = express.Router();
var studentServices = require('../services/studentServices')
var Student = require("../models/student")
var validation = require("../services/validationServices")


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



router.get('/', function (req, res, next) {
    studentServices.getAllStudents().then((result) => {
        res.render('CCB_Students-Form', { title: 'Cube Coding Bootcamp', tableTitle: "Students Table", studentsArray: { data: result } })
    })
})

router.post("/", function (req, res, next) {
    console.log(req.body)
    let aStudent = new Student(null, validation.stringValidation(req.body.fname), validation.stringValidation(req.body.lname), req.body.bday, validation.tuitionFeeVal(req.body.tuitionFee))
    // console.log(aStudent)
    studentServices.insertStudent(aStudent).then((result) => {
        if (result.affectedRows == 1) {
            studentServices.getAllStudents().then((result) => {
                res.render('CCB_Students-Form', { title: 'Cube Coding Bootcamp', tableTitle: "Students Table", studentsArray: { data: result } })
            })

        }
        // res.render("'CCB_Students-Form'",{ tableTitle: "Students Table",studentsArray:{data:result}})
    })
})


router.get('/delete/:id', function (req, res, next) {
    studentServices.deleteStudent(req.params.id).then((result) => {
        if (result.affectedRows == 1) {
            studentServices.getAllStudents().then((result) => {
                res.render('CCB_Students-Form', { title: 'Cube Coding Bootcamp', tableTitle: "Students Table", studentsArray: { data: result } })

            })
        }

    })
})



router.get('/update/:id', function (req, res, next) {
    studentServices.readStudentById(req.params.id).then((result) => {
        if (result.id = req.params.id) {
            console.log(result)
            res.render("CCB_Students-Edit", { title: 'Cube Coding Bootcamp', result })
        }
    })
})


router.post('/update', function (req, res, next) {
    let astudent = new Student(req.body.id, validation.stringValidation(req.body.fname), validation.stringValidation(req.body.lname), req.body.bday, validation.tuitionFeeVal(req.body.tuitionFee))
    studentServices.updateStudent(astudent).then((result) => {
        console.log(result)
        if (result.affectedRows == 1) {
            studentServices.getAllStudents().then((result) => {
                res.render("CCB_Students-Form", { title: 'Cube Coding Bootcamp', tableTitle: "Students Table", studentsArray: { data: result } })
            })
        }


    })
})













module.exports = router;
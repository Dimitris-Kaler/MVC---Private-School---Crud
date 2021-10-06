var express = require("express")
var router = express.Router()
var courseServices = require("../services/courseServices")
var Course = require("../models/course")
var validation = require("../services/validationServices")




router.get('/', function (req, res, next) {
    courseServices.getAllCourses().then((result) => {
        res.render('CCB_Courses-Form', { title: 'Cube Coding Bootcamp', tableTitle: "Course Table", coursesArray: { data: result } })
    })
})


router.post('/', function (req, res, next) {
    console.log(req.body)
    let course = new Course(null, validation.stringWithNumbers(req.body.title), validation.stringValidation(req.body.stream), req.body.type, req.body.startDate, req.body.endDate)
    courseServices.insertCourse(course).then((result) => {
        if (result.affectedRows == 1) {
            courseServices.getAllCourses().then((result) => {
                res.render('CCB_Courses-Form', { title: 'Cube Coding Bootcamp', tableTitle: "Course Table", coursesArray: { data: result } })
            })
        }


    })
})


router.get("/delete/:id", function (req, res, next) {
    courseServices.deleteCourse(req.params.id).then((result) => {
        if (result.affectedRows == 1) {
            courseServices.getAllCourses().then((result) => {
                res.render('CCB_Courses-Form', { title: 'Cube Coding Bootcamp', tableTitle: "Course Table", coursesArray: { data: result } })
            })
        }
    })

})


router.get('/update/:id', function (req, res, next) {
    courseServices.readCourseById(req.params.id).then((result) => {
        if (result.id == req.params.id) {
            console.log(result.type)
            res.render('CCB_Courses-Edit', { title: 'Cube Coding Bootcamp', result })
        }
    })
})

router.post('/update', function (req, res, next) {
    let aCourse = new Course(req.body.id, validation.stringWithNumbers(req.body.title), validation.stringValidation(req.body.stream), req.body.type, req.body.startDate, req.body.endDate)
    courseServices.updateCourse(aCourse).then((result) => {
        if (result.affectedRows == 1) {
            courseServices.getAllCourses().then((result) => {
                res.render('CCB_Courses-Form', { title: 'Cube Coding Bootcamp', tableTitle: "Course Table", coursesArray: { data: result } })
            })
        }

    })
})






module.exports = router
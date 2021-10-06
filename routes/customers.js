var express = require("express")
const Customer = require("../models/customer")
var router = express.Router()
var customerServices = require("../services/customerServices")
var validation = require("../services/validationServices")



router.get("/", function (req, res, next) {
    customerServices.getAllCustomers().then((result) => {
        res.render("CCB_Customers-Table", { title: 'Cube Coding Bootcamp', tableTitle: "Customers Table", customersArray: { data: result } })
    })
})



router.post('/', function (req, res, next) {
    acustomer = new Customer(null, validation.stringValidation(req.body.first_name), validation.stringValidation(req.body.last_name), validation.phoneVal(req.body.telephone), req.body.description)
    customerServices.insertCustomer(acustomer).then((result => {
        if (result.affectedRows == 1) {
            customerServices.getAllCustomers().then((result) => {
                res.render('CCB_Customers-Table', { title: 'Cube Coding Bootcamp', tableTitle: "Customers Table", customersArray: { data: result } })
            })

        }
    }))
})



router.get("/delete/:id", function (req, res, next) {
    customerServices.deleteCustomer(req.params.id).then((result) => {
        if (result.affectedRows == 1) {
            customerServices.getAllCustomers().then((result) => {
                res.render("CCB_Customers-Table", { title: 'Cube Coding Bootcamp', tableTitle: "Customers Table", customersArray: { data: result } })
            })
        }
    })
})








module.exports = router
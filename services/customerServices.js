var mysql = require("mysql2")
const dbHost = require("../credentials/credentials.js")
// var dbHost = {
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "cube_coding_bootcamp"
// }




async function conDb(sql) {
    var con = mysql.createConnection(dbHost)
    let promise = new Promise((resolve, reject) => {
        con.connect(function (error) {
            if (error) throw error;
            console.log("You Are Connected With My Sql Server")
            con.query(sql, function (err, result, fields) {
                if (err) throw err
                console.log(result)
                resolve(result)
            })
            con.end(function (ee) {
                if (ee) throw ee
                console.log("Connection Ended")
            })
        })
    })
    let result = await promise
    return result
}



async function getAllCustomers() {
    var sql = `SELECT * FROM customers`
    let result = await conDb(sql)
    return result
}


async function insertCustomer(customer) {
    // var sql = `INSERT INTO students(first_name,Last_name,date_of_birth,tuition_fees) VALUES ('${student.first_name}','${student.Last_name}',STR_TO_DATE('${student.date_of_birth}',"%m-%d-%y"),${student.tuition_fees});`
    var sql = `INSERT INTO customers(first_name,last_name,telephone,description) VALUES ('${customer.first_name}','${customer.last_name}',${customer.telephone},'${customer.description}');`
    let result = await conDb(sql)
    return result
}




async function deleteCustomer(id) {
    var sql = `DELETE FROM customers WHERE id=${id}`
    let result = await conDb(sql)
    return result
}








module.exports = { getAllCustomers, insertCustomer, deleteCustomer }
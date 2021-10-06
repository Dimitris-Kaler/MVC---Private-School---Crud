


function stringValidation(value) {
    let regex = /^[a-zA-Z ]*$/
    var result = regex.test(value)
    //console.log(result)
    if (result) {
        return value
    } else { throw new Error("Invalid Data Please Try Again!!") }
}


function stringWithNumbers(value) {
    let regex = /^[a-zA-Z0-9, ]*$/
    var result = regex.test(value)
    if (result) {
        return value
    } else { throw new Error("Invalid Data At Title Please Try Again!!") }
}


function oralMarkVal(value) {
    if (value < 0 || value > 20) {
        throw new Error("Invalid Data Try Again!!")
    }
    else {
        return value
    }
}


function totalMarkVal(value) {
    if (value < 0 || value > 100) {
        throw new Error("Invalid Data Try Again!!")
    }
    else {
        return value
    }
}


function tuitionFeeVal(value) {
    if (value < 200 || value > 4000) {
        throw new Error("Invalid Data Please Try Again!!")
    }
    else {
        return value
    }
}

function phoneVal(value) {
    let regex = /^[0-9]{9,15}$/
    var result = regex.test(value)
    if (result) {
        return value
    } else { throw new Error("Invalid Data Please Try Again!!") }
}


// function changeDateFormat(date){
//     let yyyy=date.getFullYear();
//     let mm=date.getMonth();
//     let dd=date.getDate()
//     // let hh=date.getHours();
//     // let mm = date.getMinutes()
//     // let ss=date.getSeconds()
//     return `${mm}-${dd}-${yyyy}`
// }






module.exports = { stringValidation, stringWithNumbers, oralMarkVal, totalMarkVal, tuitionFeeVal, phoneVal }
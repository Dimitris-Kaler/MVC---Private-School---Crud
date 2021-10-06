$(document).ready(function () {
    $("#table-courses").DataTable();
});




//***DISPLAY EDIT HIDDEN FORM AND CHANGE THE BUTTONS *****/

//***DECLARE VARIABLES****//

//***form ****//
const form = document.querySelector("#coursesForm");


//*****VARIABLES FOR BUTTONS ******/

let submitBtn = document.getElementById("submitBtn");
let editBtn = document.getElementById("editBtn");
let deleteRow = document.getElementsByClassName("deleteRef")
let confirmDel = document.getElementsByClassName("modalConfirm")[0]
let addBtn = document.getElementById("addBtn")




//******VARIABLES FOR INPUTS ********/
let courseTitle = document.querySelector("#title");
let startDate = document.getElementById("start-date");
let endDate = document.getElementById("end-date");
let courseType = document.getElementById("type-of-course");
let courseStream = document.getElementById("stream");

//**for text-errors ****//
let courseTitleError = document.getElementsByClassName("error-message")[0];
// let editCourseError = document.getElementsByClassName("error-message")[1];
let courseStreamError = document.getElementsByClassName("error-message")[1];
let courseTypeError = document.getElementsByClassName("error-message")[2]
let startDateError = document.getElementsByClassName("error-message")[3];
let endDateError = document.getElementsByClassName("error-message")[4];
//FOR FORM HEADING
let heading = document.getElementsByClassName("form-heading")[0]



function reset() {
    courseTitleError.innerHTML = "";
    courseStreamError.innerHTML = "";
    startDateError.innerHTML = "";
    endDateError.innerHTML = "";
    courseTypeError.innerHTML = "";
    courseTitle.value = "";
    startDate.value = "";
    endDate.value = "";
    courseStream.value = "";
    courseType.value = "Choose type of the course";
    courseTitle.style.border = "none";
    startDate.style.border = "none";
    endDate.style.border = "none";
    courseStream.style.border = "none"
}



//FUNCTION TO SHOW THE ADDFORM


addForm = () => {
    form.classList.toggle("flex-display");
    addBtn.classList.toggle("btn-success")
    reset()
}


addBtn.addEventListener("click", addForm)

//********TO DELETE SPECIFIC ROW WITH MODAL******* */
for (let i in deleteRow) {
    deleteRow[i].onclick = function (event) { confirmDel.href = event.target.href }

}

//*******FORM VALIDATION*********//


form.addEventListener("submit", (event) => {
    var titleRegex = /^[a-zA-Z0-9]*$/
    var streamRegex = /^[a-zA-Z]*$/

    /******VALIDATION OF THE FORM WHEN WE ARE IN EDITMODE*****/

    function titleValidation() {
        var result1 = titleRegex.test(courseTitle.value)
        if (courseTitle.value == "") {
            courseTitle.style.borderBottom = "4px solid red";
            courseTitleError.innerHTML = "*Course Title is required";
        } else
            if (result1) {
                courseTitle.style.borderBottom = "4px solid green";
                courseTitleError.innerHTML = "";
            } else {
                courseTitle.style.borderBottom = "4px solid red";
                courseTitleError.innerHTML = "*Wrong Data please try again";
            }
    }

    function datesValidation() {
        //***VALIDATIONS OF DATES ******//
        let eDate = endDate.value//.split(/\//).reverse().join('/');
        let sDate = startDate.value

        //***VALIDATION OF START DATE******//
        if (sDate == "") {
            startDate.style.borderBottom = "4px solid red";
            startDateError.innerHTML = "*Start Date is required";
        }
        if (sDate.length > 0 && sDate > eDate) {
            startDate.style.borderBottom = "4px solid red";
            startDateError.innerHTML = "*Start Date must be less than End Date";
        }
        if (sDate.length > 0 && sDate < eDate) {
            startDate.style.borderBottom = "4px solid green";
            startDateError.innerHTML = "";
        }
        //***VALIDATION OF END DATE******//

        if (eDate == "") {
            endDate.style.borderBottom = "4px solid red";
            endDateError.innerHTML = "*End Date is required";
        }
        if (eDate.length > 0 && eDate < sDate) {
            endDate.style.borderBottom = "4px solid red";
            endDateError.innerHTML = "*End Date must be greater than Start Date!!";
        }
        if (eDate.length > 0 && eDate > sDate) {
            endDate.style.borderBottom = "4px solid green";
            endDateError.innerHTML = "";
        }
    }

    function streamValidation() {
        var result2 = streamRegex.test(courseStream.value)
        if (courseStream.value == "") {
            courseStream.style.borderBottom = "4px solid red";
            courseStreamError.innerHTML = "*Stream is required"
        } else
            if (result2) {
                courseStream.style.borderBottom = "4px solid green";
                courseStreamError.innerHTML = ""
            }
            else {
                courseStream.style.borderBottom = "4px solid red";
                courseStreamError.innerHTML = "*Wrong Data please try again";
            }

    }

    function typeValidation() {
        if (courseType.value == "Choose type of the course") {
            courseTypeError.innerHTML = "*Course-Type is required"

        }
        else {
            courseTypeError.innerHTML = ""
        }
    }

    titleValidation()
    datesValidation()
    streamValidation()
    typeValidation()


    if (courseTitleError.innerHTML.length > 0 || startDateError.innerHTML.length > 0 || endDateError.innerHTML.length > 0 || courseType.value == "Choose type of the course") {
        event.preventDefault();
    }
}



)

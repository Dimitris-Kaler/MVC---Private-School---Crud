$(document).ready(function () {
    $("#table-assign").DataTable();
});

/*******ASSIGNMENTS FORM **********/


//***DECLARE VARIABLES****//

//***form ****//
const form = document.querySelector("form");

//*****VARIABLES FOR BUTTONS ******/
let addBtn = document.getElementById("addBtn")
let submitBtn = document.getElementById("submitBtn");
let deleteRow = document.getElementsByClassName("deleteRef")
let confirmDel = document.getElementsByClassName("modalConfirm")[0]



//******VARIABLES FOR INPUTS ********/
let title = document.querySelector("#assignment-title");
let submissionDate = document.querySelector("#submission-date");
let oralMark = document.forms["assignmentForm"][3];
let totalMark = document.forms["assignmentForm"][4];
console.log(totalMark)



//**FOR ERRORS ****//
let titleError = document.getElementsByClassName("error-message")[0];
let submissionDateError = document.getElementsByClassName("error-message")[1];
let oralMarkError = document.getElementsByClassName("error-message")[2];
let totalMarkError = document.getElementsByClassName("error-message")[3];


function reset() {
    titleError.innerHTML = "";
    submissionDateError.innerHTML = "";
    oralMarkError.innerHTML = "";
    totalMarkError.innerHTML = "";
    title.value = "";
    submissionDate.value = "";
    oralMark.value = "";
    totalMark.value = "";
    title.style.border = "none";
    submissionDate.style.border = "none";
    oralMark.style.border = "none";
    totalMark.style.border = "none";
}




//function to show the AddForm
let addForm = () => {
    form.classList.toggle("flex-display");
    addBtn.classList.toggle("btn-success")
    reset();
}


addBtn.addEventListener("click", addForm)


//********TO DELETE SPECIFIC ROW WITH MODAL******* */
for (let i in deleteRow) {
    deleteRow[i].onclick = function (event) { confirmDel.href = event.target.href }

}

/******* VALIDATION ASSIGNMENTS FORM *******/


form.addEventListener("submit", (event) => {
    let regex = /^[a-zA-Z 0-9]*$/

    function titleValidation() {
        var result1 = regex.test(title.value);
        if (title.value == "") {
            title.style.borderBottom = "4px solid red";
            titleError.innerHTML = "*Assignment Title is required";
        } else
            if (result1) {
                title.style.borderBottom = "4px solid green";
                titleError.innerHTML = "";
            }
            else {
                title.style.borderBottom = "4px solid red"
                titleError.innerHTML = "*Wrong Data please try again";
            }
    }


    function submissionDateValidation() {

        if (submissionDate.value == "") {
            submissionDate.style.borderBottom = "4px solid red";
            submissionDateError.innerHTML = "*Submission Date is required";
        }
        if (submissionDate.value.length > 0) {
            submissionDate.style.borderBottom = "4px solid green";
            submissionDateError.innerHTML = "";
        }

    }

    function totalMarkValidation() {

        if (totalMark.value == "") {
            oralMark.value = "";
            totalMark.style.borderBottom = "4px solid red";
            totalMarkError.innerHTML = "*Total-Mark is required";
        }
        if ((totalMark.value < 0 || totalMark.value > 100) && totalMark.value.length > 0) {
            totalMark.style.borderBottom = "4px solid red";
            totalMarkError.innerHTML = "*Total-Mark must be between 0-100"
        }
        if ((totalMark.value >= 0 && totalMark.value <= 100) && totalMark.value.length > 0) {
            totalMark.style.borderBottom = "4px solid green";
            totalMarkError.innerHTML = ""
        }
    }

    function oralMarkValidation() {
        if (oralMark.value == "") {
            oralMark.style.borderBottom = "4px solid red";
            oralMarkError.innerHTML = "*Oral-Mark is required"
        }
        if ((oralMark.value < 0 || oralMark.value > 20) && oralMark.value.length > 0) {
            oralMark.style.borderBottom = "4px solid red";
            oralMarkError.innerHTML = "*Oral-Mark must be between 0-20"
        }
        if ((oralMark.value >= 0 && oralMark.value <= 20) && oralMark.value.length > 0) {
            oralMark.style.borderBottom = "4px solid green";
            oralMarkError.innerHTML = ""
        }
    }


    titleValidation()
    submissionDateValidation()
    totalMarkValidation()
    oralMarkValidation()


    if (titleError.innerHTML.length > 0 || totalMarkError.innerHTML.length > 0 || oralMarkError.innerHTML.length > 0 || submissionDateError.innerHTML.length > 0) {
        event.preventDefault();
    }
})




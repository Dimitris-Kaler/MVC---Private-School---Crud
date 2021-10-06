$(document).ready(function () {
    $('#table-students').DataTable();
});





// const form = document.querySelector("form");

//*****VARIABLES FOR BUTTONS ******/

let submitBtn = document.getElementById("submitBtn");
let deleteRow = document.getElementsByClassName("deleteRef")
let confirmDel = document.getElementsByClassName("modalConfirm")[0]


//******VARIABLES FOR INPUTS ********/
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let birthDate = document.getElementById("birth-Date");
let tuitionFee = document.getElementById("tuition-fee");


//**FOR ERRORS ****//
let firstNameError = document.getElementsByClassName("error-message")[0];
let lastNameError = document.getElementsByClassName("error-message")[1];
let birthDateError = document.getElementsByClassName("error-message")[2];
let tuitionFeeError = document.getElementsByClassName("error-message")[3];

//FOR FORM HEADING
let heading = document.getElementsByClassName("form-heading")[0];

function reset() {
    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
    birthDateError.innerHTML = "";
    tuitionFeeError.innerHTML = "";
    firstName.value = "";
    lastName.value = "";
    birthDate.value = "";
    firstName.style.border = "none";
    lastName.style.border = "none";
    birthDate.style.border = "none";
    tuitionFee.style.border = "none"
}


//function to show the AddForm

addForm = () => {
    form.classList.toggle("flex-display");
    addBtn.classList.toggle("btn-success");
    reset();
}



addBtn.addEventListener("click", addForm)


//********TO DELETE SPECIFIC ROW WITH MODAL******* */
for (let i in deleteRow) {
    deleteRow[i].onclick = function (event) { confirmDel.href = event.target.href }
}



/******* VALIDATION STUDENTS FORM *******/

form.addEventListener("submit", (event) => {

    let regex = /^[a-zA-Z ]*$/

    function firstNameValidation() {
        let result1 = regex.test(firstName.value)
        if (firstName.value == "") {
            firstName.style.borderBottom = "4px solid red";
            firstNameError.innerHTML = "*First Name is required";
        } else
            if (result1) {
                firstName.style.borderBottom = "4px solid green";
                firstNameError.innerHTML = "";
            }
            else {
                firstName.style.borderBottom = "4px solid red";
                firstNameError.innerHTML = "*Wrong Data please try again"
            }

    }


    function lastNameValidation() {
        var result2 = regex.test(lastName.value)
        if (lastName.value == "") {
            lastName.style.borderBottom = "4px solid red";
            lastNameError.innerHTML = "*Last Name is required";
        } else
            if (result2) {
                lastName.style.borderBottom = "4px solid green";
                lastNameError.innerHTML = "";
            }
            else {
                lastName.style.borderBottom = "4px solid red";
                lastNameError.innerHTML = "*Wrong Data please try again"
            }

    }

    function birthDateValidation() {
        if (birthDate.value == "") {
            birthDate.style.borderBottom = "4px solid red";
            birthDateError.innerHTML = "*Birth Date is required";
        }
        if (birthDate.value.length > 0) {
            birthDate.style.borderBottom = "4px solid green";
            birthDateError.innerHTML = "";
        }


    }

    function tuitionFeeValidation() {
        if (tuitionFee.value == "") {
            tuitionFee.style.borderBottom = "4px solid red"
            tuitionFeeError.innerHTML = "*Tuition Fee is required"
        }
        if ((tuitionFee.value < 200 || tuitionFee.value > 4000) && tuitionFee.value.length > 0) {
            tuitionFee.style.borderBottom = "4px solid red";
            tuitionFeeError.innerHTML = "*Tuition Fee must be a number between 200 and 4000"
        }
        if (tuitionFee.value >= 200 && tuitionFee.value <= 4000) {
            tuitionFee.style.borderBottom = "4px solid green";
            tuitionFeeError.innerHTML = ""
        }

    }

    firstNameValidation();
    lastNameValidation();
    birthDateValidation();
    tuitionFeeValidation();


    if (firstNameError.innerHTML.length > 0 || lastNameError.innerHTML.length > 0 || birthDateError.innerHTML.length > 0 || tuitionFeeError.innerHTML.length > 0) {
        event.preventDefault();
    }



}
)


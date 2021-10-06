$(document).ready(function () {
    $('#table-trainers').DataTable();
});



// /*******TRAINERS FORM **********/


// //***DISPLAY EDIT HIDDEN FORM AND CHANGE THE BUTTONS *****/

// //***DECLARE VARIABLES****//

// //***form ****//
const form = document.querySelector("form");


// //*****VARIABLES FOR BUTTONS ******/


let addBtn = document.getElementById("addBtn")
let submitBtn = document.getElementById("submitBtn");
let editBtn = document.getElementById("editBtn");
let updateRow = document.getElementsByClassName("update")
let deleteRow = document.getElementsByClassName("deleteRef")
let confirmDel = document.getElementsByClassName("modalConfirm")[0]


//******VARIABLES FOR INPUTS ********/
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let subject = document.getElementById("subject");

//**FOR ERRORS ****//
let firstNameError = document.getElementsByClassName("error-message")[0];
let lastNameError = document.getElementsByClassName("error-message")[1];
let subjectError = document.getElementsByClassName("error-message")[2];
// console.log(subject)
// console.log(subjectError)

//FOR FORM HEADING
let heading = document.getElementsByClassName("form-heading")[0];


function reset() {
    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
    subjectError.innerHTML = "";
    firstName.value = "";
    lastName.value = "";
    subject.value = "";
    firstName.style.border = "none";
    lastName.style.border = "none";
    subject.style.border = "none";
}




//Function for toggle the add form

addForm = () => {
    form.classList.toggle("flex-display");
    addBtn.classList.toggle("btn-success");
    reset()
}


addBtn.addEventListener("click", addForm)







//********TO DELETE SPECIFIC ROW WITH MODAL********/
for (let i in deleteRow) {
    deleteRow[i].onclick = function (event) { confirmDel.href = event.target.href }

}



//form validation

form.addEventListener("submit", (event) => {
    let regex = /^[a-zA-Z ]*$/

    function firstNameValidation() {

        var result1 = regex.test(firstName.value);
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
                firstNameError.innerHTML = "*Wrong Data please try again";
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
                lastNameError.innerHTML = ""
            }
            else {
                lastName.style.borderBottom = "4px solid red";
                lastNameError.innerHTML = "* Wrong Data please try again";
            }

    }

    function subjectValidation() {
        var result3 = regex.test(subject.value)
        if (subject.value == "") {
            subject.style.borderBottom = "4px solid red";
            subjectError.innerHTML = "*Subject is required";
        } else
            if (result3) {
                subject.style.borderBottom = "4px solid green";
                subjectError.innerHTML = ""
            }
            else {
                subject.style.borderBottom = "4px solid red";
                subjectError.innerHTML = "* Wrong Data please try again";
            }

    }

    firstNameValidation();
    lastNameValidation();
    subjectValidation();
    if (firstNameError.innerHTML.length > 0 || lastNameError.innerHTML.length > 0 || subjectError.innerHTML.length > 0) {
        event.preventDefault();
    }
})




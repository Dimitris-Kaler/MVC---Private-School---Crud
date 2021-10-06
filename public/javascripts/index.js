///HOME PAGE///

/*****CONTACT FORM******/
const form = document.getElementById("contact-form");
let firstName = document.getElementsByClassName("input-text")[0];
let lastName = document.getElementsByClassName("input-text")[1];
let phone = document.getElementsByClassName("input-text")[2];
let firstNameError = document.getElementsByClassName("error-contactForm")[0];
let lastNameError = document.getElementsByClassName("error-contactForm")[1];
let phoneError = document.getElementsByClassName("error-contactForm")[2];
let textArea = document.getElementsByClassName("textarea")[0];
let textAreaError = document.getElementsByClassName("error-contactForm")[3];


form.addEventListener("submit", (event) => {
    let regex = /^[a-zA-Z]*$/
    let phoneRegex = /^[0-9]{9,15}$/

    function firstNameValidation() {
        var result1 = regex.test(firstName.value)

        if (firstName.value == "") {
            firstName.style.border = "2px solid red";
            firstNameError.innerHTML = "*First Name is required";
        } else
            if (result1) {
                firstName.style.border = "2px solid green";
                firstNameError.innerHTML = "";
            }
            else {
                firstName.style.border = "2px solid red";
                firstNameError.innerHTML = "*Wrong Data please try again";
            }
    }
    function lastNameValidation() {
        let result2 = regex.test(lastName.value)
        if (lastName.value == "") {
            lastName.style.border = "2px solid red";
            lastNameError.innerHTML = "*Last Name is required";
        } else
            if (result2) {
                lastName.style.border = "2px solid green";
                lastNameError.innerHTML = ""
            }
            else {
                lastName.style.border = "2px solid red";
                lastNameError.innerHTML = "*Wrong Data please try again";
            }
    }
    function phoneValidation() {
        var result3 = phoneRegex.test(phone.value)

        if (phone.value == "") {
            phone.style.border = "2px solid red"
            phoneError.innerHTML = "*Phone is required"
        } else
            if (result3) {
                phone.style.border = "2px solid green";
                phoneError.innerHTML = "";
            }
            else {
                phone.style.border = "2px solid red";
                phoneError.innerHTML = "*Phone between 9-15 digits";
            }
    }
    function textAreaValidation() {
        if (textArea.value == "") {
            textArea.style.border = "2px solid red";
            textAreaError.innerHTML = "*Textarea is required";
        }
        if (textArea.value.length > 0) {
            textArea.style.border = "2px solid green";
            textAreaError.innerHTML = "";
        }
    }


    firstNameValidation()
    lastNameValidation()
    phoneValidation()
    textAreaValidation()

    if (firstNameError.innerHTML.length > 0 || lastNameError.innerHTML.length > 0 || phoneError.innerHTML.length > 0 || textAreaError.innerHTML.length > 0) {
        event.preventDefault();
    }
    else {
        alert(`Thank you ${firstName.value.trim().toUpperCase()} ${lastName.value.trim().toUpperCase()} for reaching out to us.Our representative we contact you ASAP”`)
    }




})
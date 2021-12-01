// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');


let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let eMail = document.getElementById('eMail')
let phoneNmb = document.getElementById('phoneNmb')
let pass = document.getElementById('pass')
let address = document.getElementById('address')

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorLastName = document.getElementById('errorLastName');
var errorPhone = document.getElementById('errorPhone');
var errorMail = document.getElementById('errorMail');
var errorAddress = document.getElementById('errorAddress');


// Exercise 8
function validate(e) {
    // Validate fields entered by the user: name, phone, password, and email
    const emailPattern = new RegExp(/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/);
    const alfaPattern = new RegExp('^[A-Z]+$', 'i');
    const addressPattern = new RegExp(/^[a-zA-Z\s0-9]+$/);
    const phonePattern = new RegExp(/([.0-9])/);
    const passwordPattern = new RegExp(/^(?=.[0-9])(?=.[a-zA-Z])([a-zA-Z0-9]+)$/);

    
    ///////Validating name///////
    if (alfaPattern.test(firstName.value) == false || firstName.value.length < 3){
        errorName.style.display = "block";
    }
    else{
        errorName.style.display = "none";
    }
    ///////Validating last name///////
    if (alfaPattern.test(lastName.value) == false || lastName.value.length < 3){
        errorLastName.style.display = "block";
    }
    else{
        errorLastName.style.display = "none";
    }

    ///////Validating mail///////
    if (emailPattern .test(eMail.value) == false || eMail.value.length < 3){
        errorMail.style.display = "block";
    }
    else{
        errorMail.style.display = "none";
    }
    ///////Validating phone///////
    if (phonePattern .test(phoneNmb.value) == false || phoneNmb.value.length < 3){
        errorPhone.style.display = "block";
    }
    else{
        errorPhone.style.display = "none";
    }
    ///////Validating password///////
    if (passwordPattern .test(pass.value) == false || pass.value.length < 3){
        errorPassword.style.display = "block";
    }
    else{
        errorPassword.style.display = "none";
    }
    ///////Validating address///////
    if (addressPattern .test(address.value) == false || address.value.length < 3){
        errorAddress.style.display = "block";
    }
    else{
        errorAddress.style.display = "none";
    }


    
    e.preventDefault();
}
let inputNameSignUp = document.getElementById("nameSignUp");
let inputEmailSignUp = document.getElementById("emailSignUp");
let inputPasswordSignUp = document.getElementById("passwordSignUp");
let btnSign = document.getElementById("btnSignUp");
let nameCorrect = document.getElementById("nameCorrect");
let nameValid = document.getElementById("nameValid");
let emailCorrect = document.getElementById("emailCorrect");
let emailValid = document.getElementById("emailValid");
let passwordCorrect = document.getElementById("passwordCorrect");
let passwordValid = document.getElementById("passwordValid");
let existMessage = document.getElementById("exite");
let success = document.getElementById("successSignUp");
let isRequired = document.getElementById("incorrectSignUp");


// ==================== Start Project ====================

let totalInfo = [];

if (localStorage.getItem("user") != null) {
  totalInfo = JSON.parse(localStorage.getItem("user"));
}


function submitSignUp() {
  let exist = false;
  for (let i = 0; i < totalInfo.length; i++) {
    if (totalInfo[i].emailUser === inputEmailSignUp.value.toLowerCase()) {
      exist = true;
      existMessage.classList.remove("d-none");
    } else {
      existMessage.classList.add("d-none");
    }
  }

  let noValue = false;
  if (
    inputNameSignUp.value === "" ||
    inputEmailSignUp.value === "" ||
    inputPasswordSignUp.value === ""
  ) {
    isRequired.classList.remove("d-none");
    success.classList.add("d-none");
    existMessage.classList.add("d-none");
    noValue = true;
  } else {
    isRequired.classList.add("d-none");
    success.classList.remove("d-none");
    existMessage.classList.remove("d-none");
    noValue = false;
  }

  let valueSignUp = {
    nameUser: inputNameSignUp.value.toLowerCase(),
    emailUser: inputEmailSignUp.value.toLowerCase(),
    passwordUser: inputPasswordSignUp.value.toLowerCase(),
  };

  if (
    exist == false &&
    noValue == false &&
    regexNameSign() == true &&
    regexEmailSign() == true &&
    regexPasswordSign() == true
  ) {
    totalInfo.push(valueSignUp);
    localStorage.setItem("user", JSON.stringify(totalInfo));
    success.classList.remove("d-none");
    existMessage.classList.add("d-none");
  } else {
    success.classList.add("d-none");
  }
}




function regexNameSign() {
  var regexName = /^[A-Z][a-z]{2,}/;
  var text = inputNameSignUp.value;

  if (regexName.test(text) == true) {
    inputNameSignUp.classList.remove("is-invalid");
    nameCorrect.classList.remove("d-none");
    nameValid.classList.add("d-none");

    return true;
  } else {
    inputNameSignUp.classList.add("is-invalid");
    nameValid.classList.remove("d-none");
    nameCorrect.classList.add("d-none");
    return false;
  }
}

function regexEmailSign() {
  var regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var text = inputEmailSignUp.value;

  if (regexEmail.test(text) == true) {
    inputEmailSignUp.classList.remove("is-invalid");
    emailCorrect.classList.remove("d-none");
    emailValid.classList.add("d-none");

    return true;
  } else {
    inputEmailSignUp.classList.add("is-invalid");
    emailValid.classList.remove("d-none");
    emailCorrect.classList.add("d-none");
    return false;
  }
}

function regexPasswordSign() {
  var regexPassword = /[0-9]{8,11}/;
  var text = inputPasswordSignUp.value;

  if (regexPassword.test(text) == true) {
    inputPasswordSignUp.classList.remove("is-invalid");
    passwordCorrect.classList.remove("d-none");
    passwordValid.classList.add("d-none");
    return true;
  } else {
    inputPasswordSignUp.classList.add("is-invalid");
    passwordValid.classList.remove("d-none");
    passwordCorrect.classList.add("d-none");
    return false;
  }
}

// ==================== End Project ====================

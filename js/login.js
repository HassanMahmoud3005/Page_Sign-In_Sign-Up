let inputEmailLogIn = document.getElementById("emailLogIn");
let inputPasswordLogIn = document.getElementById("passwordLogIn");
let btnLog = document.getElementById("loginBtn");
let incorrectUser = document.getElementById("incorrectUser");
let mustHave = document.getElementById("mustHave");
let successs = document.getElementById("successs")

function submitLogIn() {
  
  let requiredValue = false;

  if (inputEmailLogIn.value == "" || inputPasswordLogIn == "") {
    mustHave.classList.remove("d-none");
    incorrectUser.classList.add("d-none");

    requiredValue = true;
  } else {
    incorrectUser.classList.remove("d-none");
    mustHave.classList.add("d-none");

    requiredValue = false;
  }

  let valueLog = {
    emailLog: inputEmailLogIn.value.toLowerCase(),
    passwordLog: inputPasswordLogIn.value.toLowerCase(),
  };
  for (let i = 0; i < totalInfo.length; i++) {
    if (
      totalInfo[i].emailUser === valueLog.emailLog &&
      totalInfo[i].passwordUser === valueLog.passwordLog &&
      requiredValue == false
    ) {
      window.location = "./Hello.html";
      successs.classList.remove("d-none")
      incorrectUser.classList.add("d-none")
    } else {

    }
  }
}

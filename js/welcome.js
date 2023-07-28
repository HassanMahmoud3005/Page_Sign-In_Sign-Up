let welcomeUser = document.getElementById("welcome");

for (let i = 0; i < totalInfo.length; i++) {

  welcomeUser.innerText = "Welcome" + " " + totalInfo[i].nameUser;
}



var xuserEmail = document.getElementById("userEmail");
var xuserPass = document.getElementById("userPass");
var logInbtn = document.getElementById("logIn");
var xalertmassage = document.getElementById("xalertmassage")
var users = [];
if (localStorage.getItem("users") != null
) {
    users = JSON.parse(localStorage.getItem("users"))
}
function logIn() {
    if( checkEmpty() ==true){
        beAlert("all input is required", "red")
    }else {
        if (check() == true) {
            window.location.href = "logout/home.html";
        } else {
            beAlert("this email or password not found", "red")
        }
    }
    
}

function check() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].userEmail == xuserEmail.value && users[i].userPass == xuserPass.value) {
            return true;
        }
    }
}
function beAlert(text, color) {
    xalertmassage.classList.remove("d-none");
    xalertmassage.innerHTML = text;
    xalertmassage.style.color = color;
}

function checkEmpty() {

    if (xuserEmail.value == "" || xuserPass.value=="") {
        return true;
    } else { return false; }
}

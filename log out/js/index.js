var logoutbtn= document.getElementById("logoutbtn");
var welcome=document.getElementById("welcome");


if(localStorage.getItem("userName")!=null){
    welcome.innerHTML=`welcome`+ localStorage.getItem("userName")
}


function logout(){
    localStorage.removeItem("userName");
    
}

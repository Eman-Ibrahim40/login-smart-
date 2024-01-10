var newuserName=document.getElementById("newuserName");
var newuserEmail=document.getElementById("newuserEmail");
var newuserPass=document.getElementById("newuserPass");
var newsignIn=document.getElementById("newsignIn");
var alertMessage= document.getElementById("alertMessage");
var users=[];

if(localStorage.getItem("users")  != null){
    users=JSON.parse(localStorage.getItem("users"))
}
function SignUp(){
    var dateUsers={
        userName:newuserName.value,
        userEmail:newuserEmail.value,
        userPass:newuserPass.value,
    }
    if(checkInput() == true){
        alert("All Input Is Required","red")}
        else{
            if(checkEmail ()== true){
                alert("this email is already found","red");
            }
            else{
                users.push(dateUsers);
                location.href="../login/index.html";
                localStorage.setItem("users",JSON.stringify(users))
                alert("sucess","green");
                clear();
                
            }
            
    }
    

}

function alert(text,color){
    alertMessage.classList.remove("d-none");
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;
}
function checkInput(){
    if(newuserName.value==""||newuserEmail.value==""||newuserPass.value=="" ){
        return true;}
        else{ 
            return false;
    
    }
    
}
function clear(){
    newuserName.value="";
    newuserEmail.value="";
    newuserPass.value="";

}

function checkEmail(){
    for(var i=0 ; i<users.length;i++){
     if(users[i].userEmail== newuserEmail.value)
        return true;

    }
    
}
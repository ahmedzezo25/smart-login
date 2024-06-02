
var user = document.getElementById("user");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var emailsignup = document.getElementById("emailsignup");
var passsignup = document.getElementById("passsignup");
var protext = document.getElementById("protext");
var submit = document.getElementById("submit");
var login = document.getElementById("login");
var logout = document.getElementById("logout");



if(logout != null) {

    logout.addEventListener("click", function(){
        location.href="signin.html";
        localStorage.removeItem("name");
    });

}



var datapro ;
if(localStorage.getItem("datapro") !== null) {
    datapro = JSON.parse(localStorage.getItem("datapro"));
  
}else {
    datapro = [] ;
}


function data() {

    if(user.value === "" ||email.value === "" ||  pass.value === ""){
        protext.innerText = "All inputs is required ";
        protext.classList.add("red");
        
    }
    
    else if(user.value != "" &&  email.value != "" && pass.value != "" && user.classList.contains("valid") &&  email.classList.contains("valid") &&  pass.classList.contains("valid")) {

        var newpro = {
            user:user.value,
            email:email.value,
            pass:pass.value,

        }
      
        datapro.push( newpro);
        localStorage.setItem("datapro", JSON.stringify(datapro))
        protext.innerText="success";
        protext.classList.remove("red");
        protext.classList.add("green");
        location.href="signup.html";
       
        

    }
    
    else {
        protext.innerText = "incoreect email";
        protext.classList.add("red");
    }
  
    
}

function clear() {
    user.value = "";
    email.value = "";
    pass.value = "";
    
    

}

if(submit != null){

    submit.addEventListener("click", function() {
        data();
        clear();
    })

}


if(login != null){

    login.addEventListener("click", function() {
        inputtwo(); 
       
       
    })

}



function inputtwo() {
    if(emailsignup.value != "" ||  passsignup.value != "") {
        protext.innerText = "";
      
    if(check()){

      location.href="index.html";
   
     
    }else {
        protext.innerText = "incoreect is email or password"; 
        protext.classList.add("red");
        emailsignup.value= "";
        passsignup.value = "";
    }
}else {
    protext.innerText = "All inputs required"; 
    protext.classList.add("red");
}

    
}



function check() {
    for(var i = 0; i < datapro.length;i++) {

        if(datapro[i].email.toLowerCase() === emailsignup.value.toLowerCase() && datapro[i].pass.toLowerCase() === passsignup.value.toLowerCase() ){
            localStorage.setItem("name", JSON.stringify(datapro[i].user))
      
   
        return true;

        }
        

    }
    
}
function admin() {
   
        var userr = JSON.parse(localStorage.getItem("name"));
        document.getElementById("username").innerHTML=`<h1>Welcome ${userr}</h1>`;
         
    }



    
   
function validation(element) {

    var regex ={
        user: /^[A-Z][a-z]{2,8}$/,
        email:/^[a-z0-9]{3,16}@(gmail|yahoo)\.com$/,
        pass: /^.{4,10}$/,
    }
if(regex[element.id].test(element.value)){
    element.classList.add("valid");
    element.classList.remove("in-valid");
    console.log("much")

}else {
    element.classList.add("in-valid");
    element.classList.remove("valid");
    console.log("no much")

}
}


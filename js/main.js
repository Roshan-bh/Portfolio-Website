//Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

//Nav close
let navbar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


//Theme toggle

var icon = document.getElementById("icon")
icon.onclick=function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="images/moon.png";
    }
    else{
        icon.src="images/sun.png";
    }
}


//contact-from validation

    var nameError=document.getElementById("name-error");
    var emailError=document.getElementById("email-error");
    var messageError=document.getElementById("message-error");
    var submitError=document.getElementById("submit-error");

    function validateName(){
        var name=document.getElementById('name').value;
        if (name.length == 0){
            nameError.innerHTML = "name field must be filled.";
            return false;
        }
        nameError.innerHTML='<i class="fas fa-check-circle"></i>';
        return true;
    }

    function validateEmail(){
        var email=document.getElementById('email').value;
        if(email.length==0){
            emailError.innerHTML="email field must be filled.";
            return false;
        }
        if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.innerHTML='email format invalid';
            return false;
        }

        emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }

    function validateMessage(){
        var message=document.getElementById('message').value;
        if(message.length==0){
            messageError.innerHTML='message field must be filled.';
            return false;
        }
        messageError.innerHTML='<i class="fas fa-check-circle"></i>';
        return true;
    }

    function validateForm(){
       if(!validateName() || !validateEmail() || !validateMessage()){
         submitError.style.display='block';
         submitError.innerHTML='please! fill the require fields as asked..'
         setTimeout(function(){
            submitError.style.display='none';
         },3000);
         return false;
       }
    }
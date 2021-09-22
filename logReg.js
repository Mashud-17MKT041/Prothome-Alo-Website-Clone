






// login form validation

const logEmail = document.querySelector('.login-email');
const logPassMain = document.querySelector('.login-password-main');
const logSubmit = document.querySelector('.login-button');
const lgSmall = document.querySelector('.lg-small');
const lgStrong = document.querySelector('.lg-strong');
const lgPassSmall = document.querySelector('.lg-pass-small');
const lgPassStrong = document.querySelector('.lg-pass-strong');
const myForm = document.querySelector("#myForm");


logSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    validate();
     
});

const validate = () => {

    const logemailval = logEmail.value.trim();
    const emaillogPassMainVal = logPassMain.value.trim();
    
    
    // validate email
    
    if (logemailval===""){
        logEmail.style.border = "1px solid #e74c3c";
        lgSmall.classList.add('active');
        lgStrong.classList.remove('active');
        
    }
    else if (logemailval.length < 10){
        logEmail.style.border = "1px solid #e74c3c";
        lgStrong.classList.add('active');
        lgSmall.classList.remove('active');
        
    }else {
        lgStrong.classList.remove('active');
        lgSmall.classList.remove('active');
        logEmail.style.border = "1px solid green";
        
    }  
     
    
    // validate password
    
    if (emaillogPassMainVal===""){
        logPassMain.style.border = "1px solid #e74c3c";
        lgPassSmall.classList.add('active');
        lgPassStrong.classList.remove('active');
        
    }
    else if (emaillogPassMainVal.length < 6){
        logPassMain.style.border = "1px solid #e74c3c";
        lgPassSmall.classList.remove('active');
        lgPassStrong.classList.add('active');
        
    }else {
        lgPassStrong.classList.remove('active');
        lgPassSmall.classList.remove('active');
        logPassMain.style.border = "1px solid green";
        

    } 

    if( logemailval.length >= 10 && emaillogPassMainVal.length >= 6) {
        swal("Login Successful ! " , "Click back for going home page. !", "success");
        myForm.reset();
       

       
        
    }

        
}









// Registration form Validation



const regText = document.querySelector('.reg-text');
const regMpassEmail = document.querySelector('.reg-main-email');
const regMainPassword = document.querySelector('.reg-main-password');
const confirmMainPass = document.querySelector('.confirm-password-main');
const registerButton = document.querySelector('.reg-button-rg');
const rgnameSmall = document.querySelector('.rg-name-small');
const rgEmailSmall = document.querySelector('.rg-email-small');
const rgEmailStrong = document.querySelector('.rg-email-strong');
const rgPassSmall = document.querySelector('.rg-pass-small');
const rgPassStrong = document.querySelector('.rg-pass-strong');
const rgCpassSmall = document.querySelector('.rg-c-pass-small');
const rgCpassStrong = document.querySelector('.rg-c-pass-strong');
const myRegForm = document.querySelector("#myRegForm");


logSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    validateReg();
     
});

const validateReg = () => {

    const regTextVal = regText.value.trim();
    const regMpassEmailVal = regMpassEmail.value.trim();
    const regMainPasswordVal = regMainPassword.value.trim();
    const confirmMainPassVal = confirmMainPass.value.trim();
    
    
    // validate reg Fullname
    
    if (regTextVal===""){
        regText.style.border = "1px solid #e74c3c";
        rgnameSmall.classList.add('active');  
    }
    else {
        rgnameSmall.classList.remove('active');
        regText.style.border = "1px solid green";
        
    }  
     
    
    // Validate reg Email
    
    if (regMpassEmailVal===""){
        regMpassEmail.style.border = "1px solid #e74c3c";
        rgEmailSmall.classList.add('active');
        rgEmailStrong.classList.remove('active');
        
    }
    else if (regMpassEmailVal.length < 10){
        regMpassEmail.style.border = "1px solid #e74c3c";
        rgEmailSmall.classList.remove('active');
        rgEmailStrong.classList.add('active');
        
    }else {
        rgEmailStrong.classList.remove('active');
        rgEmailSmall.classList.remove('active');
        regMpassEmail.style.border = "1px solid green";
        

    } 


    // Validate reg password

    if (regMainPasswordVal===""){
        regMainPassword.style.border = "1px solid #e74c3c";
        rgPassSmall.classList.add('active');
        rgPassStrong.classList.remove('active');
        
    }
    else if (regMainPasswordVal.length < 6){
        regMainPassword.style.border = "1px solid #e74c3c";
        rgPassSmall.classList.remove('active');
        rgPassStrong.classList.add('active');
        
    }else {
        rgPassStrong.classList.remove('active');
        rgPassSmall.classList.remove('active');
        regMainPassword.style.border = "1px solid green";
        

    } 


    // Validate Confirm Reg Password

    if (confirmMainPassVal===""){
        confirmMainPass.style.border = "1px solid #e74c3c";
        rgCpassSmall.classList.add('active');
        rgCpassStrong.classList.remove('active');
        
    }
    else if (confirmMainPassVal !== regMainPasswordVal){
        confirmMainPass.style.border = "1px solid #e74c3c";
        rgCpassSmall.classList.remove('active');
        rgCpassStrong.classList.add('active');
        
    }else {
        rgCpassStrong.classList.remove('active');
        rgCpassSmall.classList.remove('active');
        confirmMainPass.style.border = "1px solid green";
        

    } 


    if(regMainPasswordVal.length >= 6 && confirmMainPassVal === regMainPasswordVal && regMpassEmailVal.length >= 10) {

        
        swal("Your Registration Successful ! ", "Click back for going home page. !", "success");
        myRegForm.reset();
       

       
        
    }

 

        
}


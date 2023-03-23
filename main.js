var menulist = document.getElementById('menulist');

function openmenu(){
    menulist.style.right = '0'
}

function closemenu(){
    menulist.style.right = '-200px'
}

function openlog(){
    window.location = 'login.html';
}
function opensign(){
    window.location = 'Sign-up.html';
}

function goToHome(){
    window.location = 'index.html';
}




function SubmitEvent(){
    // var firstname = document.getElementById('firstname').value;
    // var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    // var confirmpassword = document.getElementById('conf_password').value;
    // var message = document.getElementById('message').value;
   

    if(password.value.length >= 8){
        alert('login Successfully');
        window.location.assign('index.html');
        return false;
    }
    else {
        alert('invalid information');
        return;
    }
}
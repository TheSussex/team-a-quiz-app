function loginUser(event){
    event.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if(!username||!password){
        alert("Please fill all details");
        return;
    }
    
    let user_name=loginAction()
    if(user_name){
        sessionStorage.setItem("username", user_name)
        window.location.href = "quiz_home.html"
    return;
    }
    else{
        alert("Log in failed. Please try again.")
    }
    return;  
}

function loginAction(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let userdetails = JSON.parse(localStorage.getItem(username))
    if (!userdetails){
        return false;
    }
    if (password != userdetails[2]){
        return false;
    }
    return (userdetails[0]);
}


function signupUser(event){
    event.preventDefault()
    if (!validateForm(event)){
        return;
    }
    if(signupAction()){
        alert("It's great to have you! Just one more step :)")
        window.location.href = "log_in.html"
        return;
    }
    else{
        alert("Sign up failed. Please try again.")
    return;
    }
    return;
    
}

function signupAction(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkbox = document.getElementById("checkbox").checked;

    let userdetails = [username, email, password, checkbox]

    //username exists already
    if (localStorage.getItem(username)){
        return false;
    }

    localStorage.setItem(username, JSON.stringify(userdetails))
    return true;
}

function validateForm(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkbox = document.getElementById("checkbox").checked;
    

if(!username||!email||!password||!checkbox){
        alert("Please fill all details and agree to our Terms and Conditions");
        return false;
    }
    else{
        return true;
    }
    

}
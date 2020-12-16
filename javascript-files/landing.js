function goToSignup(event){  
    event.preventDefault()
    window.location.href = "../html-files/sign_up.html"
    return
}
//preventDefault() tells the user agent that if the event does not get explicitly handled,
// its default action should not be taken as it normally would be.


function goToLogin(event){
    event.preventDefault()
    window.location.href = "../html-files/log_in.html"
    return
}
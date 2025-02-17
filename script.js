function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    
    };
    emailjs.send("service_r47ohdo","template_6tu7hif",parms).then(alert("Email Send")) 
}
function SendMail(){
    
    var fullName = document.getElementById("fullName").value;
    var email_id = document.getElementById("email_id").value;
    var message = document.getElementById("message").value;

    
    var recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        window.confirm("Molimo vas da potvrdite da niste robot.");
        return; 
    }

    if (fullName === "" || email_id === "" || message === "") {
        window.confirm("Sva polja moraju biti popunjena!");
        return; 
    }

    var params = {
        from_name: fullName,
        email_id: email_id,
        message: message
    };

    emailjs.send("service_vw5fu05", "template_p3d90cb", params).then(function(res) {
        window.confirm("Uspešno ste poslali poruku!");

        document.getElementById("contact-form").reset();

        
        grecaptcha.reset();

    }).catch(function(error) {
        window.confirm("Došlo je do greške: " + error);
    });
}





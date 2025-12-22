function SendMail(){

  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var checkIn = document.getElementById('checkIn').value;
  var checkOut = document.getElementById('checkOut').value;
  var comments = document.getElementById('comments').value;
  var guests = document.getElementById('guests').value;

  
  var recaptchaResponse = grecaptcha.getResponse();
  if (recaptchaResponse.length === 0) {
    window.confirm("Molimo vas da potvrdite da niste robot.");
    return;
  }

  if (fullName === "" || email === "" || checkIn === "" || checkOut === "" || comments === "" || guests === "") {
    window.confirm("Sva polja moraju biti popunjena!");
    return; 
  }

  var params = {
    full_Name: fullName,
    email: email,
    check_In: checkIn,
    check_Out: checkOut,
    comments: comments,
    guests: guests
  };

  emailjs.send("service_vw5fu05", "template_9az8uhs", params).then(function(res) {
    window.confirm("Uspešno ste poslali poruku!");

    document.getElementById("reservation-form").reset();
    
  
    grecaptcha.reset();

  }).catch(function(error) {
    window.confirm("Došlo je do greške: " + error);
  });

}

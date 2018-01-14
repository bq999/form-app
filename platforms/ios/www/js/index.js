$(document).ready(function() {
    $('select').material_select();
  });

    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });


function submitBday() {
    var Bdate = document.getElementById('bday').value;
    var Bday = +new Date(Bdate);
    Q4A =  ~~ ((Date.now() - Bday) / (31557600000));
    var theBday = document.getElementById('resultBday');
    theBday.innerHTML = Q4A;
}







function check() {

      var name = document.getElementById('name');

      if (name.value == "")
      {
      alert("Please Fill name");
          name.focus;
      return false;
      }

      var country = document.getElementById('country');
      if (country.value == null || country.value == "")
      {
      alert("Please choose country");
      return false;
      }

      var passport = document.getElementById('passport_id');
      if (passport.value == null || passport.value == "")
      {
      alert("Please fill passport id");
      return false;
      }

      var bday = document.getElementById('bday');
      if (bday.value == null || bday.value == "")
      {
      alert("Please fill birth of date");
      return false;
      }






    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Email should add @/.com');
    email.focus;
    return false;
 }

    var filter2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    
var password = document.getElementById('psword');
    if (!filter2.test(password.value)) {
    alert('Passwords must contain at least six characters, including uppercase, lowercase letters, numbers, and special character.');
    password.focus;
    return false;
  }

        window.location.href = 'gpa.html';

/*
      var numbers = /^[0-9]+$/;
    
      var gpa = document.getElementById('gpa');
      if (gpa.value == null || gpa.value == "" || gpa.value.match(!numbers))
      {
      alert("Please fill gpa and only number");
      return false;
      }

      if(gpa.value>2.8){
        return false;
      } 
      else{
        alert("You can not apply to coop");
        return false;
      }

*/


}





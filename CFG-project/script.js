function validateText() {
  var name = document.forms.Quiz.username.value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
    } else {
          return true;
    }  
  }
      
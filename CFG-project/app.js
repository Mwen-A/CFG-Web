function quizmarks(){

}

$(document).ready(function(){
  $('.modal').modal();
  });

function validateRadio() {
    var x = document.forms.quiz.elements.group1.value;
    if (x === "") {
      document.querySelector("#show-modal").addEventListener('click', validateRadio);
      $(document).ready(function(){
        $('.modal').modal(); 
        });
      return false;
    }else{
      return true;
    }
  }
  

if (score == 0){
    body.innerHTML = '<h1>Do better next time, your score was... ' + score + '</h1>';
} else if (score < 2){
    body.innerHTML = '<h1>Maybe you need to visit the home page again, your score was... ' + score + '</h1>';
} else if (score < 4){
    body.innerHTML = '<h1>You did well but there is room for improvement, your score was... ' + score + '</h1>';
} else {
    body.innerHTML = '<h1>Excellent, full marks to you! Your score was... ' + score + '</h1>';
}


function tabulateAnswers() {
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    
    var choices = document.getElementsByTagName('input');
    for (i=0; i<choices.length; i++) {

      if (choices[i].checked) {

        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
      }
    }
    
    var maxscore = Math.max(c1score,c2score,c3score,c4score);
    
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { 
      answerbox.innerHTML = "Muy bien, respondiste todas correctamente!";
    }
    if (c2score == maxscore) { 
      answerbox.innerHTML = "Muy bien, respondiste todas correctamente!";
    }
    if (c3score == maxscore) { 
        answerbox.innerHTML = "Muy bien, respondiste todas correctamente";
    }
    if (c4score == maxscore) { 
        answerbox.innerHTML = "Muy bien, respondiste todas correctamente";
    }
  }
  
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Tu resultado aparecera aqui!";
  }

  tabulateAnswers();
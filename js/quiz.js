class Quiz {
    constructor() {
        fetch('questions.json ')
            .then(response => response.json() )
             .then(questions => {
                 this.questions = questions;
                 showQuestion();
             })
        document.querySelector('.check').addEventListener('click', check)
        document.querySelector('.next').addEventListener('click', next)

    }
   showQuestion() {
       const idx = (Math.random() * this.questions.length));
       const question = this.question[idx];
       document.querySelector('.question').value = this.currQuestion;
        document.querySelector('.result').innerText ='';
       document.querySelector('.answer').value = '';

   }
checkAnswer() {
    const answer = document.querySelector('.answer').value;
    document.querySelector('.result').innerText =
        answer === this.currQuestion.a ? "CORRECT" : "INCORRECT";
}

}
new Quiz();
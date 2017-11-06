'use strict';

const STORE = 
    {
      questions: [
        {
          quest: 'What fruit is traditionally used in an Eve\'s pudding?',
          correctAnswer: 'apples',
          answersArr: [ 'pears', 'apples', 'raisins', 'lemon'],
          userAnswerCorrect: false
        },
            
        {
          quest: 'In which country did Tea originate?',
          correctAnswer: 'China',
          answersArr: [ 'China', 'Japan', 'Russia', 'Italy'],
          userAnswerCorrect: false
        }
      ],
      currentQuestion: 0,
      score: 0
    };
    



function generateQuestions(currQuestionArr, questionIndex){
  
  const currentQuestionObj = currQuestionArr[questionIndex];
  //console.log(currentQuestionObj);

  return `
    <div class="placeAndScore hidden">
        <div id="placeInQuiz">Question ${questionIndex + 1} out of ${currQuestionArr.length}</div>
        <div id="scoreInQuiz">Score: 0/10</div>
    </div>
    <div class="questionsAndAnswers">
        <span>${currentQuestionObj.quest}</span>
    </div>
    <div class="questionsAndAnswers">  
        <input type="radio" name="multipleChoice" id="multipleChoice1" value="${currentQuestionObj.answersArr[0]}">
        <label for="multipleChoice1">${currentQuestionObj.answersArr[0]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice2" value="${currentQuestionObj.answersArr[1]}">
        <label for="multipleChoice2">${currentQuestionObj.answersArr[1]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice3" value="${currentQuestionObj.answersArr[2]}">
        <label for="multipleChoice3">${currentQuestionObj.answersArr[2]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice4" value="${currentQuestionObj.answersArr[3]}">
        <label for="multipleChoice4">${currentQuestionObj.answersArr[3]}</label>
    </div>
    <div>
        <button id="submitAnswerButton">Submit Answer</button>
    </div>`;
}

function renderHTMLQuestion(strQuestion){
  $('#quizContent').html(strQuestion);
}

function handleQuestions(storeData){
  const html = generateQuestions(storeData.questions, storeData.currentQuestion);
  renderHTMLQuestion(html);
  
}

function handleSubmitAnswer(){
  $('#submitAnswerButton').on('click', function(event){
    const submittedAnswer = $('input[type=radio][name=multipleChoice]:checked').val();
    if(STORE.questions[STORE.currentQuestion].correctAnswer === submittedAnswer){
      STORE.score++;
      console.log(STORE.score);
    }
    
    STORE.currentQuestion++;
    handleQuestions(STORE);
  });
}

function handleCheckAnswer(){

}

function quizApp(){
  handleQuestions(STORE);
  handleSubmitAnswer();
}

$(quizApp);
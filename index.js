'use strict';

const STORE = [
  {
    startText: 'Think you\'re a foodie? Test your general knowledge on various questions and food and drink.'
  },
  {
    quest: 'What fruit is traditionally used in an Eve\'s pudding?',
    correctAnswer: 'apples',
    answersArr: [ 'pears', 'apples', 'raisins', 'lemon'],
    answersObj: { answer1: 'pears', answer2: 'apples', answer3: 'raisins', answer4: 'lemon' },
    userAnswerCorrect: false
  },

  {
    quest: 'In which country did Tea originate?',
    correctAnswer: 'China',
    answersArr: [ 'China', 'Japan', 'Russia', 'Italy'],
    answersObj: { answer1: 'China', answer2: 'Japan', answer3: 'Russia', answer4: 'Italy' },
    userAnswerCorrect: false
  }

];


function generateQuestions(currQuestionObj){
  return `
    <div class="questionsAndAnswers">
        <span>${currQuestionObj.quest}</span>
    </div>
    <div class="questionsAndAnswers">  
        <input type="radio" name="multipleChoice" id="multipleChoice1">
        <label for="multipleChoice1">${currQuestionObj.answersArr[0]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice2">
        <label for="multipleChoice2">${currQuestionObj.answersArr[1]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice3">
        <label for="multipleChoice3">${currQuestionObj.answersArr[2]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice4">
        <label for="multipleChoice4">${currQuestionObj.answersArr[3]}</label>
    </div>
    <div>
        <button id="submitAnswerButton">Submit Answer</button>
    </div>`;
}

function renderHTMLQuestion(strQuestion){
  $('#quizContent').html(strQuestion);
}

function handleQuestions(storeData){
  const storeCopy = storeData;
  const html = generateQuestions(storeCopy[1]);
  renderHTMLQuestion(html);
  //$( "input[type=radio][name=nultipleChoice]:checked" ).val();
}

function quizApp(){
  handleQuestions(STORE);
}

$(quizApp);
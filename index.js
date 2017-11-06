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
    }
    



function generateQuestions(currQuestionArr, questionIndex){
  
  const currentQuestionObj = currQuestionArr[questionIndex];
  console.log(currentQuestionObj);

    return `
    <div class="placeAndScore hidden">
        <div id="placeInQuiz">Question ${questionIndex + 1} out of ${currQuestionArr.length}</div>
        <div id="scoreInQuiz">Score: 0/10</div>
    </div>
    <div class="questionsAndAnswers">
        <span>${currentQuestionObj.quest}</span>
    </div>
    <div class="questionsAndAnswers">  
        <input type="radio" name="multipleChoice" id="multipleChoice1">
        <label for="multipleChoice1">${currentQuestionObj.answersArr[0]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice2">
        <label for="multipleChoice2">${currentQuestionObj.answersArr[1]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice3">
        <label for="multipleChoice3">${currentQuestionObj.answersArr[2]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice4">
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
  //$( "input[type=radio][name=nultipleChoice]:checked" ).val();
}

function handleSubmitAnswer(){
    $('#submitAnswerButton').on('click', function(event){
        STORE.currentQuestion++;
        handleQuestions(STORE);
    });
}

function quizApp(){
  handleQuestions(STORE);
  handleSubmitAnswer();
}

$(quizApp);
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
        <div id="scoreInQuiz">Score: ${STORE.score}/${currQuestionArr.length}</div>
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

function generateRightFeedback(currQuestionArr, questionIndex){

    return `
        <div class="feedBack">
            <div id="placeInQuiz">Question ${questionIndex + 1} out of ${currQuestionArr.length}</div>
            <div id="scoreInQuiz">Score: ${STORE.score}/${currQuestionArr.length}</div>
            <p>Cheers! You Are Right!</p>
            <button>Go to the next Question</button>
        </div>
    `;
}

function generateWrongFeedback(currQuestionArr, questionIndex){
  
    return `
    <div class="feedBack">
        <div id="placeInQuiz">Question ${questionIndex + 1} out of ${currQuestionArr.length}</div>
        <div id="scoreInQuiz">Score: ${STORE.score}/${currQuestionArr.length}</div>
        <p>You've been Chopped! The correct answer was ${STORE.questions.correctAnswer}</>
        <button>Go to the next Question</button>
    </div>
    `;
}

function renderHTML(strQuestion){
  $('#quizContent').html(strQuestion);
}

function handleQuestions(storeData){
  const html = generateQuestions(storeData.questions, storeData.currentQuestion);
  renderHTML(html);
}

function handleWrongFeedback(storeData){
    const wrongHTML = generateWrongFeedback(storeData.questions, storeData.currentQuestion);
    renderHTML(wrongHTML);
}

function handleRightFeedback(storeData){
    const rightHTML = generateRightFeedback(storeData.questions, storeData.currentQuestion);
    renderHTML(rightHTML);
}

function handleSubmitAnswer(){
  $('#submitAnswerButton').on('click', function(event){
    event.preventDefault();
    const submittedAnswer = $('input[type=radio][name=multipleChoice]:checked').val();
    
    console.log(STORE.currentQuestion);
    console.log(STORE.questions.length);

        if(STORE.questions[STORE.currentQuestion].correctAnswer === submittedAnswer){
            STORE.score++;
            console.log(STORE.score);
            // STORE.currentQuestion++;
            handleRightFeedback(STORE);
        } else {
            // STORE.currentQuestion++;
            handleWrongFeedback(STORE);
        }
  });
}

function handleNextQuestionBtn(){
    
}

function quizApp(){
  handleQuestions(STORE);
  handleSubmitAnswer();
}

$(quizApp);
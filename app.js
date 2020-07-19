// Start of All Functions areas

//Quiz Building Function
function buildQuiz() {
  //Variable to Store HTML output fro Quiz Questions
  const output = [];

  //for each Question..
  myQuestions.forEach((currentQuestion, questionNumber) => {
    //Variable to store list of possible Answers
    const answers = [];

    //for each available answers choices
    for (letter in currentQuestion.answers) {
      // add an HTML radio button
      answers.push(
        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}"> ${letter} : ${currentQuestion.answers[letter]}
              </label>`
      );
    }

    //add this Question and its Answer
    output.push(
      `<div class="slide">
        <div class="questions"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
          </div>`
    );
  });

  //Finally combine our output list into one string of HTML amd put on the page

  quizContainer.innerHTML = output.join("");
}

//Result Desplay Function
function showResults() {
  //Gather Answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  //Keep Track of user's answer
  let numCorrect = 0;

  //for each question
  myQuestions.forEach((currentQuestion, questionNumber) => {
    //find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    //if answer is correct

    if (userAnswer === currentQuestion.correctAnswer) {
      //add to the number of correct answers
      numCorrect++;

      //color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    //if answer is wrong
    else {
      //color of the answer red
      answerContainers[questionNumber].style.color = "red";
    }
  });

  //show nubmer of correct answers
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}
function showPreviousSlide() {
  showSlide(currentSlide - 1);
}
// End of All Functions areas

// Start of All Variables areas

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question:
      "Which wicket-keeper equalled Adam Gilchrist's 2003 World Cup record for most dismissals in a single edition??",
    answers: {
      a: "MS Dhoni",
      b: "Tom Latham",
      c: "Alex Carey",
      d: "Jos Buttler",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Who created the unwanted record for the most expensive figures in a World Cup match??",
    answers: {
      a: "Nuwan Pradeep",
      b: "Yuzvendra Chahal",
      c: "Rashid Khan",
      d: "Dawlat Zadran",
    },
    correctAnswer: "c",
  },
  {
    question:
      "After the World Cup final and Super Over were tied, England won the match on boundary count. What would happen if the Super Over were to be tied today??",
    answers: {
      a: "England win",
      b: "New Zealand win",
      c: "World Cup shared",
      d: "The Super Over would be played again",
    },
    correctAnswer: "d",
  },

  {
    question:
      "Rohit Sharma and David Warner scored more than 600 runs in the tournament. Who was the only other batsman to do so??",
    answers: {
      a: "Kane Williamson",
      b: "Aaron Finch",
      c: "Shakib Al Hasan",
      d: "Joe Root",
    },
    correctAnswer: "c",
  },
  {
    question: "What was unique about 2019 edition of the World Cup???",
    answers: {
      a: "Least number of teams",
      b: "All Test playing nations were involved",
      c: "South Africa didn't make knockouts for the first time",
      d: "No associate teams involved",
    },
    correctAnswer: "d",
  },
  {
    question:
      "At which venue did Mustafizur Rahman, Jason Behrendorff, Shaheen Afridi and Mitchell Starc pick up five-wicket hauls??",
    answers: {
      a: "Lord's",
      b: "Southampton",
      c: "Taunton",
      d: "Birmingham",
    },
    correctAnswer: "a",
  },
];

// End of All Variables areas

//Kick off start calling functions

// Display Quiz
buildQuiz();

//Pagination Codes
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);
//on Submit Show Results

submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

//show the 1st slide

showSlide(currentSlide);

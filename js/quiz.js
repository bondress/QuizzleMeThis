// function to get one element
function getOne(element) {
    return document.querySelector(element);
  }

  // function to get all elements of the same name
  const getAll = (elements) => {
    return document.querySelectorAll(elements);
  };
  
  // Array to store question details
  const quizData = [
    {
        question: "What's the biggest animal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Saltwater crocodile"],
        answer: "Blue Whale"
    },
    {
        question: "In what franchise would you find the character Katniss Everdeen?",
        options: ["Hunger Games", "Harry Potter", "Avengers", "Lord of the Rings"],
        answer: "Hunger Games"
    },
    {
        question: "Where is known as the happiest place on earth?",
        options: ["Nigeria", "Finland", "Switzerland", "Disneyland"],
        answer: "Disneyland"
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Pluto", "Earth", "Mercury", "Jupiter"],
        answer: "Mercury"
    },
    {
        question: "What nut is in the middle of a Ferrero Rocher?",
        options: ["Hazelnut", "Groundnut", "Cashew Nut", "Pistachio"],
        answer: "Hazelnut"
    },
    {
        question: "What is the chemical symbol for tin?",
        options: ["Mb", "Tc", "Sn", "Ru"],
        answer: "Sn"
    },
    {
        question:"What is the capital of Finland?",
        options: ["Hong Kong", "Helsinki", "Dublin", "Tbilisi"],
        answer: "Helsinki"
    },
    {
        question:"Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Vincent Van Gogh", "Pablo Picasso"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the currency of Denmark?",
        options: ["Krone", "Dollars", "Yen", "Naira"],
        answer: "Krone"
    },
    {
        question: "What was the old name for a Snickers bar before it changed in 1990?",
        options: ["Snackers", "Chocothon", "Smarties", "Marathon"],
        answer: "Marathon"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Neptune", "Jupiter", "Earth", "Mercury"],
        answer: "Mercury"
    },
    {
        question: "How many human players are there on each side in a polo match?",
        options: ["Eleven", "Four", "Seven", "Fourteen"],
        answer: "Four"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
    },
    {
        question: "Who wrote the play called Romeo and Juliet?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
        answer: "William Shakespeare"
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Isaac Newton"],
        answer: "Alexander Graham Bell"
    }
];

const questionElement = getOne(".quiz-question"),
optionOne = getOne(".quiz-option-1"),
optionTwo = getOne(".quiz-option-2"),
optionThree = getOne(".quiz-option-3"),
optionFour = getOne(".quiz-option-4"),
submitButton = getOne(".quiz-btn");

let currentQuestion = 0, score = 0;

// function to show each question
function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionOne.innerHTML = question.options[0];
    optionTwo.innerHTML = question.options[1];
    optionThree.innerHTML = question.options[2];
    optionFour.innerHTML = question.options[3];

    optionOne.addEventListener("click", selectAnswer);
    optionTwo.addEventListener("click", selectAnswer);
    optionThree.addEventListener("click", selectAnswer);
    optionFour.addEventListener("click", selectAnswer);
}

// function to add the scores based on the correct answer
function selectAnswer(e) {
    const selectedButton = e.target,
    answer = quizData[currentQuestion].answer;

    e.preventDefault();
    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    localStorage.setItem("currentScore", score);

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        location.replace("./result.html");
    }
}

showQuestion();
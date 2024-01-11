score = localStorage.getItem("currentScore");

function showResult() {
    console.log(score);
    console.log("Is it working?");
    resultTitle = getOne(".result-title");
    resultSubtext = getOne(".result-sub-text");
    if (score >= (quizData.length * 0.8)) {
        resultTitle.innerHTML = "Your Score = " + score + "/" + quizData.length;
        resultSubtext.innerHTML = "Woohoo! You're Quizzle Royalty! Long may you rule!";
    } else if (score >= (quizData.length * 0.6)) {
        resultTitle.innerHTML = "Your Score = " + score + "/" + quizData.length;
        resultSubtext.innerHTML = "Yay! You're a Quizzle Knight! Cheers!";
    } else {
        resultTitle.innerHTML = "Your Score = " + score + "/" + quizData.length;
        resultSubtext.innerHTML = "Uh oh... You're a Jolly Jester. Try again if you want to be taken seriously ;)";
    }
}

showResult();
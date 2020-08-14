//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var emikaScore = 0;
var blueScore = 0;
var delilahScore = 0;
var amaniScore = 0;
var audreyScore = 0;
var everScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
//questions 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");
var q1a6 = document.getElementById("q1a6");

//questions 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q2a6 = document.getElementById("q2a6");

//questions 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");
var q3a6 = document.getElementById("q3a6");

//questions 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");
var q4a6 = document.getElementById("q4a6");

//questions 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");
var q5a6 = document.getElementById("q5a6");

//questions 6
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");
var q6a5 = document.getElementById("q6a5");
var q6a6 = document.getElementById("q6a6");

//questions 7
var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");
var q7a5 = document.getElementById("q7a5");
var q7a6 = document.getElementById("q7a6");

var results = document.getElementById("result");

var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
//questions 1
q1a1.addEventListener("click", emika);
q1a2.addEventListener("click", blue);
q1a3.addEventListener("click", delilah);
q1a4.addEventListener("click", amani);
q1a5.addEventListener("click", audrey);
q1a6.addEventListener("click", ever);

//questions 2
q2a1.addEventListener("click", delilah);
q2a2.addEventListener("click", amani);
q2a3.addEventListener("click", blue);
q2a4.addEventListener("click", ever);
q2a5.addEventListener("click", emika);
q2a6.addEventListener("click", audrey);

//questions 3
q3a1.addEventListener("click", amani);
q3a2.addEventListener("click", emika);
q3a3.addEventListener("click", delilah);
q3a4.addEventListener("click", audrey);
q3a5.addEventListener("click", ever);
q3a6.addEventListener("click", blue);

//questions 4
q4a1.addEventListener("click", audrey);
q4a2.addEventListener("click", amani);
q4a3.addEventListener("click", delilah);
q4a4.addEventListener("click", ever);
q4a5.addEventListener("click", blue);
q4a6.addEventListener("click", emika);

//questions 5
q5a1.addEventListener("click", delilah);
q5a2.addEventListener("click", emika);
q5a3.addEventListener("click", blue);
q5a4.addEventListener("click", audrey);
q5a5.addEventListener("click", ever);
q5a6.addEventListener("click", amani);

//questions 6
q6a1.addEventListener("click", blue);
q6a2.addEventListener("click", amani);
q6a3.addEventListener("click", ever);
q6a4.addEventListener("click", delilah);
q6a5.addEventListener("click", emika);
q6a6.addEventListener("click", audrey);

//questions 6
q7a1.addEventListener("click", ever);
q7a2.addEventListener("click", delilah);
q7a3.addEventListener("click", emika);
q7a4.addEventListener("click", audrey);
q7a5.addEventListener("click", blue);
q7a6.addEventListener("click", amani);

restart.addEventListener("click", restartQuiz);

//#TODO: Define quiz functions here
function emika(button) {
  emikaScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResults();
  }
}

function blue() {
  blueScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResults();
  }
}

function delilah() {
  delilahScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResults();
  }
}

function amani() {
  amaniScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResults();
  }
}

function audrey() {
  audreyScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResults();
  }
}

function ever() {
  everScore += 1;
  questionCount += 1;

  if (questionCount >= 7) {
    updateResults();
  }
}



//update results: final answer
function updateResults() {
  var finalCount = Math.max(emikaScore, blueScore, delilahScore, amaniScore, audreyScore, everScore);
  if (emikaScore == finalCount) {
    results.innerHTML =
      "You got Emika Chen from Warcross by Marie Lu <br><span class='rec'>Independent, quick thinker, observant, but often distrustful with strangers, Emika Chen is a force to be reckoned with when she's hacking.  </span>";
  } else if (blueScore == finalCount) {
    results.innerHTML =
      "You got Blue Sargent from The Raven Boys by Maggie Stiefvater <br><span class='rec'>Whimsical, opinionated, and ambitious, Blue Sargent is not afraid to speak her mind. Despite her hardsell on the outside, she is sensitve and caring to her friends. </span>";
  } else if (delilahScore == finalCount) {
    results.innerHTML =
      "You got Delilah Bard from A Darker Shade of Magic by VE Schwab <br><span class='rec'>Daring, passionate, courageous, and proud Delilah Bard meets new people as often as she steals their pockets.</span>";
  } else if (amaniScore == finalCount) {
    results.innerHTML =
      "You got Amani Al'Hiza from Rebel of the Sands by Alwyn Hamilton<br><span class='rec'>Adventurous, bold but wistful, Amani Al'Hiza wants to travel the world and discover what lays beyond her forsaken town. </span>";
  } else if (audreyScore == finalCount) {
    results.innerHTML =
      "You got Audrey Rose Wadsworth from Stalking Jack the Ripper by Kerri Maniscalco<br><span class='rec'>Determined, methodical, and fiesty, Audrey Rose Wadsworth has faced a class full of men and a string of murders all in one day. </span>";
  } else if (everScore == finalCount) {
    results.innerHTML =
      "You got Ever Wong from Loveboat, Taipei by Abigail Hing Wen<br><span class='rec'>Intrepid, quiet, risk-taker Ever Wong travels to Taiwan in hopes for new friends and freedom. It's up to her if she gets to keep them. </span>";
  } else {
    results.innerHTML = "Try again";
  }
}

//restart
function restartQuiz() {
  questionCount = 0;
  emikaScore = 0;
  blueScore = 0;
  delilahScore = 0;
  amaniScore = 0;
  audreyScore = 0;
  everScore = 0;
  results.innerHTML = "Your result is...";
  document.documentElement.scrollTop = 0;
}

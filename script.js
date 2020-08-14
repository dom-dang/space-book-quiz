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

  if (questionCount >= 5) {
    updateResults();
  }
}

function blue() {
  blueScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResults();
  }
}

function delilah() {
  delilahScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
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

  if (questionCount >= 5) {
    updateResults();
  }
}

function ever() {
  everScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResults();
  }
}



//update results: final answer
function updateResults() {
  if (emikaScore>= 2) {
    results.innerHTML =
      "Recommendation: Skyward by Brandon Sanderson! <br><span class='rec'>The human race, or what's left it is, is trapped on a planet that is attacked by mysterious aliens. Spensa's dream has always been to become a pilot like her father. When she finds a mysterious spaceship that supposedly has a soul, joins fight school, and meets new people, she begins to question what she's fighting for. </span>";
  } else if (blueScore >= 2) {
    results.innerHTML =
      "Recommendation: The Fountains of Silence by Ruta Sepetys! <br><span class='rec'>A beautiful story of opression, love, and secrets under the fascist distatorship of General Francisco Franco. Daniel Matheson, the son of a privileged tycoon, travels to Spain to reconnect with his mother's birth country. Through his photography, he finds someone who is as intriguing as Madrid is dangerous. </span>";
  } else if (delilahScore >= 2) {
    results.innerHTML =
      "Recommendation: American Street by Ibi Zoboi!<br><span class='rec'> On American Street, Fabiola Toussaint thought she was on the way to a good life. But as her and her family leave Haiti, her mother is detained by US immigration and she is left with her American family. Tackling unusual friends, odd cousins, and a new school, she finds herself at an internal crossroad about the American Dream.</span>";
  } else if (amaniScore >= 2) {
    results.innerHTML =
      "Recommendation: The Beautiful by Renée Ahdieh!<br><span class='rec'>Celine Rouseeau has found escape from her past in New Orleans, a city ruled by the dead. Twirling into the mysterious, glamorous city, Celine gets entailed in the underworld with the enigmatic Sebastien Saint Germain. Suddenly, one of her friends is murdered but as Celine is solving the mystery, she discovered an age-old feud that could disrupt all of New Orleans. </span>";
  } else if (audreyScore >= 2) {
    results.innerHTML =
      "Recommendation: The Beautiful by Renée Ahdieh!<br><span class='rec'>Celine Rouseeau has found escape from her past in New Orleans, a city ruled by the dead. Twirling into the mysterious, glamorous city, Celine gets entailed in the underworld with the enigmatic Sebastien Saint Germain. Suddenly, one of her friends is murdered but as Celine is solving the mystery, she discovered an age-old feud that could disrupt all of New Orleans. </span>";
  } else if (everScore >= 2) {
    results.innerHTML =
      "Recommendation: The Beautiful by Renée Ahdieh!<br><span class='rec'>Celine Rouseeau has found escape from her past in New Orleans, a city ruled by the dead. Twirling into the mysterious, glamorous city, Celine gets entailed in the underworld with the enigmatic Sebastien Saint Germain. Suddenly, one of her friends is murdered but as Celine is solving the mystery, she discovered an age-old feud that could disrupt all of New Orleans. </span>";
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

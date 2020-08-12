//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var skywardScore = 0;
var fountainScore = 0;
var americanScore = 0;
var beautifulScore = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
//questions 1 
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//questions 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//questions 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//questions 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//questions 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var results = document.getElementById("result");



//#TODO: Add Event Listeners to your answer choice variables.
//questions 1
q1a1.addEventListener("click", skyward);
q1a2.addEventListener("click", fountain);
q1a3.addEventListener("click", american);
q1a4.addEventListener("click", beautiful);

//questions 2
q2a1.addEventListener("click", american);
q2a2.addEventListener("click", skyward);
q2a3.addEventListener("click", beautiful);
q2a4.addEventListener("click", fountain);

//questions 3
q3a1.addEventListener("click", beautiful);
q3a2.addEventListener("click", fountain);
q3a3.addEventListener("click", american);
q3a4.addEventListener("click", skyward);

//questions 4
q4a1.addEventListener("click", skyward);
q4a2.addEventListener("click", beautiful);
q4a3.addEventListener("click", fountain);
q4a4.addEventListener("click", american);

//questions 5
q4a1.addEventListener("click", fountain);
q4a2.addEventListener("click", american);
q4a3.addEventListener("click", skyward);
q4a4.addEventListener("click", beautiful);




//#TODO: Define quiz functions here
function skyward(){
  skywardScore+=1;
  questionCount +=1; 
  
  if (questionCount ==5){
    updateResults();
  }
}

function fountain(){
  fountainScore+=1;
  questionCount +=1; 
  
  if (questionCount == 5){
    updateResults();
  }
}

function american(){
  americanScore+=1;
  questionCount +=1; 
  
  if (questionCount ==5){
    updateResults();
  }
}

function beautiful(){
  beautifulScore+=1;
  questionCount +=1; 

  if (questionCount ==5){
    updateResults();
  }
}



//update results: final answer
function updateResults(){
  if (skywardScore >= 2){
    results.innerHTML = "We recommend Skyward by Brandon Sanderson!"; 
  }
  if (fountainScore >= 2){
    results.innerHTML = "We recommend The Fountains of Silence by Ruta Sepetys!"; 
  }
  if (americanScore >= 2){
    results.innerHTML = "We recommend American Street by Ibi Zoboi!"; 
  }
  if (beautifulScore >= 2){
    results.innerHTML = "We recommend The Beautiful by Renée Ahdieh!"; 
  }
  
}
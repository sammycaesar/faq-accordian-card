"use strict";

// // Variables;
// const questionClicked = document.querySelectorAll("#question");
// const displayAnswer = document.getElementsByClassName("accordion-answer");

// //When user triggers a question, answer is revealed
// document.addEventListener("click", (e) => {
//   this.classList.add("accordian-answer");
//   if (displayAnswer.style.maxHeight) {
//     displayAnswer.style.maxHeight = null;
//   } else {
//     displayAnswer.style.maxHeight = displayAnswer.scrollHeight + "px";
//   }
// });

// Collapses a expanded question

var questionClicked = document.querySelectorAll("#question");
let displayAnswer = document.getElementsByClassName("accordion-answer");
var i;

for (i = 0; i < questionClicked.length; i++) {
  questionClicked[i].addEventListener("click", (e) => {
    console.log("Question clicked");

    if (displayAnswer.style.display === "block") {
      displayAnswer.style.display = "none";
      this.classList.remove("accordian-answer");
    } else {
      displayAnswer.style.display = "block";
      this.classList.toggle("accordian-answer");
    }
  });
}

"use strict";

//Accordion Question Variable
const questionClicked = document.querySelectorAll(".accordion-question");

//When user interacts with FAQ accordion
questionClicked.forEach((accordionQuestion) => {
  accordionQuestion.addEventListener("click", () => {
    //When users click accordion question to open answer
    if (accordionQuestion.classList.contains("active")) {
      accordionQuestion.classList.remove("active");

      //When another accordion question is clicked and will close previous accordion tab
    } else {
      const accordionQuestionOpen = document.querySelectorAll("active");
      accordionQuestionOpen.forEach((accordionQuestionOpen) => {
        accordionQuestionOpen.classList.remove("active");
      });
      accordionQuestion.classList.add("active");
    }
  });
});

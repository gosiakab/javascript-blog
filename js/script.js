"use strict";

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log("Link was clicked!");
  
   /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll(".titles a.active");

    for (let activeLink of activeLinks) {
      activeLink.classList.remove("active");
    }
    console.log("Class active is removed from links!");

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll(".posts .active");

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove("active");
    }
    console.log("Class active is removed from articles!");

    /* add class 'active' to the clicked link */

    clickedElement.classList.add("active");

    console.log("clickedElement:", clickedElement);
    const links = document.querySelectorAll(".titles a");

    for(let link of links){
    link.addEventListener('click', titleClickHandler);
}
  /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute("href");
    console.log("Found:", articleSelector);
  
  /* find the correct article using the selector (value of 'href' attribute) */
 
    const targetArticle = document.querySelector(articleSelector);
    console.log("Clicked: ", targetArticle);
  /* add class 'active' to the correct article */

    targetArticle.classList.add("active");
    console.log("Correct article clicked!")   
  }
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
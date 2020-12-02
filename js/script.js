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



  const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";
  function generateTitleLinks(){


  /* remove contents of titleList */
  
    const titleList = document.querySelector(optTitleListSelector);
    function clearMessages() {
        document.querySelector(optTitleListSelector).innerHTML = "";
        console.log("Titlelist content removed!");
  }
  clearMessages();


  /* find all the articles and save them to variable: articles */
  
    var articles = document.querySelectorAll(optArticleSelector);
    
    let html = '';

    for(let article of articles){
   
  /* get the article id */

    const articleId = article.getAttribute("id");
    console.log("Found:", articleId);
    
  /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log("Title article defined!");
    
  /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log("HTML created!");
    
  /* insert link into html variable */
    
    html = html + linkHTML;
    }
    titleList.innerHTML = html;
    
  /* insert link into titleList */
    
    const links = document.querySelectorAll(".titles a");
    console.log()
    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }    
  }

generateTitleLinks();
  
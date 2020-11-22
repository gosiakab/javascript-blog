"use strict";
{
  const titleClickHandler = function (event) {
    console.log("Link was clicked!");


    event.preventDefault();

    const clickedElement = this;
    console.log("clickedElement:", clickedElement);

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll(".titles a.active");

    for (let activeLink of activeLinks) {
      activeLink.classList.remove("active");
    }

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll(".posts .active");

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove("active");
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add("active");
    console.log("clickedElement:", clickedElement);

    /* get 'href' attribute from the clicked link */

    

    const hrefAttribute = clickedElement.getAttribute("href");

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(hrefAttribute);
    console.log("clickedElement:", targetArticle);

    /* add class 'active' to the correct article */
    targetArticle.classList.add("active");
  };
  const links = document.querySelectorAll(".titles a");

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}
/* new script */
const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks() {
  console.log("Title links generated!");

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  function clearMessages() {
    document.querySelector(optTitleListSelector).innerHTML = "";
  }
  clearMessages();

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {
    article.classList.remove("active");
    console.log("Article content removed!");

    /* get the article id */

    const articleId = article.getAttribute("id");

    /* find the title element */

    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      "</span></a></li>";
    console.log("Html created!");

    /* insert link into titleList */

    titleList.insertAdjacentHTML = titleList.insertAdjacentHTML(
      "afterbegin",
      linkHTML
    );

    /* find all the articles and save them to variable: articles */

    const AllArticles = document.querySelectorAll(optArticleSelector);

    function saveAllArticles() {
      var articles = AllArticles;
    }

    let html = "";
  }
  generateTitleLinks();
}

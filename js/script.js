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
  console.log("Correct article clicked!");
};
const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks(customSelector = " ") {
  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  function clearMessages() {
    document.querySelector(optTitleListSelector).innerHTML = "";
    console.log("Titlelist content removed!");
  }
  clearMessages();

  /* find all the articles and save them to variable: articles */

  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );

  let html = "";

  for (let article of articles) {
    /* get the article id */

    const articleId = article.getAttribute("id");
    console.log("Found:", articleId);

    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log("Title article defined!");

    /* create HTML of the link */

    let linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      "</span></a></li>";
    console.log("HTML created!");

    /* insert link into html variable */

    html = html + linkHTML;
  }
  titleList.innerHTML = html;

  /* insert link into titleList */

  const links = document.querySelectorAll(".titles a");
  console.log();
  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}

generateTitleLinks();

const optArticleTagsSelector = ".post-tags .list";

function generateTags() {
  /* find all articles */

  let articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for (let article of articles) {
    /* find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log("Tags wrapper found!", tagsWrapper);

    /* make html variable with empty string */

    let html = "";

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute("data-tags");
    console.log("Found:", articleTags);

    /* split tags into array */

    const articleTagsArray = articleTags.split(" ");
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log("Split for each tag:", tag);

      /* generate HTML of the link */

      let linkHTML =
        '<li><a href="#tag-' + tag + '"> <span>' + tag + "</span></a></li>";
      console.log("HTML created!", linkHTML);

      /* add generated code to html variable */

      html = html + linkHTML;
    }
    tagsWrapper.innerHTML = html;
    console.log(html);

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */
  }
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  console.log("Tag was clicked!");

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute("href");
  console.log("Found:", href);

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace("#tag-", "");
  console.log("Clicked: ", tag);

  /* find all tag links with class active */

  const activeTagLinks = article.querySelectorAll(".post-tags a.active");
  console.log("Active tags found!", activeTagLinks);

  /* START LOOP: for each active tag link */

  for (let activeTagLink of activeTagLinks) {
    /* remove class active */

    activeTagLink.classList.remove("active");
  }
  console.log("Class active removed!");

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = article.querySelector(href);
  console.log("Found: ", tagLinks);

  /* START LOOP: for each found tag link */

  for (let tagLink of tagLinks) {
    /* add class active */

    tagLink.classList.add("active");
  }
  console.log("Class active is added to tags!");

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */

  const links = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log("All tag links found!");

  /* START LOOP: for each link */

  for (let link of links) {
    /* add tagClickHandler as event listener for that link */

    link.addEventListener("click", titleClickHandler);

    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

const optArticleAuthorSelector = ".post-author .list";
function generateAuthors() {
  /* find all articles */
  let articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find authors wrapper */
    const authorsWrapper = article.querySelectorAll(optArticleAuthorSelector);
    console.log("Authors wrapper found!", authorsWrapper);

    /* make html variable with empty string */
    let html = "";

    /* get tags from data-authors attribute */
    const author = article.getAttribute("data-author");
    console.log("Foud:", author);

    /* generate HTML of the link */

    let linkHTML =
      '<li> <a href="#author-' +
      author +
      '"> <span>' +
      author +
      " </span></a></li>";
    console.log("HTML created!", linkHTML);

    /* add generated code to html variable */

    html = html + linkHTML;

    authorsWrapper.innerHTML = html;
    console.log(html);
  }
}
generateAuthors();

function authorClickHandler(event) {
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  console.log("Tag was clicked!");

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute("href");
  console.log("Found:", href);

  /* find all author links with class active */

  const activeAuthorLinks = article.querySelectorAll(".post-author a.active");
  console.log("Active author found!", activeAuthorLinks);

  /* START LOOP: for each active author link */

  for (let activeAuthorLink of activeAuthorLinks) {
    /* remove class active */

    activeAuthorLink.classList.remove("active");
  }
  console.log("Class active removed!");

  /* END LOOP: for each active author link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  const authorLinks = article.querySelector(href);
  console.log("Found: ", authorLinks);

  /* START LOOP: for each found author link */

  for (let authorLink of authorLinks) {
    /* add class active */

    authorLink.classList.add("active");
  }
  console.log("Class active is added to authors!");

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-authors="' + author + '"]');
}

function addClickListenersToAuthors() {
  /* find all links to tags */

  const links = document.querySelectorAll('a.active[href^="#author-"]');
  console.log("All author links found!");

  /* START LOOP: for each link */

  for (let link of links) {
    /* add tagClickHandler as event listener for that link */

    link.addEventListener("click", titleClickHandler);

    /* END LOOP: for each link */
  }
}

addClickListenersToAuthors();

const optTagsListSelector = ".tags.list";
const params = Math.max(0, Math.min(999999));

function calculateTagsParams() {
  function generateTags() {
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};

    /* find all articles */

    /* START LOOP: for every article: */

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

    /* generate HTML of the link */

    /* add generated code to html variable */

    /* [NEW] check if this link is NOT already in allTags */
    if (!allTags[tag]) {
      /* [NEW] add generated code to allTags object */
      allTags[tag] = 1;
    } else {
      allTags[tag]++;
    }

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(".tags");

    const tagsParams = calculateTagsParams(allTags);
    console.log("tagsParams:", tagsParams);

    for (let tag in tags) {
      console.log(tag + " is used " + tags[tag] + " times");
    }

    /* [NEW] create variable for all links HTML code */
    /*let allTagsHTML = "";

  /* [NEW] START LOOP: for each tag in allTags: */
    /*for (let tag in allTags) {
    /* [NEW] generate code of a link and add it to allTagsHTML */
    /*allTagsHTML += tag + " (" + allTags[tag] + ") ";
  }
  /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    /*tagList.innerHTML = allTagsHTML;*/
  }
  generateTags();
}

/*calculateTagsParams();*/

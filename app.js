const menu = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");
menu.addEventListener("click", (event) => {
  event.target.classList.toggle("active");
  body.classList.toggle("menu-active");
});

const features = document.querySelector("#features");
const featuresText = document.querySelector(".features");
const featuresArrow = features.querySelector(".arrow");
const featuresLinks = features.querySelector(".features-links");
let featuresClicked = false;
features.addEventListener("mouseover", (event) => {
  if (!featuresClicked) {
    featuresArrow.setAttribute("src", "./images/icon-arrow-up.svg");
    featuresText.classList.add("clicked");
    featuresLinks.classList.add("show-features");
  }
});

features.addEventListener("mouseout", (event) => {
  if (!featuresClicked) {
    featuresArrow.setAttribute("src", "./images/icon-arrow-down.svg");
    featuresText.classList.remove("clicked");
    featuresLinks.classList.remove("show-features");
  }
});

features.addEventListener("click", (event) => {
  if (featuresClicked) {
    featuresClicked = false;
    featuresArrow.setAttribute("src", "./images/icon-arrow-down.svg");
    featuresText.classList.remove("clicked");
    featuresLinks.classList.remove("show-features");
  } else {
    featuresClicked = true;
    featuresArrow.setAttribute("src", "./images/icon-arrow-up.svg");
    featuresText.classList.add("clicked");
    featuresLinks.classList.add("show-features");
  }
});

const company = document.querySelector("#company");
const companyText = document.querySelector(".company");
const companyArrow = company.querySelector(".arrow");
const companyLinks = company.querySelector(".company-links");

let companyClicked = false;
company.addEventListener("mouseover", (event) => {
  if (!companyClicked) {
    companyArrow.setAttribute("src", "./images/icon-arrow-up.svg");
    companyText.classList.add("clicked");
    companyLinks.classList.add("show-company");
  }
});

company.addEventListener("mouseout", (event) => {
  if (!companyClicked) {
    companyArrow.setAttribute("src", "./images/icon-arrow-down.svg");
    companyText.classList.remove("clicked");
    companyLinks.classList.remove("show-company");
  }
});

company.addEventListener("click", (event) => {
  if (companyClicked) {
    companyClicked = false;
    companyArrow.setAttribute("src", "./images/icon-arrow-down.svg");
    companyText.classList.remove("clicked");
    companyLinks.classList.remove("show-company");
  } else {
    companyClicked = true;
    companyArrow.setAttribute("src", "./images/icon-arrow-up.svg");
    companyText.classList.add("clicked");
    companyLinks.classList.add("show-company");
  }
});

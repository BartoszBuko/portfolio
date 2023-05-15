const body = document.querySelector("body");
const html = document.querySelector("html");
const navSwitch = document.querySelector("[data-switch-nav]");

const navLines = document.querySelectorAll("[data-line]");

navSwitch.addEventListener("click", () => {
  window.scrollTo(0, 0);
  body.classList.toggle("prevent-scroll");
  html.classList.toggle("prevent-scroll");
  mobileNav.classList.toggle("closed");
  navLines[0].classList.toggle("animate-first-line");
  navLines[1].classList.toggle("animate-second-line");
  navLines[2].classList.toggle("animate-third-line");
});

// desktop nav functionality

const navLinks = document.querySelectorAll("[data-nav-link]");
const desktopNav = document.querySelector("[data-desktop-nav]");
const helloText = document.querySelector("[data-hello]");

const navHeight = helloText.offsetHeight + 80;
const mainHeight = 0;
let navLinkHeights = [];

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const projectsHeight = document.querySelector("[data-projects]").offsetTop;
    const aboutHeight = document.querySelector("[data-about]").offsetTop;
    const contactHeight = document.querySelector("[data-contact]").offsetTop;

    navLinkHeights = [mainHeight, projectsHeight, aboutHeight, contactHeight];
    if (index === 0) {
      window.scrollTo(0, 0);
    } else window.scrollTo(0, navLinkHeights[index] - 80);
  });
});

window.addEventListener("scroll", () => {
  const projectsHeight = document.querySelector("[data-projects]").offsetTop;
  const aboutHeight = document.querySelector("[data-about]").offsetTop;
  const contactHeight = document.querySelector("[data-contact]").offsetTop;

  const scrollPosition = window.scrollY;

  if (scrollPosition > navHeight) {
    helloText.classList.remove("hidden");
    helloText.classList.remove("text-blur-out");
    helloText.classList.add("text-focus-in");
  } else {
    helloText.classList.remove("text-focus-in");
    helloText.classList.add("text-blur-out");
    setTimeout(() => {
      helloText.classList.add("hidden");
    }, 300);
  }

  if (scrollPosition < projectsHeight - 80) {
    navLinks[0].classList.add("active");
    navLinks[0].classList.remove("unactive");
    if (navLinks[1].classList.contains("active")) {
      navLinks[1].classList.add("unactive");
      navLinks[1].classList.remove("active");
    }
  } else if (scrollPosition < aboutHeight - 80) {
    navLinks[0].classList.remove("active");
    navLinks[0].classList.add("unactive");
    navLinks[1].classList.remove("unactive");
    navLinks[1].classList.add("active");
    if (navLinks[2].classList.contains("active")) {
      navLinks[2].classList.remove("active");
      navLinks[2].classList.add("unactive");
    }
  } else if (scrollPosition < contactHeight - 80) {
    if (navLinks[0].classList.contains("active")) {
      navLinks[0].classList.remove("active");
      navLinks[0].classList.add("unactive");
    }
    navLinks[2].classList.remove("unactive");
    navLinks[1].classList.add("unactive");
    navLinks[1].classList.remove("active");
    navLinks[2].classList.add("active");
    navLinks[3].classList.remove("active");
  } else {
    navLinks[2].classList.remove("active");
    navLinks[2].classList.add("unactive");
    navLinks[3].classList.add("active");
  }
});

// mobile nav functionality

const mobileNav = document.querySelector("[data-mobile-nav]");
const mobileNavLinks = document.querySelectorAll("[data-mobile-nav-link]");

mobileNavLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const projectsHeight = document.querySelector("[data-projects]").offsetTop;
    const aboutHeight = document.querySelector("[data-about]").offsetTop;
    const contactHeight = document.querySelector("[data-contact]").offsetTop;

    navLinkHeights = [projectsHeight, aboutHeight, contactHeight];

    body.classList.toggle("prevent-scroll");
    html.classList.toggle("prevent-scroll");
    mobileNav.classList.toggle("closed");
    navLines[0].classList.toggle("animate-first-line");
    navLines[1].classList.toggle("animate-second-line");
    navLines[2].classList.toggle("animate-third-line");
    setTimeout(() => {
      window.scrollTo(0, navLinkHeights[index]);
    }, 500);
  });
});

// yearspan functionality

const yearSpan = document.querySelector("[data-year]");
const currentYear = new Date().getFullYear();

yearSpan.innerHTML = currentYear;

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
// querySelector returns NodeList
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // 800 is a value given to specify the limit after which the back to top button will appear

  if (scrollHeight > 800) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific section, slice used to remove the # at the beginning
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    // navbar hides the starting of the section, so navHeight deducted to show the starting of every section
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      // the height of the fixed navbar has to be deducted to get the original start of the section
      position = position - navHeight;
    }
    if (navHeight > 82) {
      // 82 means the toggle linksContainer has already been opened, so its height has to be added to get the correct start of the section 
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close the linksContainer when window is small
    linksContainer.style.height = 0;
  });
});

// ********** button onClick ************
const gameButton = document.querySelectorAll(".btn-game");
gameButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const gameName = e.currentTarget.getAttribute("title");
    console.log(gameName);
    if (gameName == "Valorant") 
      window.location.href = "https://playvalorant.com/en-gb/";
    else if (gameName == "Apex Legends")
      window.location.href = "https://www.ea.com/en-gb/games/apex-legends";
    else if (gameName == "CS:GO")
      window.location.href = "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/";
    else if (gameName == "Fortnite")
      window.location.href = "https://www.epicgames.com/fortnite/en-US/home";
  });
});
"use strict";

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate random color in RGB format
function getRandomColor() {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to pick a random font from an array of fonts
function getRandomFont() {
  const fonts = [
    "Barlow",
    "Open Sans",
    "Poppins",
    "Arial",
    "Verdana",
    "Helvetica",
  ];
  const randomIndex = getRandomInt(0, fonts.length - 1);
  return fonts[randomIndex];
}

// Function to pick a random theme: light or dark
function getRandomTheme() {
  return Math.random() > 0.5 ? "light" : "dark"; // 50% chance for light or dark theme
}

// Function to create a dynamic stylesheet
function generateDynamicStyles() {
  const primaryFont = getRandomFont();
  const primaryColor = getRandomColor();
  const backgroundColor = getRandomColor();
  const borderRadius = getRandomInt(5, 25) + "px";
  const padding = getRandomInt(10, 30) + "px";

  // Random theme choice
  const theme = getRandomTheme();

  // Light theme styles
  const lightThemeStyles = `
body {
font-family: '${primaryFont}', sans-serif;
background-color: #f4f4f4;
color: #333;
}
.btn, .btn-primary {
background-color: ${primaryColor};
padding: ${padding};
border-radius: ${borderRadius};
}
.navbar-link {
color: ${primaryColor};
}
.skills-progress {
background-color: ${primaryColor};
}
.card-title, .section-title {
font-family: '${primaryFont}', sans-serif;
}
.hero-title strong {
color: ${primaryColor};
}
`;

  // Dark theme styles
  const darkThemeStyles = `
body {
font-family: '${primaryFont}', sans-serif;
background-color: #2c2c2c;
color: #f1f1f1;
}
.btn, .btn-primary {
background-color: ${primaryColor};
padding: ${padding};
border-radius: ${borderRadius};
}
.navbar-link {
color: ${primaryColor};
}
.skills-progress {
background-color: ${primaryColor};
}
.card-title, .section-title {
font-family: '${primaryFont}', sans-serif;
}
.hero-title strong {
color: ${primaryColor};
}
`;

  // Select the appropriate theme styles
  const styles = theme === "light" ? lightThemeStyles : darkThemeStyles;

  // Inject the dynamic styles into the head of the document
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// Function to start the timer and change theme when the timer ends
function startThemeTimer() {
  let timeLeft = 60; // Timer set to 1 hour (3600 seconds)
  const timerDisplay = document.getElementById("theme-timer");

  // Update the timer every second
  const interval = setInterval(function () {
    const hours = Math.floor(timeLeft / 60);
    const minutes = Math.floor((timeLeft % 60) / 60);
    const seconds = timeLeft % 60;

    // Format the timer in HH:MM:SS format
    timerDisplay.textContent = `Next Theme Change in: ${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timeLeft--;

    // When the timer reaches 0, change the theme and reset the timer
    if (timeLeft < 0) {
      generateDynamicStyles();
      timeLeft = 60; // Reset timer to 1 hour
    }
  }, 1000);
}

// Start the timer and generate the initial theme on page load
window.onload = function () {
  generateDynamicStyles(); // Initial theme
  startThemeTimer(); // Start the timer countdown
};

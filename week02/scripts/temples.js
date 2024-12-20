let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Lesedi Motsepe";
let place = "Johannesburg, South Africa";

// \u00A9 is the unicode for the copywrite symbol
// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  
  // Change hamburger icon to 'X' on click
  hamburger.classList.toggle('close');
});
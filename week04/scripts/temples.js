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
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  
  
];
const templesContainer = document.querySelector(".temples-container");
const navigationMenu = document.querySelector(".nav-menu");

navigationMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const selectedMenuItem = e.target.textContent;
    filterTemples(selectedMenuItem);
  }
});
function filterTemples(category) {
  let filteredTemples;
  switch (category) {
    case "Old":
      filteredTemples = temples.filter((temple) => parseInt(temple.dedicationDate) < 1900);
      break;
    case "New":
      filteredTemples = temples.filter((temple) => parseInt(temple.dedicationDate) > 2000);
      break;
    case "Large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;
    case "Small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
      break;
  }
  renderTemples(filteredTemples);
}
function renderTemples(temples) {
  templesContainer.innerHTML = "";
  temples.forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.name;
    templeImage.loading = "lazy";

    const templeInfo = document.createElement("div");
    templeInfo.classList.add("temple-info");

    const templeName = document.createElement("h2");
    templeName.textContent = temple.name;

    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;

    const templeDedicationDate = document.createElement("p");
    templeDedicationDate.textContent = `Dedication Date: ${temple.dedicationDate}`;

    const templeArea = document.createElement("p");
    templeArea.textContent = `Area: ${temple.area} sq ft`;

    templeInfo.appendChild(templeName);
    templeInfo.appendChild(templeLocation);
    templeInfo.appendChild(templeDedicationDate);
    templeInfo.appendChild(templeArea);

    templeCard.appendChild(templeImage);
    templeCard.appendChild(templeInfo);

    templesContainer.appendChild(templeCard);
  });
}

renderTemples(temples);


/* temples.forEach((temple) => {
  const templeCard = document.createElement("div");
  templeCard.classList.add("temple-card");

  const templeImage = document.createElement("img");
  templeImage.src = temple.imageUrl;
  templeImage.alt = temple.name;
  templeImage.loading = "lazy"; // Native lazy loading

  const templeInfo = document.createElement("div");
  templeInfo.classList.add("temple-info");

  const templeName = document.createElement("h2");
  templeName.textContent = temple.name;

  const templeLocation = document.createElement("p");
  templeLocation.textContent = `Location: ${temple.location}`;

  const templeDedicationDate = document.createElement("p");
  templeDedicationDate.textContent = `Dedication Date: ${temple.dedicationDate}`;

  const templeArea = document.createElement("p");
  templeArea.textContent = `Area: ${temple.area}`;

  templeInfo.appendChild(templeName);
  templeInfo.appendChild(location);
  templeInfo.appendChild(dedicated);
  templeInfo.appendChild(area);

  templeCard.appendChild(templeImage);
  templeCard.appendChild(templeInfo);

  templesContainer.appendChild(templeCard);
  
  
});*/
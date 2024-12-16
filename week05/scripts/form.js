const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
];

const productNameSelect = document.getElementById("product-name");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

const form = document.getElementById("review-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const reviewData = {
        productName: document.getElementById("product-name").value,
        overallRating: document.querySelector('input[name="overall-rating"]:checked').value,
        installationDate: document.getElementById("installation-date").value,
        usefulFeatures: Array.from(document.querySelectorAll('input[name="useful-features"]:checked')).map((checkbox) => checkbox.value),
        writtenReview: document.getElementById("written-review").value,
        userName: document.getElementById("user-name").value,
    };

    localStorage.setItem("reviewData", JSON.stringify(reviewData));

    let reviewCount = localStorage.getItem("reviewCount");

    if (reviewCount === null) {
        reviewCount = 1;
    } else {
        reviewCount = parseInt(reviewCount) + 1;
    }

    localStorage.setItem("reviewCount", reviewCount);

    window.location.href = "review.html";
});

let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Lesedi Motsepe";
let place = "Johannesburg, South Africa";

// \u00A9 is the unicode for the copywrite symbol
// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;
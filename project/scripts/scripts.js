// Select the contact form
const contactForm = document.getElementById('contact-form');

// Add an event listener to the form submission
contactForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate the form data
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Send the form data to the server (or email address)
  // For demonstration purposes, we'll just log the data to the console
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

// Add event listener to the navigation menu
const navMenu = document.querySelector('header nav ul');
navMenu.addEventListener('click', (e) => {
  // Get the target element
  const target = e.target;

  // Check if the target element is a navigation link
  if (target.tagName === 'A') {
    // Prevent the default link behavior
    e.preventDefault();

    // Get the link href
    const href = target.href;

    // Navigate to the linked page
    window.location.href = href;
  }
});

// Add event listener to the product grid
const productGrid = document.querySelector('.product-grid');
productGrid.addEventListener('click', (e) => {
  // Get the target element
  const target = e.target;

  // Check if the target element is a product image
  if (target.tagName === 'IMG') {
    // Get the product data
    const productData = target.dataset.product;

    // Store the product data in local storage
    localStorage.setItem('productData', productData);

    // Navigate to the product details page
    window.location.href = 'product-details.html';
  }
});
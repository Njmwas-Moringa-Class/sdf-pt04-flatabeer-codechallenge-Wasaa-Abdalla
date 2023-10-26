// Fetch all beers and their details from the server when the page loads
document.addEventListener('DOMContentLoaded', fetchAllBeers);
  
// Function to fetch beer details and reviews from the server
function fetchBeerDetails(beerId) {
    fetch(`http://localhost:3000/beers ${beerId}`)
      .then((response) => response.json())
      .then((data) => {
        // Update beer details in the DOM
        document.getElementById('beer-name').innerText = data.name;
        document.getElementById('beer-image').src = data.image_url;
        document.getElementById('beer-image').alt = data.name;
        document.getElementById('beer-description').innerText = data.description;
  
        // Update beer reviews in the DOM
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '';
        data.reviews.forEach((review) => {
          const li = document.createElement('li');
          li.textContent = review;
          reviewList.appendChild(li);
        });
      })
      .catch((error) => {
        console.error('Error fetching beer details:', error);
      });
  }
  
  // Function to fetch all beers from the server and update the menu
  function fetchAllBeers() {
    fetch('http://localhost:3000/beers')
      .then((response) => response.json())
      .then((data) => {
        // Update beer list in the DOM
        const beerList = document.getElementById('beer-list');
        beerList.innerHTML = '';
        data.forEach((beer) => {
          const li = document.createElement('li');
          li.textContent = beer.name;
          li.addEventListener('click', () => {
            // When a beer is clicked, fetch and display its details and reviews
            fetchBeerDetails(beer.id);
          });
          beerList.appendChild(li);
        });
  
        // Display details of the first beer by default
        if (data.length > 0) {
          fetchBeerDetails(data[0].id);
        }
      })
      .catch((error) => {
        console.error('Error fetching beers:', error);
      });
  }
  
  // Function to handle the review form submission
  function handleReviewFormSubmit(event) {
    event.preventDefault();
    const reviewTextarea = document.getElementById('review');
    const reviewText = reviewTextarea.value;
    if (reviewText.trim() !== '') {
      // Add the new review to the reviews list in the DOM
      const reviewList = document.getElementById('review-list');
      const li = document.createElement('li');
      li.textContent = reviewText;
      reviewList.appendChild(li);
      // Clear the review form
      reviewTextarea.value = '';
    }
  }
  
  // Function to handle the description form submission
  function handleDescriptionFormSubmit(event) {
    event.preventDefault();
    const descriptionTextarea = document.getElementById('description');
    const newDescription = descriptionTextarea.value;
    // Update the beer description in the DOM
    document.getElementById('beer-description').innerText = newDescription;
    // Clear the description form
    descriptionTextarea.value = '';
  }
  
  // Add event listeners for form submissions
  document.getElementById('review-form').addEventListener('submit', handleReviewFormSubmit);
  document.getElementById('description-form').addEventListener('submit', handleDescriptionFormSubmit);

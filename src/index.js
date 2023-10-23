async function beerList() {
    try {
        const response = await fetch("http://localhost:3000/beers");
        const list = await response.json();
        console.log('Data retrieved:', list);
    } catch (error) {
        console.error('Beer list not found:', error);
    }
  }
  
  //Update beer details
  function beerDetails (beerList){
    function checkBeerList(beerList) {
      const noBeersAvailable = 0;
    
      if (beerList === noBeersAvailable) {
        console.error('Error: Beer list not found');
      } else {
        return;
        
      }
    }
    
    const beerList = 0;
    checkBeerList(beerList);
    }
  
  //GET REQUEST ON FIRST BEER
  const firstBeer = beerList[0];
  
  document.getElementById('beer-name').textContent = firstBeer.name
  document.getElementById('beer-image').src = firstBeer.image_url
  document.getElementById('beer-description').textContent = firstBeer.description
  document.getElementById('review-list').textContent = firstBeer.reviews
  
  //2 Menu for all beers
  async function beerList() {
    try {
          const response = await fetch("http://localhost:3000/beers");
          const list = await response.json();
          beerMenu(list.beers);
      } catch (error) {
          return console.error('Error fetching list:', error);
      }
  
  function beerMenu(beers) {
    const beerMenuDiv = document.getElementById('beer-list');
  
    beers.forEach(beer => {                                                                                                                                          
        const beerDiv = document.createElement('div');
        beerDiv.classList.add('beer');
  
        const beerNameHeading = document.createElement('h2');
        beerNameHeading.textContent = beer.name;
  
        const beerDescription = document.createElement('p');
        beerDescription.textContent = beer.description;
  
        const beerImage = document.createElement('img');
        beerImage.src = beer.image_url;
        beerImage.alt = beer.name;

        beerDiv.appendChild(beerNameHeading);
        beerDiv.appendChild(beerImage);
        beerDiv.appendChild(beerDescription);
  
        beerMenuDiv.appendChild(beerDiv);
      });
  
  
  }
  }
  

document.addEventListener('DOMContentLoaded',() =>{
    fetchBeerList().then((beerList) => {
        updateBeerDetails(beerList);
    });
})

//REVIEW FORM
const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.getElementById('reviews-container');

reviewForm.addEventListener('submit')

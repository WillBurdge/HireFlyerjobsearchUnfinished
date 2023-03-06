// Define variables for search form elements
const jobTitleInput = document.querySelector('#job-title');
const locationInput = document.querySelector('#location');
const searchForm = document.querySelector('#search-form');

// Add event listener to search form submit button
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get values from search form inputs
  const jobTitle = jobTitleInput.value;
  const location = locationInput.value;
  
  // Call function to display search results
  displaySearchResults(jobTitle, location);
});

// Define function to display search results
function displaySearchResults(jobTitle, location) {
  // Make API request to get search results
  // Replace API_KEY and API_URL with your actual API key and URL
  fetch(`API_URL?title=${jobTitle}&location=${location}`, {
    headers: {
      'Authorization': `Bearer API_KEY`
    }
  })
  .then(response => response.json())
  .then(data => {
    // Loop through search results and create HTML for each result
    let resultsHtml = '';
    data.forEach(result => {
      resultsHtml += `
        <li>
          <h2>${result.jobTitle}</h2>
          <h3>${result.companyName}</h3>
          <p>${result.location}</p>
          <p>${result.description}</p>
        </li>
      `;
    });
    
    // Display search results on the page
    const searchResultsList = document.querySelector('#search-results');
    searchResultsList.innerHTML = resultsHtml;
  })
  .catch(error => {
    console.error(error);
  });
}

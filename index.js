const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const myapikey = "6bb6895a"; 

const getMovies = async () => {
  try {
    const searchTerm = searchInput.value;

    const response = await fetch(`http://www.omdbapi.com/?apikey=${myapikey}&s=${searchTerm}`);
  
    const data = await response.json();
    console.log("data", data);

    if (data.Search) {
      const movies = data.Search;

      const content = movies.map(movie => `
        <div  class="card" style="width: 18rem;">
          <img width="200px" class="cardImg" height="300px" src="${movie.Poster}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="title card-title">${movie.Title}</h5>
            <p class="text card-text">${movie.Year}</p>
          </div>
        </div>`).join('');

      cardContainer.innerHTML = content;
    } else {
      console.log("No results found.");

    }
  } catch (err) {
    console.log("err", err);
  }
};

// Search button click event
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  getMovies(searchTerm);
  searchInput.value=""

});
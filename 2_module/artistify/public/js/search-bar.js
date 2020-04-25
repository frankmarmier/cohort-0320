import apiService from "./api-service.js";

const input = document.getElementById("search_query");
const form = document.getElementById("search_bar");
const results = document.getElementById("search_results");

function displaySearchResults(artistsArray) {
  results.innerHTML = "";
  artistsArray.forEach(artist => {
    results.innerHTML += `<div class="result">
        <a href="/artists/page/${artist._id}">${artist.name}</a>
    </div>`;
  });
}

function handleSearch(evt) {
  evt.preventDefault();
  // evt.preventDefault() avoids page refresh !!!
  apiService
    .get("/api/search?q=" + input.value)
    .then(ajaxRes => displaySearchResults(ajaxRes.data))
    .catch(ajaxErr => console.log(ajaxErr));
}

form.onsubmit = handleSearch;

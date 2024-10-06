const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("btn");
const poster = document.querySelector(".movieimg");
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const actors = document.getElementById("actors");
const director = document.getElementById("director");
const ratings = document.getElementById("rating");
const runTime = document.getElementById("runtime");
const releaseDate = document.getElementById("date");
const plot = document.getElementById("plote");
const firstLod = document.querySelector(".first-load");
const movieCard = document.getElementById("movie-card")
const errorMsg = document.getElementById("error-message")



const getMovies = async (movie) => {
  const apiKey = "293fc477";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;
  const response = await fetch(url);
  const movieData = await response.json();
  // console.log(movieData);

  if(movieData.Response === "False"){
    errorMsg.style.display = "flex";
    movieCard.style.display = "none";
  }else{
    errorMsg.style.display = "none";
    movieCard.style.display = "flex";
  }

  // code for showing movie info in movie card

  title.innerText = movieData.Title;
  genre.innerHTML = "<span class='label'>Genre - </span>" + movieData.Genre;
  actors.innerHTML = "<span class='label'>Actors - </span>" + movieData.Actors;
  director.innerHTML = "<span class='label'>Director - </span>" + movieData.Director;
  ratings.innerHTML = "<span class='label'>IMDB Rating - </span>" + movieData.imdbRating;
  runTime.innerHTML = "<span class='label'>RunTime - </span>" + movieData.Runtime;
  releaseDate.innerHTML = "<span class='label'>Release Date - </span>" + movieData.Released;
  poster.src = movieData.Poster;
  plot.innerHTML = "<span class='label'>Plote - </span>" + movieData.Plot;

 

  firstLod.style.display = "none";
  movieCard.className = "movie-card";

}

searchBtn.addEventListener("click", () => {
  getMovies(searchBox.value);
});

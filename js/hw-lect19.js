const numberOfFilms = +prompt("how many films?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};
const a = +prompt("last film", ""),
  b = +prompt("rating", ""),
  c = +prompt("last film2", ""),
  d = +prompt("rating2", "");
personalMovieDB.movies.a = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

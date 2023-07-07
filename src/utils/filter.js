export default function filterMovies(movies, textQuery, checkbox) {
  if (textQuery) {
    let resultFiltered = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(textQuery.toLowerCase())
    );
    resultFiltered = checkbox
      ? resultFiltered.filter((item) => item.duration <= 40)
      : resultFiltered;

    return resultFiltered;
  }
  if (!textQuery) { //только для сохраненных должно работать
    movies = checkbox
      ? movies.filter((item) => item.duration <= 40)
      : movies;
    return movies;
  }
}
//

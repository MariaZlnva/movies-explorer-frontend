import { SHORT_MOVIE } from './constants';

export default function filterMovies(movies, textQuery, checkbox) {
  if (textQuery) {
    let resultFiltered = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(textQuery.toLowerCase())
    );
    resultFiltered = checkbox
      ? resultFiltered.filter((item) => item.duration <= SHORT_MOVIE)
      : resultFiltered;

    return resultFiltered;
  }
  if (!textQuery) { //только для сохраненных должно работать
    movies = checkbox
      ? movies.filter((item) => item.duration <= SHORT_MOVIE)
      : movies;
    return movies;
  }
}
//

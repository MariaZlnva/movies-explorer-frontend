export default function filterMovies(movies, textQuery, checkbox) {
  
  console.log('фильтр по фильмам и запись в ЛС и стейт =>');
  console.log(movies);
  // console.log(textQuery);
  // console.log(Boolean(textQuery))
  if (textQuery) {
    console.log('текст запроса есть -фильтруем по нему')
    let resultFiltered;
    resultFiltered = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(textQuery.toLowerCase())
    );
    resultFiltered = checkbox
      ? resultFiltered.filter((item) => item.duration <= 40)
      : resultFiltered;

    console.log('список для рендера =>', resultFiltered);
    return resultFiltered;
  }
  if (!textQuery) { //только для сохраненных должно работать
    console.log('текст запроса пустой - вернем входящий массив фильмов')
    movies = checkbox
      ? movies.filter((item) => item.duration <= 40)
      : movies;
    return movies;
  }
}
//

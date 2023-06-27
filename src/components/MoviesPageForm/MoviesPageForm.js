import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import './MoviesPageForm.css';
import Preloader from '../Preloader/Preloader';

function MoviesPageForm({
  isPreloader,
  listFilms,
  onClickLike,
  isLiked,
  buttonClass,
  onFilterMovies,
  onClickCheckbox,
  isCheckbox,
  setCheckbox,
  isServerError
}) {
  console.log(listFilms);
  return (
    <>
      <SearchForm
        onFilterMovies={onFilterMovies}
        onClickCheckbox={onClickCheckbox}
        isCheckbox={isCheckbox}
        setCheckbox={setCheckbox}
      />
      {isPreloader ? (
        <Preloader />
      ) : listFilms.length === 0 ? (
        <MoviesNotFound text='Ничего не найдено.' />
      ) : isServerError === true ? (
        <MoviesNotFound text='Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.' />
      ) : (
        <MoviesCardList
          listFilms={listFilms}
          onClickLike={onClickLike}
          isLiked={isLiked}
          buttonClass={buttonClass}
        />
      )}
    </>
  );
}

export default MoviesPageForm;

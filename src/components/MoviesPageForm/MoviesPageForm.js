import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import './MoviesPageForm.css';
import Preloader from '../Preloader/Preloader';

function MoviesPageForm({
  isPreloader,
  listFilms,
  onClickLike,
  onClickDislike,
  isLiked,
  buttonClass,
  onSubmit,
  isServerError,
  onClickBtnMore,
  isSavedMovies,
  onClickCheckbox,
  isCheckbox, 
  setCheckbox,
}) {
  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        onClickCheckbox={onClickCheckbox}
        isCheckbox={isCheckbox}
        setCheckbox={setCheckbox}
      />
      {isPreloader ? (
        <Preloader />
      ) : listFilms.length === 0 || undefined || null ? (
        <MoviesNotFound text='Ничего не найдено.' />
      ) : isServerError === true ? (
        <MoviesNotFound text='Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.' />
      ) : (
        <MoviesCardList
          listFilms={listFilms}
          isSavedMovies={isSavedMovies}
          onClickLike={onClickLike}
          onClickDislike={onClickDislike}
          isLiked={isLiked}
          buttonClass={buttonClass}
          onClickBtnMore={onClickBtnMore}
          
        />
      )}
    </>
  );
}

export default MoviesPageForm;

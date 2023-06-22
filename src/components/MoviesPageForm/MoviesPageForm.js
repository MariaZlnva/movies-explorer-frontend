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
  onSubmit,
  onClickCheckbox,
  isCheckbox,
}) {
  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        onClickCheckbox={onClickCheckbox}
        isCheckbox={isCheckbox}
      />
      {isPreloader ? (
        <Preloader />
      ) : (
       listFilms.length === 0 ? (
          <MoviesNotFound />
        )
:
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

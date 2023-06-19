import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import './MoviesPageForm.css';

function MoviesPageForm({ listFilms, onClickLike, isLiked, buttonClass }) {
  return (
    <>
      <SearchForm />
      {listFilms.length === 0 ? (
        <MoviesNotFound />
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

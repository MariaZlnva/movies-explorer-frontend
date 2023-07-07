import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';

function Movies({
  isPreloader,
  isLoggedIn,
  onClickBurger,
  onClickLike,
  onClickDislike,
  isBurgerOpen,
  listFilms,
  isServerError,
  onSubmit,
  isSavedMovies,
  onClickBtnMore,
  onClickCheckbox,
  isCheckbox, 
  setCheckbox,
  isMoviesNotFoundElse,
}) {

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onClickBurger={onClickBurger}
        isBurgerOpen={isBurgerOpen}
      />
      <main className='content'>
        <MoviesPageForm
          isPreloader={isPreloader}
          listFilms={listFilms || ''}
          isSavedMovies={isSavedMovies}
          onClickLike={onClickLike}
          onClickDislike={onClickDislike}
          onSubmit={onSubmit}
          isServerError={isServerError}
          onClickBtnMore={onClickBtnMore}
          onClickCheckbox={onClickCheckbox}
          isCheckbox={isCheckbox}
          setCheckbox={setCheckbox}
          isMoviesNotFoundElse={isMoviesNotFoundElse}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';
import { useEffect, useState } from 'react';

function SavedMovies({
  isLoggedIn,
  isSavedMovies,
  onClickBurger,
  onClickDislike,
  isBurgerOpen,
  onSubmit,
  onClickCheckbox,
  isCheckbox,
  setCheckbox,
  setSavedMovies,
}) {
  
  const [isMoviesNotFoundElse, setMoviesNotFoundElse] = useState(true);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    setSavedMovies(savedMovies);

    if (savedMovies.length !== 0) {
      setMoviesNotFoundElse(false);
    }
  }, []);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onClickBurger={onClickBurger}
        isBurgerOpen={isBurgerOpen}
      />
      <main className='content'>
        <MoviesPageForm
          listFilms={isSavedMovies}
          isSavedMovies={isSavedMovies}
          onClickDislike={onClickDislike}
          onSubmit={onSubmit}
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

export default SavedMovies;

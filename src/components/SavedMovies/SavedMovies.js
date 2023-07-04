import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';
import { useEffect } from 'react';

function SavedMovies({
  isLoggedIn,
  isPreloader,
  isSavedMovies,
  onClickBurger,
  onClickDislike,
  isBurgerOpen,
  isLiked,
  onSubmit,
  onClickCheckbox, 
  isCheckbox,
}) {
  console.log('isSavedmovies=>', isSavedMovies);

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
          listFilms={isSavedMovies}
          isSavedMovies={isSavedMovies}
          onClickDislike={onClickDislike}
          isLiked={true}
          buttonClass='delete'
          onSubmit={onSubmit}
          onClickCheckbox={onClickCheckbox}
          isCheckbox={isCheckbox}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

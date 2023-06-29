import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';
import { useEffect } from 'react';

function SavedMovies({
  isLoggedIn,
  isPreloader,
  listFilms,
  onClickBurger,
  onClickLike,
  isBurgerOpen,
  isLiked,
  onSubmit,
  onClickCheckbox, 
  isCheckbox,
  onGetSaveMovies
}) {

  useEffect(() => {
    onGetSaveMovies();
  }, [isLiked])

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
          listFilms={listFilms}
          onClickLike={onClickLike}
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

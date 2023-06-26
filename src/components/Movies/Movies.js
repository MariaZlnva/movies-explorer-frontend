import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';
import { useEffect } from 'react';

function Movies({
  isPreloader,
  isLoggedIn,
  listFilms,
  onClickBurger,
  onClickLike,
  isBurgerOpen,
  isLiked,
  onSubmit,
  // onClickCheckbox, 
  // isCheckbox,
  isServerError
}) {

  // useEffect(() => {
  //   const listFilms = localStorage.getItem('foundMovies');
    
  // }, [])

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen} />
      <main className='content'>
        <MoviesPageForm
          isPreloader={isPreloader}
          listFilms={listFilms}
          onClickLike={onClickLike}
          isLiked={isLiked}
          buttonClass='active'
          onSubmit={onSubmit}
          // onClickCheckbox={onClickCheckbox}
          // isCheckbox={isCheckbox}
          isServerError={isServerError}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

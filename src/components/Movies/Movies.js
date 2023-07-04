import { useState, useEffect, useContext } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies({
  isPreloader,
  isLoggedIn,
  onClickBurger,
  onClickLike,
  onClickDislike,
  isBurgerOpen,
  isLiked,
  listFilms,
  isServerError,
  onSubmit,
  isSavedMovies,
  setSavedMovies,
  onClickBtnMore
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
          isLiked={isLiked}
          buttonClass='active'
          onSubmit={onSubmit}
          isServerError={isServerError}
          onClickBtnMore={onClickBtnMore}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

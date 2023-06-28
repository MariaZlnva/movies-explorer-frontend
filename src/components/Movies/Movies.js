import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';
import { useEffect, useState } from 'react';

function Movies({
  isPreloader,
  isLoggedIn,
  onClickBurger,
  onClickLike,
  isBurgerOpen,
  isLiked,
  onSubmit,
  isServerError,
}) {

  const [moviesForRender, setMoviesForRender] = useState([]);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [renderMoreMovies, setRenderMoreMovies] = useState(0);

  function handlerFilterAndSeach(value, isCheckbox) {
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (!allMovies) {
      onSubmit();
    }
    localStorage.setItem('searchQuery', value);
    localStorage.setItem('stateCheckbox', isCheckbox);

    filterMoviesForRender();
  }

  function filterMoviesForRender() {
    const value = localStorage.getItem('searchQuery');
    const isCheckbox = JSON.parse(localStorage.getItem('stateCheckbox'));
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (value && allMovies) {
      const moviesFilterSeach = allMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(value.toLowerCase())
      );
      console.log('фильмы до сортировки по чекбоксу', moviesFilterSeach);
      const moviesLastSeach = isCheckbox
        ? moviesFilterSeach.filter((item) => item.duration <= 40)
        : moviesFilterSeach;

      console.log('фильмы после чекбокса', moviesLastSeach);
      localStorage.setItem('moviesLastSeach', JSON.stringify(moviesLastSeach));

      handleResize();
    }
  }

  function handleResize() {
    const moviesLastSeach = JSON.parse(localStorage.getItem('moviesLastSeach'));
    setMoviesForRender(moviesLastSeach);
    if (moviesLastSeach === null) {
      return;
    }
    if (windowInnerWidth > 760 && windowInnerWidth <= 1280) {
      setMoviesForRender(moviesLastSeach.slice(0, 7));
      setRenderMoreMovies(7);
    } else if (windowInnerWidth <= 760) {
      setMoviesForRender(moviesLastSeach.slice(0, 5));
      setRenderMoreMovies(5);
    }
  }

  function changeWidthWindow() {
    setWindowInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    //  меняет стейт перемен. при увелич. ширины экрана
    window.addEventListener('resize', changeWidthWindow);
    handleResize();
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, [windowInnerWidth]);

  function handlerClickBtnMore() {
    const moviesLastSeach = JSON.parse(localStorage.getItem('moviesLastSeach'))
    setMoviesForRender(moviesLastSeach.slice(0, moviesForRender.length + renderMoreMovies));
  }

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
          listFilms={moviesForRender || ''}
          onClickLike={onClickLike}
          isLiked={isLiked}
          buttonClass='active'
          onFilterMovies={handlerFilterAndSeach}
          isServerError={isServerError}
          onClickBtnMore={handlerClickBtnMore}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

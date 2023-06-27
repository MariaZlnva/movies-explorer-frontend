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

  useEffect(() => {
    filterMoviesForRender();
  }, []);

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
    if (value && isCheckbox && allMovies) {
      const moviesFilterSeach = allMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(value.toLowerCase())
      );
      setMoviesForRender(
        isCheckbox
          ? moviesFilterSeach.filter((item) => item.duration <= 40)
          : moviesFilterSeach
      );
      localStorage.setItem('filterMovies', JSON.stringify(moviesForRender));
    }


    // setCheckbox(isCheckbox);
    // localStorage.setItem('filterMovies', JSON.stringify(moviesForRender));
    // console.log(moviesForRender)
  }

  function handleResize() {
    if (windowInnerWidth >= 960) {
      setMoviesForRender(moviesForRender.slice(0, 7));
    } else if (windowInnerWidth < 960 && windowInnerWidth >= 560) {
      setMoviesForRender(moviesForRender.slice(0, 2));
    }
  }

  function changeWidthWindow() {
    setWindowInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    //  меняет стейт перемен. при увелич. ширины экрана
    window.addEventListener('resize', changeWidthWindow);
    handleResize();
    // console.log(windowInnerWidth);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, [windowInnerWidth]);

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
          listFilms={moviesForRender}
          onClickLike={onClickLike}
          isLiked={isLiked}
          buttonClass='active'
          onFilterMovies={handlerFilterAndSeach}
          isServerError={isServerError}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

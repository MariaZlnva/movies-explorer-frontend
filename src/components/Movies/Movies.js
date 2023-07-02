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
// console.log('movies=>', isSavedMovies);

// const currentUser = useContext(CurrentUserContext);
// const [renderMoreMovies, setRenderMoreMovies] = useState(0);
// const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
// const [moviesForRender, setMoviesForRender] = useState([]);

  // useEffect(() => {  
  //   filterMoviesForRender()
  // },[])


// function handlerSubmitSeachMovies(query, checked) {
//   console.log('movies=> handlerSubmitSeachMovies');
//   const allMovies = JSON.parse(localStorage.getItem('allMovies'));
//   if (!allMovies) {
//     onSubmit();
//   }
//   localStorage.setItem('searchQuery', query);
//   localStorage.setItem('stateCheckbox', checked);
//   filterMoviesForRender();
//   console.log('movieRender при сабмите =>', moviesForRender);
//   handleResizeRenderMovies();
// }

// function filterMoviesForRender() {
//   console.log('movies=> filterMoviesForRender');
//   const searchQuery = localStorage.getItem('searchQuery');
//   const isCheckbox = JSON.parse(localStorage.getItem('stateCheckbox'));
//   const allMovies = JSON.parse(localStorage.getItem('allMovies'));
//   if (searchQuery && allMovies) {
//     let movies = allMovies.filter((movie) =>
//       movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     movies = isCheckbox ? movies.filter((item) => item.duration <= 40) : movies;
//       console.log('movies после чекбокса =>', movies);
//       console.log('savedMovies =>', isSavedMovies);
//     movies.forEach(movie => {
//       isSavedMovies.forEach(movieSave => {
//         if(movie.id === movieSave.movieId && movieSave.owner._id === currentUser._id){
//           movie.isSave = true;
//           // setIsLiked(true);
//         }
//       })
//     })
//     console.log('movies для рендера =>', movies);
//     localStorage.setItem('movies', JSON.stringify(movies));
//     // setMoviesForRender(moviesToRender);
//   }
// }

//   function handleResizeRenderMovies() {
//     const moviesForRender = JSON.parse(localStorage.getItem('movies'));
//     console.log('movies handleResizeRenderMovies=> ', moviesForRender)
//     if (moviesForRender === null) {
//       return;
//     }
//     if (windowInnerWidth > 760 && windowInnerWidth <= 1280) {
//       setMoviesForRender(moviesForRender.slice(0, 7));
//       setRenderMoreMovies(7);
//     } else if (windowInnerWidth <= 760) {
//       setMoviesForRender(moviesForRender.slice(0, 5));
//       setRenderMoreMovies(5);
//     }
//   }

//   function changeWidthWindow() {
//     setWindowInnerWidth(window.innerWidth);
//   }
  
//   useEffect(() => {
//     //  меняет стейт перемен. при увелич. ширины экрана
//     window.addEventListener('resize', changeWidthWindow);
//     handleResizeRenderMovies();
//     return () => {
//       window.addEventListener('resize', handleResizeRenderMovies);
//     };
//   }, []);


//   const handlerClickBtnMore = () => {
//     const movies = JSON.parse(localStorage.getItem('movies'));
//     setMoviesForRender(
//       movies.slice(0, moviesForRender.length + renderMoreMovies)
//     );
//   }
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

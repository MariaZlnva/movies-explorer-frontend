import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ listFilms, onClickLike, onClickDislike, isLiked, buttonClass, onClickBtnMore, isSavedMovies,  }) {
  const location = useLocation();
  
  const moviesFoundSeach = JSON.parse(localStorage.getItem('moviesFoundSeach'));
  const moviesFilterCheckbox = JSON.parse(localStorage.getItem('moviesFilterCheckbox'));
  const lengthListMovies = (JSON.parse(localStorage.getItem('stateCheckbox'))) ? moviesFilterCheckbox : moviesFoundSeach
 

  return (
    <section className={location.pathname === '/saved-movies' ? 'moviesList moviesList_saved-movies' : 'moviesList'}>
      <ul className='moviesList__items'>
        {listFilms.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie._id || movie.id}
              onClickDislike={onClickDislike}
              onClickLike={onClickLike}
              isLiked={isLiked}
              buttonClass={buttonClass}
              isSavedMovies={isSavedMovies}
            />
        ))}
      </ul>
      {location.pathname === '/movies' && (listFilms.length >= 3 && listFilms.length < lengthListMovies.length) ?( <button className='moviesList__button' type='button' onClick={onClickBtnMore}>Ещё</button>) : ''}
    </section>
  );
}

export default MoviesCardList;

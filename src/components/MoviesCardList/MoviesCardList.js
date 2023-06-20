import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ listFilms, onClickLike, isLiked, buttonClass }) {
  const location = useLocation();
  return (
    <section className={location.pathname === '/saved-movies' ? 'moviesList moviesList_saved-movies' : 'moviesList'}>
      <ul className='moviesList__items'>
        {listFilms.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onClickLike={onClickLike}
              isLiked={isLiked}
              buttonClass={buttonClass}
            />
        ))}
      </ul>
      {location.pathname === '/movies' && <button className='moviesList__button' type='button'>Ещё</button>}
    </section>
  );
}

export default MoviesCardList;

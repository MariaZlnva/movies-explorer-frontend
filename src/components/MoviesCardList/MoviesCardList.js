import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect } from 'react';

function MoviesCardList({ listFilms, onClickLike, isLiked, buttonClass, onClickBtnMore }) {
  const location = useLocation();
  const moviesLastSeach = JSON.parse(localStorage.getItem('moviesLastSeach'));

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
      {location.pathname === '/movies' && (listFilms.length >= 3 && listFilms.length < moviesLastSeach.length) ?( <button className='moviesList__button' type='button' onClick={onClickBtnMore}>Ещё</button>) : ''}
    </section>
  );
}

export default MoviesCardList;

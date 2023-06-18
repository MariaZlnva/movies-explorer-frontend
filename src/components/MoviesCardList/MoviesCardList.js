import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ listFilms, onClickLike, isLiked, buttonClass }) {
  const location = useLocation();
  return (
    <div className='moviesList'>
      <ul className='moviesList__items'>
        {listFilms.map((movie, i) => (
            <MoviesCard
              movie={movie}
              key={i}
              onClickLike={onClickLike}
              isLiked={isLiked}
              buttonClass={buttonClass}
            />
        ))}
      </ul>
      {location.pathname === '/movies' && <button className='moviesList__button' type='button'>Ещё</button>}
    </div>
  );
}

export default MoviesCardList;

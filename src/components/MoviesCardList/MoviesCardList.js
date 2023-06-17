import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ listFilms, onClickLike, isLiked, buttonClass }) {
  const location = useLocation();
  return (
    <div className='moviesList'>
      <ul className='moviesList__movies'>
        {listFilms.map((movie, i) => (
          <li key={movie._id}>
            <MoviesCard
              movie={movie}
              onClickLike={onClickLike}
              isLiked={isLiked}
              buttonClass={buttonClass}
            />
          </li>
        ))}
      </ul>
      {location.pathname === '/movies' && <button className='moviesList__button' type='button'>Ещё</button>}
    </div>
  );
}

export default MoviesCardList;

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ listFilms, onClickLike, isLiked, buttonClass }) {
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
      <button className='moviesList__button'>Ещё</button>
    </div>
  );
}

export default MoviesCardList;

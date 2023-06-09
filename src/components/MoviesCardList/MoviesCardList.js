import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList (){

  return(
    <div className='moviesList'>
      <ul className='moviesList__movies'>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      </ul>
      <button className='moviesList__button'>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
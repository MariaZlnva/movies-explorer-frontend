import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList ({listFilms}){

  return(
    <div className='moviesList'>
      <ul className='moviesList__movies'>
        {listFilms.map(movie => <li key={movie._id}><MoviesCard movie={movie}/></li>)}
      </ul>
      <button className='moviesList__button'>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
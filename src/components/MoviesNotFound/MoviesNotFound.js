 import './MoviesNotFound.css';

function MoviesNotFound () {
  return (
    <div className='movies-not-found'>
      <p className='movies-not-found__text'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
    </div>
  )
};

export default MoviesNotFound;
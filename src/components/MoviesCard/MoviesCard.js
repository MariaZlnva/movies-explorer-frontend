import './MoviesCard.css';

function MoviesCard ({movie}) {
  const imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;
  return (
    <div className='movie'>
      <div className='movie__info'>
        <div className='movie__data'>
          <h3 className='movie__title'>{movie.nameRU}</h3>
          <p className='movie__duration'>{movie.duration}</p>
        </div>
        <button aria-label="Нравится" className='movie__like' type="button"/>
      </div>
      <img className='movie__image' src={imageUrl} alt={movie.nameRU} />
    </div>
  )
}

export default MoviesCard;
import './MoviesCard.css';

function MoviesCard ({movie, onClickLike, isLiked}) {
  const imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;

  function handleLikeClick(movie) {
    onClickLike(movie)
  }

  return (
    <div className='movie'>
      <div className='movie__info'>
        <div className='movie__data'>
          <h3 className='movie__title'>{movie.nameRU}</h3>
          <p className='movie__duration'>{movie.duration}</p>
        </div>
        <button aria-label="Нравится" className={isLiked ? 'movie__like movie__like_active' : 'movie__like'} type="button" onClick={handleLikeClick}/>
      </div>
      <img className='movie__image' src={imageUrl} alt={movie.nameRU} />
    </div>
  )
}

export default MoviesCard;
import './MovieCard.css';

function MovieCard ({movie, onClickLike, isLiked, buttonClass}) {
  const imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;

  const getDurationInHours = (min) => {
    const minutes = min % 60;
    const hours = (min-minutes)/60;
    
    const duration = hours.toString() + "ч " + (minutes < 10 ? "0" : "") + minutes.toString() + "м";
    return duration;
  }

  function handleLikeClick(movie) {
    onClickLike(movie)
  }

  return (
    <li className='movie'>
      <div className='movie__info'>
        <div className='movie__data'>
          <h2 className='movie__title'>{movie.nameRU}</h2>
          <p className='movie__duration'>{getDurationInHours(movie.duration)}</p>
        </div>
        <button aria-label="Нравится" className={isLiked ? `movie__like movie__like_${buttonClass}` : 'movie__like'} type="button" onClick={handleLikeClick}/>
      </div>
      <a className='movie__trailer' href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movie__image' src={imageUrl} alt={movie.nameRU} />
      </a>
    </li>
  )
}

export default MovieCard;
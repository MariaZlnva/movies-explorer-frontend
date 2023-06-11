import './MoviesCard.css';

function MoviesCard ({movie, onClickLike, isLiked, buttonClass}) {
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
    <div className='movie'>
      <div className='movie__info'>
        <div className='movie__data'>
          <h3 className='movie__title'>{movie.nameRU}</h3>
          <p className='movie__duration'>{getDurationInHours(movie.duration)}</p>
        </div>
        {/* <button aria-label="Нравится" className={isLiked ? 'movie__like movie__like_active' : 'movie__like'} type="button" onClick={handleLikeClick}/> */}
        <button aria-label="Нравится" className={isLiked ? `movie__like movie__like_${buttonClass}` : 'movie__like'} type="button" onClick={handleLikeClick}/>
      </div>
      <img className='movie__image' src={imageUrl} alt={movie.nameRU} />
    </div>
  )
}

export default MoviesCard;
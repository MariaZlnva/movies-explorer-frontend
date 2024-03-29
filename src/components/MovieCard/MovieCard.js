import { useLocation } from "react-router-dom";
import './MovieCard.css';
import { useEffect, useState } from 'react';

function MovieCard ({movie, onClickLike, onClickDislike, isSavedMovies }) {

  const location = useLocation();
  const imageUrl = location.pathname === '/saved-movies' ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`;
  const { isSave, id } = movie;
  const [isSaved, setSaved] = useState(isSave);

  const getDurationInHours = (min) => {
    const minutes = min % 60;
    const hours = (min-minutes)/60;
    
    const duration = hours.toString() + "ч " + (minutes < 10 ? "0" : "") + minutes.toString() + "м";
    return duration;
  }
   
  useEffect(() => {
    const movieSaved = isSavedMovies.length
      ? isSavedMovies.find((movieSave) => movieSave?.movieId === id)
      : false;
      setSaved(!!movieSaved);
  }, [isSavedMovies]);

  function handleClickLikeButton () {
    isSaved ? onClickDislike( movie, setSaved) : onClickLike(movie, setSaved);
  }
  function handleClickDeleteLike () {
    onClickDislike(movie, setSaved);
  }

  return (
    <li className='movie'>
      <div className='movie__info'>
        <div className='movie__data'>
          <h2 className='movie__title'>{movie.nameRU}</h2>
          <p className='movie__duration'>{getDurationInHours(movie.duration)}</p>
        </div>
        {/* <button aria-label="Нравится" className={(isLiked && movie.isSave) ? `movie__like movie__like_${buttonClass}` : 'movie__like'} type="button" onClick={handleLikeClick}/> */}
        {/* <button aria-label="Нравится" 
        className={`movie__like ${(movie.isSave) &&
        location.pathname === '/movies' ? 'movie__like_active' : location.pathname === '/saved-movies' ? 'movie__like_delete' : ''}`}type="button" onClick={handleLikeClick}/> */}
      { location.pathname === '/movies' && 
        <button aria-label="Нравится" className={isSaved ? `movie__like movie__like_active` : 'movie__like'} type="button" onClick={handleClickLikeButton}/>
      }
      { location.pathname === '/saved-movies' && 
        <button aria-label="Нравится" className='movie__like movie__like_delete' type="button" onClick={handleClickDeleteLike}/>
      }
      </div>
      <a className='movie__trailer' href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movie__image' src={imageUrl} alt={movie.nameRU} />
      </a>
    </li>
  )
}

export default MovieCard;
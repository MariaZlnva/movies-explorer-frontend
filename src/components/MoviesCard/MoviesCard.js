import './MoviesCard.css';

function MoviesCard () {
  return (
    <div className='movie'>
      <div className='movie__info'>
        <div className='movie__data'>
          <h3 className='movie__title'>«Роллинг Стоунз» в изгнании</h3>
          <p className='movie__duration'>61</p>
        </div>
        <button aria-label="Нравится" className='movie__like' type="button"/>
      </div>
      <img className='movie__image' src='https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg' alt='Кадр из фильма' />
    </div>
  )
}

export default MoviesCard;
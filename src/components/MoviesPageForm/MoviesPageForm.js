import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function MoviesPageForm ({listFilms, onClickLike, isLiked, buttonClass}) {
  return (
    <section className='movies__container'>
      <SearchForm />
      <MoviesCardList listFilms={listFilms} onClickLike={onClickLike} isLiked={isLiked} buttonClass={buttonClass}/>
    </section>
  )
}

export default MoviesPageForm;

import './SavedMovies.css';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';

function SavedMovies({isLoggedIn, listFilms, onClickBurger, onClickLike, isBurgerOpen, isLiked}) {
  return (
    <MoviesPageForm isLoggedIn={isLoggedIn} listFilms={listFilms} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen} onClickLike={onClickLike} isLiked={true} buttonClass='delete'/>
  )
  
} 

export default SavedMovies;
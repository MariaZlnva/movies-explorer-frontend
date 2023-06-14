import './Movies.css';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';

function Movies({isLoggedIn, listFilms, onClickBurger, onClickLike, isBurgerOpen, isLiked}) {
  return (
    <MoviesPageForm isLoggedIn={isLoggedIn} listFilms={listFilms} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen} onClickLike={onClickLike} isLiked={isLiked} buttonClass='active'/>
  )
  
} 

export default Movies;
import './Movies.css';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';

function Movies({isLoggedIn, listFilms, onClickBurger, onClickLike, isBurgerOpen, isLiked}) {
  return (
    <MoviesPageForm isLoggedIn={isLoggedIn} listFilms={listFilms} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen} onClickLike={onClickLike} isLiked={isLiked} buttonClass='active'/>
    // <div className='movies__container'>
    //  <Header isLoggedIn={true} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen}/>
    //  <div className='movies__main'>
    //   <SearchForm />
    //   <MoviesCardList listFilms={listFilms} onClickLike={onClickLike} isLiked={isLiked}/>
    //  </div>
     
    //  <Footer />  
    // </div>
  )
  
} 

export default Movies;
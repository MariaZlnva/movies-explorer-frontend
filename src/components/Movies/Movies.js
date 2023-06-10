
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({isloggedIn, listFilms, onClickBurger, onClickLike, isBurgerOpen, isLiked}) {
  return (
    <div className='movies__container'>
     <Header isLoggedIn={true} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen}/>
     <div className='movies__main'>
      <SearchForm />
      <MoviesCardList listFilms={listFilms} onClickLike={onClickLike} isLiked={isLiked}/>
     </div>
     
     <Footer />  
    </div>
  )
  
} 

export default Movies;
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';

function Movies({
  isLoggedIn,
  listFilms,
  onClickBurger,
  onClickLike,
  isBurgerOpen,
  isLiked,
}) {
  return (
    <>
      <Header isLoggedIn={true} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen} />
      <main className='content'>
        <MoviesPageForm
          listFilms={listFilms}
          onClickLike={onClickLike}
          isLiked={isLiked}
          buttonClass='active'
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

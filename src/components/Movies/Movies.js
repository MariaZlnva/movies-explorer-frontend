import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';

function Movies({
  isPreloader,
  isLoggedIn,
  listFilms,
  onClickBurger,
  onClickLike,
  isBurgerOpen,
  isLiked,
  onSubmit,
  onClickCheckbox, 
  isCheckbox
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen} />
      <main className='content'>
        <MoviesPageForm
          isPreloader={isPreloader}
          listFilms={listFilms}
          onClickLike={onClickLike}
          isLiked={isLiked}
          buttonClass='active'
          onSubmit={onSubmit}
          onClickCheckbox={onClickCheckbox}
          isCheckbox={isCheckbox}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesPageForm from '../MoviesPageForm/MoviesPageForm';

function SavedMovies({
  isLoggedIn,
  listFilms,
  onClickBurger,
  onClickLike,
  isBurgerOpen,
  isLiked,
}) {
  return (
    <>
      <Header
        isLoggedIn={true}
        onClickBurger={onClickBurger}
        isBurgerOpen={isBurgerOpen}
      />
      <main className='content'>
        <MoviesPageForm
          listFilms={listFilms}
          onClickLike={onClickLike}
          isLiked={true}
          buttonClass='delete'
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;

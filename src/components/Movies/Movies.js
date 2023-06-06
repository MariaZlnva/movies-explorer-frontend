
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div className='movies__container'>
     <Header loggedIn='true'/>
     <div className='movies__main'>
      <SearchForm />
      <MoviesCardList />
     </div>
     
     <Footer />  
    </div>
  )
  
} 

export default Movies;
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {
  return (
  <section className='seach'>
    <form className='seach__form'>
      <input className='seach__input' name='seachFilm' type='text' required placeholder='Фильм'/>
      <button className='seach__submit' type='submit'>
      </button>  
  </form>
  <FilterCheckbox/>
  </section>
  
  )
}

export default SearchForm;
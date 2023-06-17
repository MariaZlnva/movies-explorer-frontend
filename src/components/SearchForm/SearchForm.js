import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {
  return (
  <div className='seach'>
    <form className='seach__form'>
      <input className='seach__input' name='seachFilm' type='text' required placeholder='Фильм'/>
      <button className='seach__submit' type='submit'>
      </button>  
  </form>
  <FilterCheckbox/>
  </div>
  
  )
}

export default SearchForm;
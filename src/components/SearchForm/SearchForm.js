import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm () {
  return (
  <div className='seach'>
    <form className='seach__form' name='search'>
      <input className='seach__input' name='seachFilm' type='text' required minLength='2' placeholder='Фильм'/>
      <button className='seach__submit' type='submit' disabled>&gt;</button>  
  </form>
  <FilterCheckbox/>
  </div>
  
  )
}

export default SearchForm;
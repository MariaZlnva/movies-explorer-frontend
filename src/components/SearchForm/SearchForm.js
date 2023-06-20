import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm ({onSubmit}) {

  function handlerSubmit(evt){
    evt.preventDefault();
    onSubmit(); // данные с инпута, и состояние чекбокса
  }

  return (
  <section className='seach'>
    <form className='seach__form' name='search' onSubmit={handlerSubmit}>
      <div className='seach__wrap'>
        <input className='seach__input' name='seachFilm' type='text' required minLength='2' placeholder='Фильм'/>
        <button className='seach__submit' type='submit' ></button>  
      </div>
      
      <FilterCheckbox/>
  </form>
  
  </section>
  
  )
}

export default SearchForm;
import './SearchForm.css';

function SearchForm () {
  return (
  <form className='seach'>
    <div className='seach__field'>
      <input className='seach__input' name='seachFilm' type='text' required value='' placeholder='Фильм'/>
      <button className='seach__submit' type='submit'>
      </button>
    </div>
    <div className='seach__checkbox'>
      <input className='seach__checkbox-input' name="shortFilms"/>
      <label className='seach__checkbox-label'>Короткометражки</label>
    </div>
  </form>
  )
}

export default SearchForm;
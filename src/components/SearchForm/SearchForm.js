import useValidation from '../../hooks/useValidation';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit, onClickCheckbox, isCheckbox }) {
  const { values, errors, onChange, resetValidation, isValidForm } = useValidation();

  function handlerSubmit(evt) {
    evt.preventDefault();
    onSubmit(values.seachFilm, isCheckbox); // данные с инпута, и состояние чекбокса
  }

  return (
    <section className='seach'>
      <form className='seach__form' name='search' onSubmit={handlerSubmit}>
        <div className='seach__wrap'>
          <input
            className='seach__input'
            name='seachFilm'
            type='text'
            required
            minLength='2'
            placeholder='Фильм'
            value={values.seachFilm}
            onChange={onChange}
          />
          <button className='seach__submit' type='submit'></button>
        </div>
        <FilterCheckbox isCheckbox={isCheckbox} onClickCheckbox={onClickCheckbox}/>
      </form>
    </section>
  );
}

export default SearchForm;

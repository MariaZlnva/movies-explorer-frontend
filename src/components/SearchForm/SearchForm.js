import useValidation from '../../hooks/useValidation';
import { useState } from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit, onClickCheckbox, isCheckbox }) {
  const { values, onChange, resetValidation } = useValidation();
  const [errors, setErrors] = useState(false);
  

  function handlerSubmit(evt) {
    evt.preventDefault();
    if (!(values === {})) {
      setErrors(!errors);
      return;
    }
    onSubmit(values.seachFilm, isCheckbox);
    resetValidation();
  }

  return (
    <section className='seach'>
      <form className='seach__form' name='search' noValidate onSubmit={handlerSubmit}>
        <div className='seach__wrap'>
          <input
            className='seach__input'
            name='seachFilm'
            type='text'
            required
            // minLength='2'
            placeholder='Фильм'
            value={values.seachFilm || ''}
            onChange={onChange}
          />
          
          <button className='seach__submit' type='submit' ></button>
          
        </div>
        <span className={errors ? 'seach__error_active' : 'seach__error'}>Нужно ввести ключевое слово</span>
        <FilterCheckbox isCheckbox={isCheckbox} onClickCheckbox={onClickCheckbox}/>
      </form>
    </section>
  );
}

export default SearchForm;

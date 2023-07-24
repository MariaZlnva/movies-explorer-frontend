import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  onSubmit, onClickCheckbox, isCheckbox, setCheckbox
}) {
  const [value, setValue] = useState({});
  const [errors, setErrors] = useState(false);
  const location = useLocation();

  function onChange(evt) {
    setValue(evt.target.value);
  }

  useEffect(() => {
    if (location.pathname === '/movies'){
      setCheckbox((JSON.parse(localStorage.getItem('stateCheckbox'))) || false);
      setValue(localStorage.getItem('searchQuery'));
      return;
    } 
    else if (location.pathname === '/saved-movies') {
      setCheckbox(false);
      setValue('');

    }
  }, []);

  function handlerSubmit(evt) {
    evt.preventDefault();
    if (location.pathname === '/movies' && !value) {
      setErrors(!errors);
      return;
    }
    onSubmit(value, isCheckbox, setValue, setCheckbox);
    setErrors(false);
  }

  return (
    <section className='seach'>
      <form
        className='seach__form'
        name='search'
        noValidate
        onSubmit={handlerSubmit}
      >
        <div className='seach__wrap'>
          <input
            className='seach__input'
            name='seachFilm'
            type='text'
            required
            placeholder='Фильм'
            value={value || ''}
            onChange={onChange}
          />
          <button className='seach__submit' type='submit'></button>
        </div>
        <span className={errors ? 'seach__error_active' : 'seach__error'}>
          Нужно ввести ключевое слово.
        </span>
        <FilterCheckbox
          isCheckbox={isCheckbox}
          onClickCheckbox={onClickCheckbox}
        />
      </form>
    </section>
  );
}

export default SearchForm;

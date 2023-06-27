import { useEffect, useState } from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  onFilterMovies,
  // isCheckbox,
  // setCheckbox,
  onClickCheckbox,
}) {
  const [value, setValue] = useState({});
  const [errors, setErrors] = useState(false);
  const [isCheckbox, setCheckbox] = useState(false);

  function onChange(evt) {
    setValue(evt.target.value);
  }

  function handlerClickCheckbox(evt) {
    setCheckbox(evt);
  }

  useEffect(() => {
    setCheckbox(JSON.parse(localStorage.getItem('stateCheckbox')));
    setValue(localStorage.getItem('searchQuery'));
  }, []);

  function handlerSubmit(evt) {
    evt.preventDefault();
    if (!value) {
      setErrors(!errors);
      return;
    }
    onFilterMovies(value, isCheckbox);
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
            // minLength='2'
            placeholder='Фильм'
            value={value || ''}
            onChange={onChange}
          />

          <button className='seach__submit' type='submit'></button>
        </div>
        <span className={errors ? 'seach__error_active' : 'seach__error'}>
          Нужно ввести ключевое слово
        </span>
        <FilterCheckbox
          isCheckbox={isCheckbox}
          setCheckbox={setCheckbox}
          onClickCheckbox={handlerClickCheckbox}
        />
      </form>
    </section>
  );
}

export default SearchForm;

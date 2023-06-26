import useValidation from '../../hooks/useValidation';
import { useEffect, useState } from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit }) {
  const [isCheckbox, setCheckbox] = useState({});
  const { values, onChange, resetValidation } = useValidation();
  const [errors, setErrors] = useState(false);

  function handlerClickCheckbox(evt) {
    setCheckbox(evt);
  }

  useEffect(() => {
    setCheckbox(JSON.parse(localStorage.getItem('stateCheckbox')))
  }, [])
  
  function handlerSubmit(evt) {
    evt.preventDefault();
    if (values.seachFilm === undefined) {
      setErrors(!errors);
      return;
    }
    console.log(isCheckbox);
    onSubmit(values.seachFilm, isCheckbox);
    // resetValidation();
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
        <FilterCheckbox isCheckbox={isCheckbox} setCheckbox={setCheckbox} onClickCheckbox={handlerClickCheckbox}/>
      </form>
    </section>
  );
}

export default SearchForm;

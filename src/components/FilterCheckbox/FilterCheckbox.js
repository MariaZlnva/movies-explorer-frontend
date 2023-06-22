import useValidation from '../../hooks/useValidation';

import './FilterCheckbox.css';

function FilterCheckbox({onClickCheckbox, isCheckbox}) {
  // const { isCheckbox, onChange, resetValidation, isValidForm } = useValidation();
  return (
    <label className='checkbox'>
      <input
        className='checkbox__input-hidden'
        type='checkbox'
        name='shortFilms'
        value={isCheckbox}
        onChange={(evt) => onClickCheckbox(evt.target.checked)}
      />
      <span className='checkbox__visible'></span>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;

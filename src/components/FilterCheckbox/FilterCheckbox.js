import './FilterCheckbox.css';

function FilterCheckbox({ onClickCheckbox, isCheckbox }) {
  return (
    <label className='checkbox'>
      <input
        className='checkbox__input-hidden'
        type='checkbox'
        name='shortFilms'
        checked={isCheckbox || false}
        onChange={onClickCheckbox}
      />
      <span className='checkbox__visible'></span>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;

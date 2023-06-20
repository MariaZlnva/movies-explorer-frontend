import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
      <label className='checkbox'>
        <input
          className='checkbox__input-hidden'
          type='checkbox'
          name='shortFilms'
          required
        />
        <span className='checkbox__visible'></span>
        Короткометражки
        
      </label>
  );
}

export default FilterCheckbox;

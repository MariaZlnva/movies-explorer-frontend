import './FilterCheckbox.css';

function FilterCheckbox () {
  return (
    <div className='checkbox__container'>
      <label>
        <input className='checkbox__input_hidden' type='checkbox' name="shortFilms" required/>
        <span className='checkbox__visible'></span>
      </label>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
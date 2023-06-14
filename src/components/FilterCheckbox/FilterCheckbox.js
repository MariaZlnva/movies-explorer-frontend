import './FilterCheckbox.css';

function FilterCheckbox () {
  return (
    <div className='seach__checkbox'>
      <input className='seach__checkbox-input' name="shortFilms"/>
      <label className='seach__checkbox-label'>Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;
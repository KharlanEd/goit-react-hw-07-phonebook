import css from './Phonebook.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'redux/filterSlisce';
import { getFilter } from 'redux/selectors';


export const Filter = () => {
const filter = useSelector(getFilter);
const dispath = useDispatch();

  const onChange = e => {
    console.log(e.target.value);
    dispath(setFilter(e.target.value));
    
  }
    
 
  
    return(
 <label>
    <span className={css.title}>Find contact by name</span>
    <input
      type="text"
      value={filter}
      onChange={onChange}
      name="filter"
      placeholder="Enter name"
    />
        </label>
    )
}
import {useEffect} from "react";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { ContactForm } from "./Form";
import css from './Phonebook.module.css'
import { useDispatch,useSelector} from "react-redux";
import { fetchContacts } from "redux/operations";
import { getIsLoading,getError } from "redux/selectors";


export const App=()=> {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
      <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList/>
        
        
      </div>  
    </div>
  )
}

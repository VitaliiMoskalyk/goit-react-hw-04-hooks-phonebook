import { useState,useEffect } from "react";
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from "./components/Contacts/ContactList";
import toast, { Toaster } from 'react-hot-toast';
import {Button} from './components/Contacts/contactIte.styled'



const App = () => {
  
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

 useEffect(() => {
   const contactItems = localStorage.getItem('contacts');
   const parseContacts = JSON.parse(contactItems);
   parseContacts !== null && setContacts(parseContacts);
 }, [])
  
  useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  
  const onSubmitForm = data => {
    const normolizeData = data.name.toLowerCase();    
    contacts.find((contact) => contact.name.toLowerCase() === normolizeData)
      ? toast.error(`${data.name} is already in contacts`)
      : setContacts((prevState) =>   [data, ...prevState] );
      
  }

  const findForFilter = () =>
    contacts.filter((contact) =>contact.name.toLowerCase().includes(filter.toLowerCase()));

  const filterChanger = (evt) => {
    const filterValue = evt.currentTarget.value;
    setFilter(filterValue);
  };

  const deleteContacts = (id) => {
    toast(<span>Delete? <Button type="button" onClick={
      () => setContacts(contacts.filter(contact => contact.id !== id))}>Y</Button></span>,{
  id: 'clipboard',
})  
  };

    const visibleSearch = findForFilter();

  return (
    <section>
      <Toaster
        position="top-left"
        reverseOrder={false}/>
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmitForm}/>
      <Filter searchValue={filter} finder={filterChanger}/>
      <ContactList contacts={visibleSearch} deleteFunction2={deleteContacts}/>
    </section>)
    
}

export default App;

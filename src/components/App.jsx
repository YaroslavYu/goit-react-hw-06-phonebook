// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

import { StyledAppContainer, Title } from './phonebook.styled';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getContacts, getFilter } from './redux/selectors';
import { addContact } from './redux/contactsSlice';
// const LOCALSTORAGE_KEY_CONTACTS = 'contacts';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem(LOCALSTORAGE_KEY_CONTACTS);
  //   return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  // });

  // useEffect(() => {
  //   localStorage.setItem(LOCALSTORAGE_KEY_CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);

  const checkContactIsAdded = newContact => {
    const nameContact = newContact.name.trim().toUpperCase();
    const findContact = contacts.find(
      ({ name }) => name.trim().toUpperCase() === nameContact
    );
    if (findContact) {
      return true;
    } else return false;
  };

  const addCheckedContact = (newContact, actions) => {
    const isAddedBefore = checkContactIsAdded(newContact);
    if (isAddedBefore) {
      alert('contact be already added before');
      return;
    }

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  // const addFilter = e => {
  //   const nameFilter = e.target.value;
  //   setFilter(nameFilter);
  // };

  // const filteredContacts = () => {
  //   const filterToUpper = filter.toUpperCase();

  //   return contacts.filter(({ name }) =>
  //     name.toUpperCase().includes(filterToUpper)
  //   );
  // };

  // const delContact = idx => {
  //   const newContacts = contacts.filter(
  //     contact => contacts.indexOf(contact) !== idx
  //   );
  //   setContacts(newContacts);
  // };

  return (
    <StyledAppContainer>
      <Title>Phonebook</Title>
      <ContactForm addContact={addCheckedContact} />
      {/* <ContactForm /> */}

      <Title>Contacts</Title>
      {/* <Filter filter={addFilter} /> */}
      <Filter />

      {/* <ContactList contacts={filteredContacts()} onDelete={delContact} /> */}
      {/* <ContactList contacts={contacts} /> */}
      <ContactList />
    </StyledAppContainer>
  );
};

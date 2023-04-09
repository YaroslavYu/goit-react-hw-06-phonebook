import { StyledListItem } from './phonebook.styled';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from './redux/selectors';
import { delContact } from './redux/contactsSlice';
import { useDispatch } from 'react-redux';
// import { filteredContacts } from './redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterQuery = useSelector(getFilter);
  // console.log(Object.values(contacts)[0].name.toUpperCase());
  Object.values(contacts).map(({ name }) => {
    console.log(name);
  });
  // const filteredContacts = Object.values(contacts).filter(({ name }) =>
  //   name.toUpperCase().includes(filterQuery.toUpperCase())
  // );
  // console.log(filteredContacts);
  // console.log(contacts.map(contact => contact));
  // for (const cont of contacts) {
  //   console.log(cont);
  // }

  return (
    <ul>
      {/* {filteredContacts().map(({ name, number, id }) => {
        return (
          <StyledListItem key={id}>
            <span>
              {name} - {number}
            </span>

            <button type="button" onClick={() => dispatch(delContact(id))}>
              Delete
            </button>
          </StyledListItem>
        );
      })} */}
    </ul>
  );
}

import { nanoid, createSlice } from '@reduxjs/toolkit';

import { initialContacts } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(contacts, action) {
        // console.log(contacts);
        contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(3),
            name,
            number,
          },
        };
      },
    },
    delContact: {
      reducer(contacts, action) {
        // return contacts.filter(contact => contact.id !== action.payload);
        // contacts.splice(action.payload, 1);
        const index = contacts.findIndex(
          contact => contact.id === action.payload
        );
        contacts.splice(index, 1);
      },
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContexts';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_CONTACT,
  CLEAR_FILTER,
  FILTER_CONTACTS
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Heather Shockney',
        email: 'heathershockney.minedminds.org',
        phone: '724-231-9721',
        type: 'Professional'
      },
      {
        id: 2,
        name: 'Steven Shockney',
        email: 'shock1142003@yahoo.com',
        phone: '304-276-4079',
        type: 'Personal'
      },
      {
        id: 3,
        name: 'Caitlyn Shockney',
        email: 'catshockney@gmail.com',
        phone: '724-320-8916',
        type: 'Personal'
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  // Set Current Contact
  // Clear Current Contact
  // Update Contact
  // Filter Contacts
  // Clear Filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;

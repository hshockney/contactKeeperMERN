import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_CONTACT,
  CLEAR_FILTER,
  FILTER_CONTACTS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    default:
      return state;
  }
};

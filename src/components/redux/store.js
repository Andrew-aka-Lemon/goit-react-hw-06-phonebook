import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
export const changeFilter = createAction('filter/changeFilter');

const localStorageKey = 'UserContacts';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem(localStorageKey);

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

const contactsReducer = createReducer(getInitialContacts(), {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

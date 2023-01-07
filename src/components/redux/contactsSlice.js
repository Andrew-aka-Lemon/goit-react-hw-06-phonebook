import { createSlice } from '@reduxjs/toolkit';

const localStorageKey = 'UserContacts';

export const getInitialContacts = () => {
  const savedContacts = localStorage.getItem(localStorageKey);

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: getInitialContacts(),
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

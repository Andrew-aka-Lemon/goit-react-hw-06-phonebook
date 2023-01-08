import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { contactsSlice, getContacts } from '../../redux/contactsSlice';

import { ButtonAddFriend, Title } from './AddContactForm.styled';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { addContact } = contactsSlice.actions;
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInput = e => {
    const itsValue = e.currentTarget.value;
    const itsName = e.currentTarget.name;

    if (itsName === 'name') {
      setName(itsValue);
    }
    if (itsName === 'number') {
      setNumber(itsValue);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (
      contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(newContact.name.toLowerCase());
      }).length !== 0
    ) {
      alert(`${newContact.name} already in contact list`);
      return;
    }
    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Name</Title>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInput}
      />
      <Title>Phone number</Title>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInput}
      />
      <ButtonAddFriend type="submit">Add contact</ButtonAddFriend>
    </form>
  );
};

export default AddContactForm;

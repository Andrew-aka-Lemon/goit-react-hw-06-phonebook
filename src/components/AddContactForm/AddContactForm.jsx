import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import { ButtonAddFriend, Title } from './AddContactForm.styled';

const AddContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    onSubmit(newContact);

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

AddContactForm.propType = { onSubmit: PropTypes.func.isRequired };

export default AddContactForm;

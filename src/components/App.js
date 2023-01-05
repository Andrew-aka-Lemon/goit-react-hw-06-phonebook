import { useState, useEffect } from 'react';
import styled from 'styled-components';

import AddContactForm from './AddContactForm';
import ListOfContacts from './ListOfContacts';
import Filter from './Filter';
import { Title } from './AddContactForm/AddContactForm.styled';

const App = () => {
  const localStorageKey = 'UserContacts';

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(localStorageKey);

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = newContact => {
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

    setContacts(ps => [...ps, newContact]);
  };

  const setFilterHandler = f => setFilter(f.toLowerCase());

  const contactDeleter = id => {
    setContacts(ps => ps.filter(contact => contact.id !== id));
  };

  const listToRender = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <Wrapper>
      <div>
        <h1>Phonebook</h1>
        <AddContactForm onSubmit={addContactHandler} />
        <Filter onChange={setFilterHandler} filterText={filter} />
        <Title>Contacts</Title>
        <ListOfContacts
          listToRender={listToRender}
          onDeleteBtn={contactDeleter}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  margin-left: 30%;
  font-size: 20px;
  color: #010101;

  ul {
    margin: 0;
    padding: 0;
  }
`;

export { App };

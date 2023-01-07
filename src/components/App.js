import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import AddContactForm from './AddContactForm';
import ListOfContacts from './ListOfContacts';
import Filter from './Filter';
import { Title } from './AddContactForm/AddContactForm.styled';

import { filterSlice, getFilter } from './redux/filerSlice';
import { contactsSlice, getContacts } from './redux/contactsSlice';

const { addContact, removeContact } = contactsSlice.actions;
const { changeFilter } = filterSlice.actions;

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
    dispatch(addContact(newContact));
  };

  const setFilterHandler = f => dispatch(changeFilter(f.toLowerCase()));

  const contactDeleter = id => {
    dispatch(removeContact(id));
  };
  console.log(contacts);

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

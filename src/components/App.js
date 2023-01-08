import styled from 'styled-components';

import AddContactForm from './AddContactForm';
import ListOfContacts from './ListOfContacts';
import Filter from './Filter';
import { Title } from './AddContactForm/AddContactForm.styled';

const App = () => {
  return (
    <Wrapper>
      <div>
        <h1>Phonebook</h1>
        <AddContactForm />
        <Filter />
        <Title>Contacts</Title>
        <ListOfContacts />
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

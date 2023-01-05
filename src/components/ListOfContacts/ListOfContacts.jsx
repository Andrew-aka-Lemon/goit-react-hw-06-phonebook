import PropTypes from 'prop-types';

import { Lishka, NotUglyBtn } from './ListOfContacts.styled';

const ListOfContacts = ({ onDeleteBtn, listToRender }) => {
  return (
    <div>
      <ul>
        {listToRender.map(({ id, name, number }) => {
          return (
            <Lishka key={id}>
              <span>
                {name}: {number}
              </span>
              <NotUglyBtn type="button" onClick={() => onDeleteBtn(id)}>
                Delete
              </NotUglyBtn>
            </Lishka>
          );
        })}
      </ul>
    </div>
  );
};

ListOfContacts.propTypes = {
  listToRender: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtn: PropTypes.func,
};

export default ListOfContacts;

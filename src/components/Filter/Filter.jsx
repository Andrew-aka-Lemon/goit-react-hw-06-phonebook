import styled from 'styled-components';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filterText }) => {
  return (
    <div>
      <Title>Find contact by name</Title>
      <input
        name="filter"
        type="text"
        onChange={e => {
          onChange(e.currentTarget.value);
        }}
        value={filterText}
      />
    </div>
  );
};

const Title = styled.p`
  margin: 0;
  margin-top: 10px;
`;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};

export default Filter;

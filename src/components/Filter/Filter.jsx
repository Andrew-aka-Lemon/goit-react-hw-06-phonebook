import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { filterSlice, getFilter } from 'redux/filerSlice';

const Filter = () => {
  const { changeFilter } = filterSlice.actions;

  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const setFilterHandler = f => dispatch(changeFilter(f.toLowerCase()));

  return (
    <div>
      <Title>Find contact by name</Title>
      <input
        name="filter"
        type="text"
        onChange={e => {
          setFilterHandler(e.currentTarget.value);
        }}
        value={filter}
      />
    </div>
  );
};

const Title = styled.p`
  margin: 0;
  margin-top: 10px;
`;

export default Filter;

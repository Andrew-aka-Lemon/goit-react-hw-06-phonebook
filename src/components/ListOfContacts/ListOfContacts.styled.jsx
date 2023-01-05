import styled from 'styled-components';

const NotUglyBtn = styled.button`
  margin-left: 5px;
  border-radius: 30%;
  border-color: #901818ce;
  background-color: #d1212152;

  :active {
    background-color: #e07474;
  }
`;

const Lishka = styled.li`
  display: flex;
  align-items: center;
`;

export { Lishka, NotUglyBtn };

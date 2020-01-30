import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 84px;
  width: 74px;
  margin-right: 10px;
  padding-top: 12px;
  border: 1px solid black;
  display: inline-block;
  text-align: center;

`;

const Day = styled.div`
  font-size: 10px;
`;
const Date = styled.div`
  font-size: 1.75rem;
`;
const Month = styled.div`
  font-size: 12px;
`;

export {
  Wrapper,
  Day,
  Date,
  Month,
};

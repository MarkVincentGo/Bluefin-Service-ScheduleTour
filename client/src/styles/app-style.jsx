import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const AppWrapper = styled.div`
  height: 436px;
  width: 313px;
  border: 1px solid black;
`;

const Header = styled.h3`
  text-align: center;
  font-size: 1.375rem;
  font-weight: 600;
`;

const Paragraph = styled.div`
  color: #999;
  margin-top: 18px;
  margin-left: 10px;
  font-size: 0.75rem;
`;

const CalendarWrapper = styled.div`
  height: 114px;
  width: 290px;
  margin: 0 10px;
  overflow-x: scroll;
`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap');
  body {
    font-family: 'Libre-Franklin', sans-serif;
  }
`;

export {
  AppWrapper,
  Header,
  Paragraph,
  CalendarWrapper,
  GlobalStyles,
};

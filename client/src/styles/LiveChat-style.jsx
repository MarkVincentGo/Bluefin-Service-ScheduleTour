import styled from 'styled-components';

const Wrapper = styled.div`
  height: 580px;
  width: 375px;
  background-color: #d1d1d1;
  border: 1px solid black;

  position: fixed;
  top: 250px;
  left: 600px;
`;

const Header = styled.div`
  box-sizing: border-box;
  height: 60px;
  width: 375px;
  font-size: 1.375rem;
  font-weight: 300;

  background-color: white;
  padding-top: 15px;

  text-align: center;

`;

const ChatContainer = styled.div`
  height: 520px;
  width: 375px;

  border: 1px solid black;
`;

export { Wrapper, Header, ChatContainer };

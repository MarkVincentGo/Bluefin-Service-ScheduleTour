import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90px;
  padding: 3px;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NextButton = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #d1d1d1;
  border-radius: 100%;
`;

export { Wrapper, NextButton };

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90px;
  padding: 3px;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
`;

export { Wrapper };

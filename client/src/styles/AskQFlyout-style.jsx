import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 300;
  position: absolute;
  top: 283px;
  left: 95px;
`;


const Box = styled.div`
  height: 87px;
  width: 328px;
  background-color: white;
  z-index: 200;

  position: relative;
  border-radius: 2px;
  box-shadow: -0.9px 0.26px 3px 2.6px rgba(0,0,0,.16);

`;

const DownArrow = styled.div`
  width: 21px;
  height: 21px;
  transform: rotate(45deg);
  z-index: 201;

  position: relative;
  box-shadow: 1.9px 3.26px 4px 0px rgba(0,0,0,.16);
  left: 285px;
  top: -10px;

  background-color: white;
`;

export { Wrapper, Box, DownArrow };

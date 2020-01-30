import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 41px;
  width: 310px;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  margin: 10px auto 0;
  padding-top: 10px;
  text-align: center;
  white-space: nowrap;
`;

const Box1 = styled.a`
  width: 156.5px;
  height: 19px;
  margin: 0;
  display: inline-block;
  border-right: 1px solid #d1d1d1;

  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 200;

  color: #0c82a6;

  &:hover {
    color: #65c0ce;
  }
`;

const Box2 = styled.a`
  width: 156.5px;
  height: 19px;
  margin: 0;
  display: inline-block;

  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 200;

  color: #0c82a6;

  &:hover {
    color: #65c0ce;
  }
`

Wrapper.displayName = 'Wrapper';
Box1.displayName = 'AskQuestion';
Box2.displayName = 'PhoneNumber';

export { Wrapper, Box1, Box2 };

/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper, Box1, Box2 } from './styles/Contact-Style';

const Contact = ({ phone }) => (
  <Wrapper>
    <Box1 href="#">Ask A Question</Box1>
    <Box2 href="#">{ phone }</Box2>
  </Wrapper>
);

export default Contact;

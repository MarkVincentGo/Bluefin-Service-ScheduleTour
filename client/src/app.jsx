import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import getDates from './helpers/getDates.js'
import { AppWrapper, Header, Paragraph, GlobalStyles, CalendarWrapper } from './styles/app-style';

import CalendarContainer from './CalendarContainer'
import ScheduleButton from './ScheduleButton'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseData: null,
      dates: getDates()
    };
  };

  componentDidMount() {
    if(this.props.listingId) {
      axios.get(`/house?listingId=${this.props.listingId}`)
        .then((response) => {
          this.setState({
            houseData: response.data[0]
          });
        });
    };
  };

  render() {
    return (
      <AppWrapper>
        <GlobalStyles />
          <Header>Go Tour This Home</Header>
        <CalendarWrapper>
          {
            this.state.houseData === null ?
            <p>Hello</p> :
            <CalendarContainer dates={this.state.dates}/>
          }
        </CalendarWrapper>
          <ScheduleButton />
          <Paragraph>It's free, with no obligation - cancel anytime</Paragraph>
      </AppWrapper>
    )
  }
};

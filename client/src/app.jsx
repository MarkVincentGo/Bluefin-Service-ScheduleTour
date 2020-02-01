import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import getDates from './helpers/getDates.js'
import { AppWrapper, Header, Paragraph, GlobalStyles, CalendarWrapper } from './styles/app-style';

import CalendarContainer from './CalendarContainer';
import ScheduleButton from './ScheduleButton';
import Contact from './Contact';
import Refund from './Refund'
import StartOffer from './StartOffer'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseData: null,
      selectedDate: null,
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

  calendarEntryClick(data) {
    this.setState({
      selectedDate: data
    });
  };

  scheduleClick() {
    // placeholder for scheduling data ...
    const selectedDate = this.state.selectedDate
    // ...

    axios.post('/schedule', { selectedDate })
      .then(response => {
        console.log(response.data);
      });
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
              <CalendarContainer
              dates={getDates()}
              clickFn={this.calendarEntryClick.bind(this)}
              selectedDate={this.state.selectedDate}
              />
            }
          </CalendarWrapper>
          <ScheduleButton
          clickFn={this.scheduleClick.bind(this)}/>
          <Paragraph>It's free, with no obligation - cancel anytime</Paragraph>
          <Contact
          phone={ this.state.houseData ? this.state.houseData.phone_number : 'Didnt get it' }/>
          <Refund
          price={ this.state.houseData ?
          this.state.houseData.listing_price : 'Didnt get it'}/>
          <StartOffer />
      </AppWrapper>

    )
  };
};

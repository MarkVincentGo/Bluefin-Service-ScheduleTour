import React, { Component } from 'react';
import axios from 'axios';
import getDates from './helpers/getDates';

import {
  AppWrapper, Header, Paragraph, GlobalStyles, CalendarWrapper,
} from './styles/app-style';

import CalendarContainer from './CalendarContainer';
import ScheduleButton from './ScheduleButton';
import Contact from './Contact';
import Refund from './Refund';
import StartOffer from './StartOffer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseData: null,
      selectedDate: null,
    };
  }

  componentDidMount() {
    const { listingId } = this.props;
    if (listingId) {
      axios.get(`/house?listingId=${listingId}`)
        .then((response) => {
          this.setState({
            houseData: response.data[0],
          });
        });
    }
  }

  calendarEntryClick(data) {
    this.setState({
      selectedDate: data,
    });
  }

  scheduleClick() {
    // placeholder for scheduling data ...
    const { selectedDate } = this.state;
    // ...

    axios.post('/schedule', { selectedDate })
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
    const { houseData, selectedDate } = this.state;
    const calendarEntryClick = this.calendarEntryClick.bind(this);
    const scheduleClick = this.scheduleClick.bind(this);

    return (
      <AppWrapper>
        <GlobalStyles />
        <Header>Go Tour This Home</Header>
        <CalendarWrapper>
          {
            houseData === null
              ? <p>Hello</p>
              : (
                <CalendarContainer
                  dates={getDates()}
                  clickFn={ calendarEntryClick }
                  selectedDate={selectedDate}
                />
              )
          }
        </CalendarWrapper>
        <ScheduleButton
          clickFn={ scheduleClick }/>
        <Paragraph>It&apos;s free, with no obligation - cancel anytime</Paragraph>
        <Contact
          phone={houseData ? houseData.phone_number : 'Didnt get it'}
        />
        <Refund
          price={ houseData
            ? houseData.listing_price : 'Didnt get it'}
        />
        <StartOffer />
      </AppWrapper>
    );
  }
}

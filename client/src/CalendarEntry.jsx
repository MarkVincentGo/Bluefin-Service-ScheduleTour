import React from 'react';
import PropTypes from 'prop-types'
import { Wrapper, Day, Date, Month } from './styles/CalendarEntry-style'

const CalendarEntry = ({ date }) => (
  <Wrapper>
    <Day className="day">{date.day}</Day>
    <Date className="date">{date.date}</Date>
    <Month className="month">{date.month}</Month>
  </Wrapper>
);

CalendarEntry.propTypes = {
  dates: PropTypes.object,
}

export default CalendarEntry;

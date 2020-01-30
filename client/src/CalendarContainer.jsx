import React from 'react';
import CalendarEntry from './CalendarEntry';
import { Wrapper } from './styles/CalendarContainer-style'
import PropTypes from 'prop-types'


const CalendarContainer = ({ dates }) => {
  return(
  <Wrapper>
    {dates.day.map((day, i) => (
      <>
        <span>
          <CalendarEntry
          key={i}
          date={{
            day: day,
            month: dates.month[i],
            date: dates.date[i]
          }}/>
        </span>
      </>
    ))}
  </Wrapper>
)};

CalendarContainer.propTypes = {
  dates: PropTypes.object,
}

export default CalendarContainer;

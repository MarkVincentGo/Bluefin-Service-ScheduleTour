import React from 'react';
import CalendarEntry from './CalendarEntry';
import { Wrapper } from './styles/CalendarContainer-style'
import PropTypes from 'prop-types'


const CalendarContainer = ({ dates, clickFn, selectedDate }) => {
  return (
  <Wrapper>
    {dates.day.map((day, i) => {
      // logic: there cant be the same day number in two weeks. So comparing only the day would suffice
      let selected = false;
      if (selectedDate && selectedDate.date === dates.date[i]) {
        selected = true;
      };

      return (
      <>
        <span>
          <CalendarEntry
          key={i}
          date={{
            day: day,
            month: dates.month[i],
            date: dates.date[i]
          }}
          clickFn={clickFn}
          selected={selected}/>
        </span>
      </>
    )})}
  </Wrapper>
)};

CalendarContainer.propTypes = {
  dates: PropTypes.object,
}

export default CalendarContainer;

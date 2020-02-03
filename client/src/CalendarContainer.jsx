/* eslint-disable react/prop-types */
import React from 'react';
import CalendarEntry from './CalendarEntry';
import Wrapper from './styles/CalendarContainer-style';


const CalendarContainer = ({ dates, clickFn, selectedDate }) => (
  <Wrapper>
    {dates.date.map((date, i) => {
      // logic:there cant be the same day number in two weeks.
      // So comparing only the day would suffice
      let selected = false;
      if (selectedDate && selectedDate.date === date) {
        selected = true;
      }

      return (
        <>
          <span>
            <CalendarEntry
              key={date}
              date={{
                day: dates.day[i],
                month: dates.month[i],
                date,
              }}
              clickFn={clickFn}
              selected={selected}
            />
          </span>
        </>
      );
    })}
  </Wrapper>
);


export default CalendarContainer;

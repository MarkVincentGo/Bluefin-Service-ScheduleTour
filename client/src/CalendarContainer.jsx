import React from 'react';
import CalendarEntry from './CalendarEntry';

const CalendarContainer = ({ dates }) => {
  return(
  <div>
    {dates.day.map((day, i) => (
      <>
        <CalendarEntry key={i} date={{
          day: day,
          month: dates.month[i],
          date: dates.date[i]
        }}/>
      </>
    ))}
  </div>
)};

export default CalendarContainer;

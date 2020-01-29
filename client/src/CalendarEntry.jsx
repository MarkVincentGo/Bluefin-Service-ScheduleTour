import React from 'react';

const CalendarEntry = ({ date }) => (
  <>
    <div>{date.date}</div>
    <div>{date.month}</div>
    <div>{date.day}</div>
  </>
)

export default CalendarEntry;

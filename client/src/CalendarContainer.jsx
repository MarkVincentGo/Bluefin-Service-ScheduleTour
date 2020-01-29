import React from 'react';

const CalendarContainer = (props) => (
  <div>
    {props.date.day.map((day, i) => (
      <>
        <div>{day}</div>
        <div>{props.date.month[i]}</div>
        <div>{props.date.date[i]}</div>
      </>
    ))}
  </div>
);

export default CalendarContainer;
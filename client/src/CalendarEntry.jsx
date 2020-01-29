import React from 'react';

const CalendarEntry = ({ date }) => (
  <>
    <div className="date">{date.date}</div>
    <div className="month">{date.month}</div>
    <div className="day">{date.day}</div>
  </>
)

export default CalendarEntry;

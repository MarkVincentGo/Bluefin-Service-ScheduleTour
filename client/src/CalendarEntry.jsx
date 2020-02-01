import React from 'react';
import PropTypes from 'prop-types';
import {
  RegularWrapper, SelectedWrapper, Day, Date, Month,
} from './styles/CalendarEntry-style';

const CalendarEntry = ({ date, clickFn, selected }) => (
  selected
    ? (
      <SelectedWrapper onClick={() => { clickFn(date); }}>
        <Day className="day">{date.day}</Day>
        <Date className="date">{date.date}</Date>
        <Month className="month">{date.month}</Month>
      </SelectedWrapper>
    )
    : (
      <RegularWrapper onClick={() => { clickFn(date); }}>
        <Day className="day">{date.day}</Day>
        <Date className="date">{date.date}</Date>
        <Month className="month">{date.month}</Month>
      </RegularWrapper>
    )
);

export default CalendarEntry;

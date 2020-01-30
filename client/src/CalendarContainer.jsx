import React from 'react';
import CalendarEntry from './CalendarEntry';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background: aliceBlue;
  display: inline-block;
  white-space: nowrap;
  overflow-x: hidden;
`;

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

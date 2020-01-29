const getDates = () => {
  const date = new Date().getDate();
  const day = new Date().getDay();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  // the above variables are read only, so I have to make a writable copy of them below
  let dateWrite = date;
  let dayWrite = day;
  let monthWrite = month;
  let yearWrite = year;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let nextTwoWeeks = {
    day: [],
    month: [],
    date: []
  }

  const months31 = [0, 2, 4, 6, 7, 9, 11];

  for (let i = 0; i < 12; i += 1) {
    // this block deals with the days
    nextTwoWeeks.day.push(days[dayWrite]);
    dayWrite += 1;
    if (dayWrite === 7) {dayWrite = 0};

    // this blick deals with months
    nextTwoWeeks.month.push(months[monthWrite]);

    // this block deals with the dates
    nextTwoWeeks.date.push(dateWrite)
      dateWrite += 1;
      // if month is february
    if (monthWrite === 1) {
      if (yearWrite % 4 === 0 && dateWrite === 30) {
        dateWrite = 1;
        monthWrite += 1;
      } else if (yearWrite % 4 !== 0 && dateWrite === 29) {
        dateWrite = 1;
        monthWrite += 1;
      }
    } else if (months31.includes(monthWrite) && dateWrite === 32) {
      dateWrite = 1;
      monthWrite += 1;
      if (monthWrite === 12) {monthWrite = 0};
    } else if (months31.indexOf(monthWrite) === -1 && dateWrite === 31) {
      dateWrite = 1;
      monthWrite += 1;
    };
  }
  return nextTwoWeeks;
};

module.exports = getDates;

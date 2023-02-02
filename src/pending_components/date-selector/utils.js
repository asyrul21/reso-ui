const getMonthName = (id) => {
  const monthsHash = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  return monthsHash[`${id}`];
};

const getMappedDay = (id) => {
  //  this method is needed because
  //  by default javascript date gives value of 0-6
  //  from sunday to saturday
  //  However, we want it to be from mon-sun
  const mappedDay = {
    // map of: JS default: our preference
    0: 6, // sunday to last day
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
  };
  return mappedDay[`${id}`];
};

const getDays = () => {
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
};

const getArrayFor = (num) => {
  return [...Array(num).keys()];
};

const destructureDateComponents = (dateObj) => {
  return {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth(),
    date: dateObj.getDate(),
  };
};

export {
  getMonthName,
  getMappedDay,
  getDays,
  getArrayFor,
  destructureDateComponents,
};

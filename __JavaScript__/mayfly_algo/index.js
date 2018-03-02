/*

The Mayfly Algorithm
====================

Mayflies are insects that go through various stages of metamorphosis. The first of which can last up to 24 hours. The last of which can last 5 minutes or less. Let's assume a single mayfly started its initial stage of metamorphosis at 12am on a given day of the year and ended its last stage exactly 24 hours and 5 minutes later. Then, another mayfly started the same process at the moment the last mayfly ended it. Assuming this process continues, write a function to output the dates of all the days a mayfly will start its metamorphosis at 12am exactly in a timespan between a starting date and ending date.

You may only use vanilla JavaScript. You may use the JavaScript `Date` object.

*/

function daysOfMidnightMayflies(startDate, endDate) {
  // Your code here...
}


const examples = [
  {
    startDate: new Date('2018-01-01T00:00:00.000Z'),
    endDate: new Date('2018-02-01T00:00:00.000Z')
  },
  {
    startDate: new Date('2018-01-01T00:00:00.000Z'),
    endDate: new Date('2019-01-01T00:00:00.000Z')
  },
  {
    startDate: new Date('2018-01-01T00:00:00.000Z'),
    endDate: new Date('2020-01-01T00:00:00.000Z')
  },
  {
    startDate: new Date('2018-01-01T00:00:00.000Z'),
    endDate: new Date('2025-01-01T00:00:00.000Z')
  }
];


examples.forEach(e => {
  const dates = daysOfMidnightMayflies(e.startDate, e.endDate);
  console.log(dates);
});

// ----------------------------------------
// Expected output:
// ----------------------------------------
// => [ 2018-01-01T00:00:00.000Z ]

// => [ 2018-01-01T00:00:00.000Z, 2018-10-17T00:00:00.000Z ]

// => [ 2018-01-01T00:00:00.000Z,
//   2018-10-17T00:00:00.000Z,
//   2019-08-02T00:00:00.000Z ]

// => [ 2018-01-01T00:00:00.000Z,
//   2018-10-17T00:00:00.000Z,
//   2019-08-02T00:00:00.000Z,
//   2020-05-17T00:00:00.000Z,
//   2021-03-02T00:00:00.000Z,
//   2021-12-16T00:00:00.000Z,
//   2022-10-01T00:00:00.000Z,
//   2023-07-17T00:00:00.000Z,
//   2024-05-01T00:00:00.000Z ]






// ----------------------------------------
// Answer
// ----------------------------------------

function daysOfMidnightMayflies(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const fiveMinutes = 5 * 60 * 1000;
  const mayflyTime = oneDay + fiveMinutes;

  // While current date is less than or equal to end date
  //  add days until next
  //  create new date and push onto return array
  const dates = [new Date(startDate.getTime())];
  let nextDate = new Date(startDate.getTime());
  while (nextDate <= endDate) {
    nextDate.setTime(nextDate.getTime() + mayflyTime);

    const time = nextDate.getUTCHours() +
      nextDate.getUTCMinutes() +
      nextDate.getUTCSeconds() +
      nextDate.getUTCMilliseconds();

    const date = new Date(nextDate.getTime());

    if (time === 0) {
      dates.push(date);
    }
  }

  return dates;
}


const examples = [
  {
    startDate: new Date('2018-01-01T00:00:00.000Z'),
    endDate: new Date('2018-02-01T00:00:00.000Z')
  },
  {
    startDate: new Date('2018-01-01T00:00:00.000Z'),
    endDate: new Date('2019-01-01T00:00:00.000Z')
  },
  {
    startDate: new Date('2018-01-01T00:00:00.000Z'),
    endDate: new Date('2020-01-01T00:00:00.000Z')
  },
  {
    startDate: new Date('2018-01-01T00:00:00.000Z'),
    endDate: new Date('2025-01-01T00:00:00.000Z')
  }
];


examples.forEach(e => {
  const dates = daysOfMidnightMayflies(e.startDate, e.endDate);
  console.log(dates);

  // // Check that days between are all 289
  // console.log(dates.map((d, i) => {
  //   const startDate = d;
  //   const endDate = dates[i + 1];
  //   if (!startDate || !endDate) {
  //     return;
  //   }

  //   const timeDiff = endDate - startDate;
  //   const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  //   return daysDiff;
  // }));
});

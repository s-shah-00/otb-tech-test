import formattedDateForDisplay from './dateHelper';

const cases = [
  ['2020-10-1', '1st October 2020'],
  ['2020-10-2', '2nd October 2020'],
  ['2020-10-3', '3rd October 2020'],
  ['2020-10-4', '4th October 2020'],
  ['2020-10-5', '5th October 2020'],
  ['2020-10-6', '6th October 2020'],
  ['2020-10-7', '7th October 2020'],
  ['2020-10-8', '8th October 2020'],
  ['2020-10-9', '9th October 2020'],
  ['2020-10-10', '10th October 2020'],
  ['2020-10-11', '11th October 2020'],
  ['2020-10-12', '12th October 2020'],
  ['2020-10-13', '13th October 2020'],
  ['2020-10-14', '14th October 2020'],
  ['2020-10-15', '15th October 2020'],
  ['2020-10-16', '16th October 2020'],
  ['2020-10-17', '17th October 2020'],
  ['2020-10-18', '18th October 2020'],
  ['2020-10-19', '19th October 2020'],
  ['2020-10-20', '20th October 2020'],
  ['2020-10-21', '21st October 2020'],
  ['2020-10-22', '22nd October 2020'],
  ['2020-10-23', '23rd October 2020'],
  ['2020-10-24', '24th October 2020'],
  ['2020-10-25', '25th October 2020'],
  ['2020-10-26', '26th October 2020'],
  ['2020-10-27', '27th October 2020'],
  ['2020-10-28', '28th October 2020'],
  ['2020-10-29', '29th October 2020'],
  ['2020-10-30', '30th October 2020'],
  ['2020-10-31', '31st October 2020'],
];

test.each(cases)(
  'date formatted to Do MMMM YYYY',
  (dateText, expectedValue) => {
    const date = new Date(dateText);

    expect(formattedDateForDisplay(date)).toBe(expectedValue);
  }
);
